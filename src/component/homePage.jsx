import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import Footer from './footer';
import Header from './header';
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
            <Header />

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
                        <Link to={'/marketlist'}> <button className="btn btn-lg btn-rounded btn-primary" style={{ backgroundColor: 'green', width: "30rem" }}>View All Markets</button></Link>
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

            <div className="container mb40 ">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 text-center center-heading mb40">
                        <h2>Popular Markets</h2>
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
            <Footer />
        </body>
    )
}


export default FrontPage;
