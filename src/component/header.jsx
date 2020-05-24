import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import Footer from './footer';
import bg2 from './agromall.mp4';
import bg3 from './images/bg3.jpg'
import logo from './images/agromall-logo1.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';



const Header = () => {

    return (

            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"><img src={logo} style={{ height: '30px' }} alt=""></img></a>
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
                            <li className="dropdown">
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
                    {/* <!--/.nav-collapse --> */}
                </div>
                {/* <!--/.container-fluid --> */}
            </nav>   
    )
}


export default Header;
