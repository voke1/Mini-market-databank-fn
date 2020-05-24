import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import Header from './header';
import Footer from './footer';




const AddMarket = () => {

    return (
        <body>
            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div> */}
            {/* <!-- Static navbar --> */}
            <Header/>

            <div className="page-bread mb70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>submit listing</h3>
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
                            <h2 className="left-title">Description</h2>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Title"></input>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Listing Description" rows="8"></textarea><div className="textarea-resize"></div>
                            </div>
                        </div>
                        <div className="mb40">
                            <h2 className="left-title">Listing Location</h2>
                            <div className="mb15">
                                <input id="pac-input" className="controls form-control map-search-box" type="text" placeholder="Enter a location"></input>

                                <div id="map-canvas"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group-icon mb15">
                                        <i className="fa fa-map-marker"></i>
                                        <input type="email" className="form-control" placeholder="Latitude"></input>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group-icon mb15">
                                        <i className="fa fa-map-marker"></i>
                                        <input type="email" className="form-control" placeholder="Longitude"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb40">
                            <h2 className="left-title">Add Photos</h2>
                            <form id="my-awesome-dropzone" action="add-listing.html" className="dropzone"></form>
                        </div>
                        <div className="text-right mb40">
                            <a href="#" className="btn btn-lg btn-primary">Submit Listing</a>
                        </div>
                    </div>
                    {/* <!--/col--> */}
                </div>
            </div>
            <Footer/>
        </body>

    )
}


export default AddMarket;
