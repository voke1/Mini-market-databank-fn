import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import Footer from './footer';
import Header from './header';
import img6 from './agromall.mp4';
import img7 from './images/bg3.jpg'
import img8 from './images/agromall-logo1.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import zakibiam from './images/zakibiammarket.jpg';
import bodija from './images/bodijamarket.jpg';
import mile12 from './images/mile12market.jpg';
import market1 from './images/marekt1.jpg'
import market2 from './images/market2.jpg';
import fruits from './images/fruits.jpg'
import poultry from './images/poultry.jpg';
import diary from './images/diary.jpeg'
import fish from './images/fishMarket.jpg';
import cereal from './images/cereal.jpg'




class FrontPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            category: "",
            location: "",

        }
    }


    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {
        const { name, category, location } = this.state
        return (
            <body>

                {/* <!-- Preloader --> */}
                {/* <div id="preloader"></div> */}


                {/* <!-- Static navbar --> */}
                <Header />

                {/* <!--fullscreen image--> */}
                <div className="fullscreen-parallax bg-parallax parallax-overlay" data-jarallax='{"speed": 0.2}' style={{ backgroundImage: `url(${market2})`, height: '75rem' }}>
                    <div className="fullscreen-inner" >
                        <div className="container" >
                            <div className="row" >
                                <div className="col-sm-12">
                                    <div className="text-center" >
                                        <h1>Discover the best food markets near you</h1>
                                        <p className="mb20">A platform that uses technology and data to enhance production and market participation in agriculture.</p>
                                        <div className='form-hero-multi'>
                                            <form>
                                                <div className='row'>
                                                    <div className="col-md-3 col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Name" onChange={this.onChange} value={this.state.name} name='name'></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <div className="form-group">
                                                            <input className="form-control" title="Location" placeholder="Location" onChange={this.onChange} value={this.state.location} name='location'>
                                                              
                                                            </input>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <div className="form-group">
                                                            <select className="form-control" title="Category" onChange={this.onChange} value={this.state.category} name='category'>
                                                                <option></option>
                                                                <option>Fruits</option>
                                                                <option>Cereals</option>
                                                                <option>Dairy</option>
                                                                <option>Vegetables</option>
                                                                <option>Poultry</option>
                                                                <option>Dairy</option>
                                                                <option>Fish</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <Link to={{ pathname: "/marketlist", state: { name, category, location } }}><input type="button" className="btn btn-dark btn-block" value="Search"></input></Link>

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
                                    A digital agricultural and agribusiness platform that empowers and creates opportunities for the youth.
                        </p>
                            </div>
                        </div>
                        {/* <!--/row--> */}
                        <div className="row">
                            <div className="col-sm-6 col-md-3 mb30">
                                <div className="card-overlay">
                                    <img src={market2} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Vegetables</a>

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
                                    <img src={market1} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#" >Vegetables</a>

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
                                    <img src={poultry} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Poultry</a>

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
                                    <img src={cereal} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Cereal</a>

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
                                    <img src={fruits} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Fruits</a>

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
                                    <img src={diary} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Diary</a>

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
                                    <img src={fish} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Fish</a>

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
                                    <img src={cereal} className="img-responsive" alt=""></img>
                                    <div className="card-hover">
                                        <div className="card-content">
                                            <a className="label label-primary" href="#">Cereal</a>

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
                                        Ayoola will support AgroMall in designing and implementing engagements that will feature a fusion .
                            </p>
                                  
                                </div>
                            </div>
                            {/* <!--/col--> */}

                            <div className="col-sm-4 mb30">
                                <div className="icon-center-card">
                                    <i className="fa fa-map-marker"></i>
                                    <h3>More than 1000 places</h3>
                                    <p>
                                        We are located in more places than you think of.
                            </p>
                                </div>
                            </div>
                            {/* <!--/col--> */}
                            <div className="col-sm-4 mb30">
                                <div className="icon-center-card">
                                    <i className="fa fa-code"></i>
                                    <h3>Free updated</h3>
                                    <p>
                                        AgroCola provides Nigeria’s young farmers and agriculture value chain participants
                            </p>
                                </div>
                            </div>
                            {/* <!--/col--> */}
                        </div>
                    </div>
                </div>

                <div className="container mb40 ">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 text-center center-heading mb40">
                            <h2>Popular Markets</h2>
                            <p>
                                In Lagos, Nigeria, there are a number of markets that attract a large number of people for various reasons.
                    </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mb40">
                            <div className="post-card">
                                <a href="#"><img src={zakibiam} alt="" className="img-responsive mb15"></img></a>
                                <div className="post-content">
                                    <h4><a href="#">Zaki Biam yam Markets, Benue</a></h4>
                                    <p>
                                        Situated in the Food basket of the nation, Zaki Biam is Nigeria's largest mono-product market.
                            </p>
                                </div>
                            </div>
                        </div>
                        {/* <!--/col--> */}

                        <div className="col-sm-4 mb40">
                            <div className="post-card">
                                <a href="#"><img src={mile12} alt="" className="img-responsive mb15"></img></a>
                                <div className="post-content">
                                    <h4><a href="#">Mile 12 Markets, Lagos</a></h4>
                                    <p>
                                        Mile 12 market is generally known as the hot-bed and most cost-effective marketplace for farm produce in lagos.
                            </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 mb40">
                            <div className="post-card">
                                <a href="#"><img src={bodija} alt="" className="img-responsive mb15"></img></a>
                                <div className="post-content">
                                    <h4><a href="#">Bodija Markets, Ibadan</a></h4>
                                    <p>
                                        Bodija market is a very popular market in Ibadan. At this market a lot of foodstuff are bought affordable.
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


}


export default FrontPage;
