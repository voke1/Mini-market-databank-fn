import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';




const AddMarket = () => {

    return (
        <body>
            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div> */}
            {/* <!-- Static navbar --> */}
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt=""></img></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index-2.html">Home 2</a></li>
                                    <li><a href="index-3.html">Home 3</a></li>

                                </ul>
                            </li>
                            <li className="dropdown active">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Listing <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="add-listing.html">Add Listing</a></li>
                                    <li><a href="listing-grid.html">Listing Grid fullwidth</a></li>
                                    <li><a href="listing-grid-sidebar.html">Listing Grid + Sidebar</a></li>
                                    <li><a href="listing-map.html">With Map</a></li>
                                    <li><a href="listing-row.html">Row full width</a></li>
                                    <li><a href="listing-row-sidebar.html">Row + Sidebar</a></li>
                                    <li><a href="single-listing.html">Listing Detail</a></li>
                                    <li><a href="agents.html">Agent Listing</a></li>
                                    <li><a href="single-agent.html">Agent Detail</a></li>
                                    <li><a href="profile.html">My Profile</a></li>
                                </ul>
                            </li>
                            <li className="dropdown mega-li">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Locations <span className="caret"></span></a>
                                <ul className="dropdown-menu mega-dropdown-menu">
                                    <li>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h5>New York</h5>
                                                    <ul className="list-unstyled">
                                                        <li><a href="#">Brooklyn</a></li>
                                                        <li><a href="#">Manhattan</a></li>
                                                        <li><a href="#">Queens</a></li>
                                                        <li><a href="#">Bronx</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <h5>London</h5>
                                                    <ul className="list-unstyled">
                                                        <li><a href="#">Croydon</a></li>
                                                        <li><a href="#">Epsom</a></li>
                                                        <li><a href="#">Camberley</a></li>
                                                        <li><a href="#">Bracknell</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <h5>Paris</h5>
                                                    <ul className="list-unstyled">
                                                        <li><a href="#">Grenelle</a></li>
                                                        <li><a href="#">Luxembourg</a></li>
                                                        <li><a href="#">Place De La Bastille</a></li>
                                                        <li><a href="#">Grand Palais</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <h5>Madrid</h5>
                                                    <ul className="list-unstyled">
                                                        <li><a href="#">Centro</a></li>
                                                        <li><a href="#">Retiro</a></li>
                                                        <li><a href="#">Chamberi</a></li>
                                                        <li><a href="#">Dos De Mayo Plaza</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                                <ul className="dropdown-menu">

                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="how-work.html">How it work</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="error.html">Error 404</a></li>
                                    <li className="divider"></li>
                                    <li><a href="typography.html">Typography</a></li>
                                    <li><a href="grid-system.html">Grid system</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="button-navbar"><a href="add-listing.html"><i className="fa fa-plus"></i> Add Listing</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

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
            {/* <!--footer--> */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb30">
                            <h3>About Us</h3>
                            <p>
                                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                            <ul className="list-inline f-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>

                        </div>
                        <div className="col-md-4 mb30">
                            <h3>Support Information</h3>
                            <p>
                                <small>Address:</small><br />
                                124, Lorem Street, New York, USA
                        </p>
                            <p>
                                <small>Call Us:</small><br />
                                <a href="#">+01 1800-234-45678</a>
                            </p>
                            <p>
                                <small>Mail Us:</small><br />
                                <a href="#">support@finder.com</a>
                            </p>
                        </div>
                        <div className="col-md-4 mb30">
                            <h3>useful links</h3>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="f-links list-unstyled">
                                        <li><a href="#">Restaurants</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Deal & Coupons</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Restaurants</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="f-links list-unstyled">
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Cinemas</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Privacy & policy</a></li>
                                        <li><a href="#">T & C</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        &copy; Copyright 2017. All Right Reserved.
                </div>
                </div>
            </footer>




        </body>

    )
}


export default AddMarket;
