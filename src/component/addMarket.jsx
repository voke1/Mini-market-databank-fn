import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";
import './css/style.css';
import './css/bundle.css';
import Header from './header';
import Footer from './footer';
import axios from "axios";
import Map from './googleMaps';
import { storage } from '../firebase/index';
import Loader from './loader';
import Swal from 'sweetalert2';

Geocode.setApiKey("AIzaSyB8VMR9FooFZN64_qR8pu0jY0NJ8j_sicE");
Geocode.enableDebug();


class AddMarket extends Component {
    constructor(props) {
        super(props);
        this.disabled = true;
        this.center = { lat: 18.5204, lng: 73.8567 };
        this.userDetails = JSON.parse(localStorage.getItem("userdetails"));
        this.state = {
            name: this.props.location.state ? this.props.location.state.name : "",
            description: this.props.location.state ? this.props.location.state.description : "",
            category: this.props.location.state ? this.props.location.state.category : "",
            location: this.props.location.state ? this.props.location.state.location : "",
            imageUrl: this.props.location.state ? this.props.location.state.imageUrl : "",
            mapPosition: {
                lat: this.center.lat,
                lng: this.center.lng
            },
            markerPosition: {
                lat: this.center.lat,
                lng: this.center.lng
            },
            address: this.props.location.state ? this.props.location.state.geolocation.address : "",
            fileUpload: '',
            file: '',
            message: "",
            showProgress: "",
            disabled: true,

        }
    }


    EnableSubmit = () => {
        const { name, description, file, address, category } = this.state;
        console.log("listed items: ", name, description, file, address, category)
        if (name && description && file && address && category) {
            this.disabled = false
        }
    }


    /**
     * Get the current address from the default map position and set those values in the state
     */
    componentDidMount() {
        console.log('location props: ', this.props)

        Geocode.fromLatLng(this.props.location.state ? this.props.location.state.geolocation.lat : this.state.mapPosition.lat, this.props.location.state ? this.props.location.state.geolocation.lng : this.state.mapPosition.lng).then(
            response => {
                const address = response.results[0].formatted_address;
                this.setState({
                    address: (address) ? address : '',
                })
            },
            error => {
                console.error(error);
            }
        );

    };


    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }


    fileSelectedHandler = event => {
        if (event.target.files[0]) {
            const fileInput = event.target.files[0];
            this.setState({
                fileUpload: fileInput,
                file: event.target.files[0].name
            });
        }
        return null;
    };

    createMarket = market => {
        console.log('create market called')
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userDetails.token}`
        }
        return axios
            .post(`https://agromall-market-databank.herokuapp.com/api/v1/market`, {
                name: market.name,
                description: market.description,
                category: market.category,
                imageUrl: market.imageUrl,
                geolocation: market.geolocation,
            }, {
                headers: headers
            })
            .then(res => {
                console.log(res);
                return res
            })
            .catch(err => {
                return err.response;
            });
    };


    saveData = async url => {
        console.log('imageUrll: ', url)
        const market = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            imageUrl: url,
            geolocation: {
                address: this.state.address,
                lat: this.state.markerPosition.lat,
                long: this.state.markerPosition.lng,
            },
        };

        try {
            const response = await this.createMarket(market);
            if (response.status === 201) {
                this.setState({
                    message: "Market details succesffully added",
                    userDetails: response.data,
                    showProgress: false
                });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Market is successfully saved',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
            else{
                this.setState({
                    message: "An error occurred.Please try again!",
                    showProgress: false
                });
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Try again',
                })            }

        } catch (error) {
            console.log(error);
        }
    };


    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ showProgress: true });

        const { fileUpload } = this.state;

        if (!fileUpload) {
            this.setState({ displayState: "visible" });
        }

        // this.fileUploadHandler();
        if (fileUpload) {
            const uploadTask = storage
                .ref(`images/${fileUpload.name}`)
                .put(fileUpload);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    // progrss function ....
                    // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    // this.setState({progress});
                },
                error => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage
                        .ref("images")
                        .child(fileUpload.name)
                        .getDownloadURL()
                        .then(url => {
                            this.saveData(url);
                        });
                }
            );
        }
    };


    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };


    onMarkerDragEnd = (event) => {
        console.log('event', event);
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng(),
            addressArray = [];
        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components;
                this.setState({
                    address: (address) ? address : ''

                })
            },
            error => {
                console.error(error);
            }
        );
    };

 


    render() {
        this.EnableSubmit()
        const message = (
            <p
                className={this.state.message ? "animated shake" : "msg"}
                style={{ color: this.state.message === "Market details succesffully added"?"green":"red" }}
            >
                {this.state.message}
            </p>)

        return (
            <body>
                <Header />
                <div className="page-bread mb70">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Submit Market details</h3>
                            </div>
                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 mb30">
                            <div className="mb40">
                                <h2 className="left-title">Market</h2>
                                <div className="form-group">
                                    <input className="form-control" type="text" name='name' onChange={this.onChange} value={this.state.name} placeholder="Name"></input>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" value={this.state.description} name='description' onChange={this.onChange} placeholder="Market Description" rows="8"></textarea><div className="textarea-resize"></div>
                                </div>
                            </div>
                            <div className="mb40">
                                <h2 className="left-title">Category</h2>
                                <div class="form-group">
                                    <select name="category" class="form-control" onChange={this.onChange} value={this.state.category}>
                                        <option>Select market category</option>
                                        <option>Fruits </option>
                                        <option>Vegetables </option>
                                        <option>Cereals</option>
                                        <option>Poultry</option>
                                        <option>Fish</option>
                                        <option>Dairy</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb40">
                                <h2 className="left-title">Market Location</h2>
                                <div className="mb15">
                                    <Map
                                        google={this.props.google}
                                        center={this.center}
                                        height='300px'
                                        zoom={15}
                                        address={this.state.address}
                                        markerPosition={this.state.markerPosition}
                                        mapPosition={this.state.mapPosition}
                                        Geocode={Geocode}
                                        onChange={this.onChange}
                                        onPlaceSelected={this.onPlaceSelected}
                                        onMarkerDragEnd={this.onMarkerDragEnd}
                                    />
                                </div>
                                <br />
                            </div>
                            <div className="mb40">
                                <h2 className="left-title">Add Photos</h2>
                                <form id="my-awesome-dropzone" action="add-listing.html" className="dropzone">
                                    <div class="custom-file">
                                        <input
                                            type="file"
                                            class="custom-file-input"
                                            id="customFileLang"
                                            lang="en"
                                            onChange={this.fileSelectedHandler}
                                        />
                                        <label class="custom-file-label" for="customFileLang">
                                            {this.state.file}
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="text-right mb40">
                                <button className="btn btn-lg btn-primary" style={{ backgroundColor: 'green' }} disabled={this.disabled}
                                    onClick={this.handleSubmit}>{this.state.showProgress ? <Loader /> : "Submit"}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>

        )

    }


}


export default AddMarket;
