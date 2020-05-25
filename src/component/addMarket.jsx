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


class AddMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            category: "",
            location: "",
            image: "",
           
            address: "",
        }
    }


    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({
            isChanged: true,
        });
    }

    createMarket = market => {
        return axios
            .post(`https://agromall-market-databank.herokuapp.com/api/v1/market`, {
                email: market.email,
                password: market.password,
            })
            .then(res => {
                return res;
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
            location: this.state.location,
            image: this.state.image
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

    render() {
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
                                        center={{ lat: 18.5204, lng: 73.8567 }}
                                        height='300px'
                                        zoom={15}
                                    />
                                </div>
                                <br/>
                            </div>
                            <div className="mb40">
                                <h2 className="left-title">Add Photos</h2>
                                <form id="my-awesome-dropzone" action="add-listing.html" className="dropzone">
                                    <Dropzone/>
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
