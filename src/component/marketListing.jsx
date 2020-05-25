import React, { Component } from 'react';
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
import axios from "axios";




class MarketList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            markets: []

        }
    }


    componentDidMount = async () => {

        const response = await axios.get(`https://agromall-market-databank.herokuapp.com/api/v1/market/all`, {})
        
        await this.setState({
             markets: response.data
            })
    };

    render() {
        return (
            <body>
                {/* <!-- Preloader --> */}
                {/* <div id="preloader"></div>  */}
                {/* <!-- Static navbar --> */}
                <Header />
                {/* <!--listing with row map--> */}
                <div className="page-bread mb70">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Markets</h3>
                            </div>
                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb70">
                    <div className="row">
                        <form>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Keywords..."></input>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group">
                                    <select className="form-control" title="Location">
                                        <option>Lagos</option>
                                        <option>London</option>
                                        <option>New York</option>
                                        <option>Tokyo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group">
                                    <select className="form-control" title="Category">
                                        <option>Food & Vegetables</option>
                                        <option>Jobs</option>w
                                    <option>Property</option>
                                        <option>Automotive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <input type="button" className="btn btn-primary btn-block" value="Search"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 text-center center-heading mb40">
                                <h2>Markets found</h2>
                                <p>
                                    List most recent places are submitted by our users. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {this.state.markets.map(market => (
                                    <div className="row listing-row">
                                        <div className="col-sm-5">
                                            <a ><img src={market.imageUrl} alt="Market Image" className="img-responsive"></img></a>
                                        </div>
                                        <div className="col-sm-7">
                                            <h4><Link to={{ pathname: "/marketdetails", state: { name: market.name, description: market.description, imageUrl:market.imageUrl, geolocation: market.geolocation, category: market.category } }}><a href>Testy spanish coffee</a></Link></h4>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            distracted by the readable content of a page when looking at its layout.
                                 </p>
                                            <p><strong>Category:</strong> <span><a href="#">Restaurants</a></span></p>
                                            <p><strong>Location:</strong> <span>London, UK</span></p>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            
                                            <div className="col-md-3 col-sm-6" >
                                                <Link to={{ pathname: "/addmarket", state: { name: market.name, description: market.description, imageUrl: market.imageUrl, geolocation: market.geolocation, category: market.category } }}><input type="button" className="btn btn-primary btn-block" value="Update" style={{ magrinTop: '50px' }}></input></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <hr />
                            </div>
                        </div>
                        <div className="text-center mb30">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li>
                                        <a href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>


                <Footer />
            </body>

        )

    }


}


export default MarketList;
