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



const FrontPage = () => {

    return (
        <body>

            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div> */}


            {/* <!-- Static navbar --> */}
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html"><img src={logo} style={{height: '30px'}} alt=""></img></a>
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

            {/* <!--fullscreen image--> */}
            <div className="fullscreen-parallax bg-parallax parallax-overlay" data-jarallax='{"speed": 0.2}' style={{ backgroundImage: `url(${bg2})`, height: '75rem' }}>
                <div className="fullscreen-inner" >
                    <div className="container" >
                        <div className="row" >
                            <div className="col-sm-12">
                                <div className="text-center" >
                                    <h1>Discover the best food markets near you</h1>
                                    <p className="mb20">Create your own directory website with finder that included modern features for directory websites</p>
                                    <div className='form-hero-multi'>
                                        <form>
                                            <div className='row'>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Keywords..."></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <select className="form-control" title="Location">
                                                            <option>Paris</option>
                                                            <option>London</option>
                                                            <option>New York</option>
                                                            <option>Tokyo</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <div className="form-group">
                                                        <select className="form-control" title="Category">
                                                            <option>Restaurants</option>
                                                            <option>Jobs</option>
                                                            <option>Property</option>
                                                            <option>Automotive</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-6">
                                                    <input type="button" className="btn btn-dark btn-block" value="Search"></input>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gray-bg pt80 pb40">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 text-center center-heading mb40">
                            <h2>markets category</h2>
                            <p>
                                List most recent places are submitted by our users. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        </div>
                    </div>
                    {/* <!--/row--> */}
                    <div className="row">
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img1} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Drinks</a>
                                        <h3><a href="#">Tasty Coffee</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img2} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Restaurant</a>
                                        <h3><a href="#">Italian Food</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img3} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Vacation</a>
                                        <h3><a href="#">Beach Life</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img4} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Property</a>
                                        <h3><a href="#">House Rent</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img5} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Bars</a>
                                        <h3><a href="#">Soft Drink</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img6} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Swimming</a>
                                        <h3><a href="#">Swimming Pools</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img7} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Electronics</a>
                                        <h3><a href="#">Mobile Stores</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb30">
                            <div className="card-overlay">
                                <img src={img8} className="img-responsive" alt=""></img>
                                <div className="card-hover">
                                    <div className="card-content">
                                        <a className="label label-primary" href="#">Shop</a>
                                        <h3><a href="#">Cloth Stores</a></h3>
                                        <ul className="list-inline mb0 rating-list">
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star text-warning"></i></li>
                                            <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                        </ul>
                                    </div>
                                    {/* <!--/card-content--> */}
                                    <div className="card-icons">
                                        <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                        <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb30">
                        <a href="#" className="btn btn-lg btn-rounded btn-primary">View All Listing</a>
                    </div>
                </div>
            </div>
            
            <div className="bg-faded pt80 pb40 mb70 ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mb30">
                            <div className="icon-center-card">
                                <i className="fa fa-envelope-o"></i>
                                <h3>Full support</h3>
                                <p>
                                    Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        {/* <!--/col--> */}

                        <div className="col-sm-4 mb30">
                            <div className="icon-center-card">
                                <i className="fa fa-map-marker"></i>
                                <h3>More than 1000 places</h3>
                                <p>
                                    Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        {/* <!--/col--> */}
                        <div className="col-sm-4 mb30">
                            <div className="icon-center-card">
                                <i className="fa fa-code"></i>
                                <h3>Free updated</h3>
                                <p>
                                    Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        {/* <!--/col--> */}
                    </div>
                </div>
            </div>
            
            <div className="owl-carousel owl-theme owl-places mb40">
                <div className="item">
                    <div className="card-overlay">
                        <img src={img1} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Drinks</a>
                                <h3><a href="#">Tasty Coffee</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img2} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Restaurant</a>
                                <h3><a href="#">Italian Food</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img3} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Vacation</a>
                                <h3><a href="#">Beach Life</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img4} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Property</a>
                                <h3><a href="#">House Rent</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img5} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Bars</a>
                                <h3><a href="#">Soft Drink</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img6} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Swimming</a>
                                <h3><a href="#">Swimming Pools</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img7} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Electronics</a>
                                <h3><a href="#">Mobile Stores</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="card-overlay">
                        <img src={img8} className="img-responsive" alt=""></img>
                        <div className="card-hover">
                            <div className="card-content">
                                <a className="label label-primary" href="#">Shop</a>
                                <h3><a href="#">Cloth Stores</a></h3>
                                <ul className="list-inline mb0 rating-list">
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star text-warning"></i></li>
                                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                                </ul>
                            </div>
                            {/* <!--/card-content--> */}
                            <div className="card-icons">
                                <a href="#" title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>
                                <a href="#" title="View Detail"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mb40">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 text-center center-heading mb40">
                        <h2>Latest from blog</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 mb40">
                        <div className="post-card">
                            <a href="#"><img src={img2} alt="" className="img-responsive mb15"></img></a>
                            <div className="post-content">
                                <h4><a href="#">Standard post with image</a></h4>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--/col--> */}

                    <div className="col-sm-4 mb40">
                        <div className="post-card">
                            <a href="#"><img src={img3} alt="" className="img-responsive mb15"></img></a>
                            <div className="post-content">
                                <h4><a href="#">Standard post with image</a></h4>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb40">
                        <div className="post-card">
                            <a href="#"><img src={img4} alt="" className="img-responsive mb15"></img></a>
                            <div className="post-content">
                                <h4><a href="#">Standard post with image</a></h4>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                            </p>
                            </div>
                        </div>
                    </div>

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


export default FrontPage;
