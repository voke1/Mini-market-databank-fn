import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import Header from './header';
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




const MarketList = () => {

    return (
        <body>
            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div>  */}
            {/* <!-- Static navbar --> */}
            <Header/>


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
            <Footer/>
        </body>

    )
}


export default MarketList;
