import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";
import './css/style.css';
import './css/bundle.css';
import Header from './header';
import Footer from './footer';
import axios from "axios";
import Map from './googleMaps';
import Dropzone from './dropzone';
import tv from 'material-ui/svg-icons/hardware/tv';

Geocode.setApiKey("AIzaSyB8VMR9FooFZN64_qR8pu0jY0NJ8j_sicE");
Geocode.enableDebug();


class AddMarket extends Component {
    constructor(props) {
        super(props);
        this.center = { lat: 18.5204, lng: 73.8567 };
        this.userDetails =  JSON.parse(localStorage.getItem("userdetails"));
        this.state = {
            name: "",
            description: "",
            category: "Fruits & Vegetables",
            location: "",
            image: "",
            mapPosition: {
                lat: this.center.lat,
                lng: this.center.lng
            },
            markerPosition: {
                lat: this.center.lat,
                lng: this.center.lng
            },
            address: "",
            
        }
    }
    /**
     * Get the current address from the default map position and set those values in the state
     */
    componentDidMount() {
        Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
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

    createMarket = market => {
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
                location: {
                    address: market.address,
                    lat: this.state.markerPosition.lat,
                    long: this.state.markerPosition.lng,
                },
            }, {
                headers: headers
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                return err.response;
            });
    };


    hangleSumbit = async e => {
        e.preventDefault();
        const market = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            imageUrl: this.state.imageUrl
        };
        try {
            const response = await this.createMarket(market);
            if (response.data) {
                this.setState({
                    redirect: "/",
                    userDetails: response.data
                });
            }

        } catch (error) {
            console.log(error);
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
        console.log('userdetails: ', this.userDetails.token )
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
                                    <input className="form-control" type="text" name='name' onChange={this.onChange} placeholder="Name"></input>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name='description' onChange={this.onChange} placeholder="Market Description" rows="8"></textarea><div className="textarea-resize"></div>
                                </div>
                            </div>
                            <div className="mb40">
                                <h2 className="left-title">Category</h2>
                                <div class="form-group">
                                    <select name="category" class="form-control" onChange={this.onChange} value={this.state.category}>
                                        <option>Fruits & Vegetables</option>
                                        <option>Cereals</option>
                                        <option>Poultry</option>
                                        <option>Bakery</option>
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
                                    <Dropzone />
                                </form>
                            </div>
                            <div className="text-right mb40">
                                <button className="btn btn-lg btn-primary" style={{ backgroundColor: 'green' }} onClick={this.hangleSumbit}>Submit</button>
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
