import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
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




const MarketList = () => {

    return (
        <body>
            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div>  */}
            {/* <!-- Static navbar --> */}
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"><img src={logo} style={{height: '30px'}} alt=""></img></a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index-2.html">Home 2</a></li>
                                    <li><a href="index-3.html">Home 3</a></li>

                                </ul>
                            </li>
                            <li class="dropdown active">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Listing <span class="caret"></span></a>
                                <ul class="dropdown-menu">
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
                            <li class="dropdown mega-li">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Locations <span class="caret"></span></a>
                                <ul class="dropdown-menu mega-dropdown-menu">
                                    <li>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-3">
                                                    <h5>New York</h5>
                                                    <ul class="list-unstyled">
                                                        <li><a href="#">Brooklyn</a></li>
                                                        <li><a href="#">Manhattan</a></li>
                                                        <li><a href="#">Queens</a></li>
                                                        <li><a href="#">Bronx</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-md-3">
                                                    <h5>London</h5>
                                                    <ul class="list-unstyled">
                                                        <li><a href="#">Croydon</a></li>
                                                        <li><a href="#">Epsom</a></li>
                                                        <li><a href="#">Camberley</a></li>
                                                        <li><a href="#">Bracknell</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-md-3">
                                                    <h5>Paris</h5>
                                                    <ul class="list-unstyled">
                                                        <li><a href="#">Grenelle</a></li>
                                                        <li><a href="#">Luxembourg</a></li>
                                                        <li><a href="#">Place De La Bastille</a></li>
                                                        <li><a href="#">Grand Palais</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-md-3">
                                                    <h5>Madrid</h5>
                                                    <ul class="list-unstyled">
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
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span class="caret"></span></a>
                                <ul class="dropdown-menu">

                                    <li><a href="about.html">About us</a></li>
                                    <li><a href="how-work.html">How it work</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="error.html">Error 404</a></li>
                                    <li class="divider"></li>
                                    <li><a href="typography.html">Typography</a></li>
                                    <li><a href="grid-system.html">Grid system</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li class="button-navbar"><a href="add-listing.html"><i class="fa fa-plus"></i> Add Listing</a></li>
                        </ul>
                    </div>
                    {/* <!--/.nav-collapse --> */}
                </div>
                {/* <!--/.container-fluid --> */}
            </nav>


            {/* <!--listing with row map--> */}
            <div class="row-main">
                <div class="row-fullscreen" style={{height: '100rem'}}>
                    <div class="row-scroll-content">
                        <div class="row-scroll-inner">
                            <div class="row-scroll-padd">
                                <div class="row mb40">
                                    <form>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Keywords..."></input>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="form-group">
                                                <select class="form-control" title="Location">
                                                    <option>Paris</option>
                                                    <option>London</option>
                                                    <option>New York</option>
                                                    <option>Tokyo</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <div class="form-group">
                                                <select class="form-control" title="Category">
                                                    <option>Restaurants</option>
                                                    <option>Jobs</option>
                                                    <option>Property</option>
                                                    <option>Automotive</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-6">
                                            <input type="button" class="btn btn-primary btn-block" value="Search"></input>
                                        </div>
                                    </form>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="row listing-row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src={img1} alt="" class="img-responsive"></img></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><a href="#">Testy spanish coffee</a></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    distracted by the readable content of a page when looking at its layout.
                                            </p>
                                                <p><strong>Price:</strong> <span>$100/Person</span></p>
                                                <p><strong>Category:</strong> <span><a href="#">Restaurants</a></span></p>
                                                <p><strong>Location:</strong> <span>London, UK</span></p>
                                                <p><strong>Rating: </strong> <span class="rating-inline">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star-half-empty text-warning"></i>
                                                </span></p>
                                            </div>
                                        </div><hr />
                                        <div class="row listing-row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src={img2} alt="" class="img-responsive"></img></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><a href="#">Drinks &amp; music</a></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    distracted by the readable content of a page when looking at its layout.
                                            </p>
                                                <p><strong>Price:</strong> <span>$100/Person</span></p>
                                                <p><strong>Category:</strong> <span><a href="#">Restaurants</a></span></p>
                                                <p><strong>Location:</strong> <span>London, UK</span></p>
                                                <p><strong>Rating: </strong> <span class="rating-inline">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star-half-empty text-warning"></i>
                                                </span></p>
                                            </div>
                                        </div><hr />
                                        <div class="row listing-row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src={img3} alt="" class="img-responsive"></img></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><a href="#">Brazil beaches</a></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    distracted by the readable content of a page when looking at its layout.
                                            </p>
                                                <p><strong>Price:</strong> <span>$100/Person</span></p>
                                                <p><strong>Category:</strong> <span><a href="#">Beach</a></span></p>
                                                <p><strong>Location:</strong> <span>London, UK</span></p>
                                                <p><strong>Rating: </strong> <span class="rating-inline">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star-half-empty text-warning"></i>
                                                </span></p>
                                            </div>
                                        </div><hr />
                                        <div class="row listing-row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src={img4} alt="" class="img-responsive"></img></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><a href="#">Houese for tour</a></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    distracted by the readable content of a page when looking at its layout.
                                            </p>
                                                <p><strong>Price:</strong> <span>$100/Person</span></p>
                                                <p><strong>Category:</strong> <span><a href="#">Property</a></span></p>
                                                <p><strong>Location:</strong> <span>London, UK</span></p>
                                                <p><strong>Rating: </strong> <span class="rating-inline">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star-half-empty text-warning"></i>
                                                </span></p>
                                            </div>
                                        </div><hr />
                                        <div class="row listing-row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src={img5} alt="" class="img-responsive"></img></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><a href="#">Bar &amp; pubs</a></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    distracted by the readable content of a page when looking at its layout.
                                            </p>
                                                <p><strong>Price:</strong> <span>$100/Person</span></p>
                                                <p><strong>Category:</strong> <span><a href="#">Bars</a></span></p>
                                                <p><strong>Location:</strong> <span>London, UK</span></p>
                                                <p><strong>Rating: </strong> <span class="rating-inline">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star-half-empty text-warning"></i>
                                                </span></p>
                                            </div>
                                        </div><hr />
                                        <div class="row listing-row">
                                            <div class="col-sm-5">
                                                <a href="#"><img src={img6} alt="" class="img-responsive"></img></a>
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><a href="#">Swimming</a></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                    distracted by the readable content of a page when looking at its layout.
                                            </p>
                                                <p><strong>Price:</strong> <span>$100/Person</span></p>
                                                <p><strong>Category:</strong> <span><a href="#">Swim</a></span></p>
                                                <p><strong>Location:</strong> <span>London, UK</span></p>
                                                <p><strong>Rating: </strong> <span class="rating-inline">
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star text-warning"></i>
                                                    <i class="fa fa-star-half-empty text-warning"></i>
                                                </span></p>
                                            </div>
                                        </div><hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-map-fullscreen">
                        <div id="mapCanvas"></div>
                    </div>
                </div>
            </div>


        </body>

    )
}


export default MarketList;
