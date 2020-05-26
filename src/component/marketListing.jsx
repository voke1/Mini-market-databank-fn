import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import Header from './header';
import Footer from './footer';
import PageLoader from './pageLoader';
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
import tv from 'material-ui/svg-icons/hardware/tv';




class MarketList extends Component {

    constructor(props) {
        super(props)
        this.userDetails = JSON.parse(localStorage.getItem("userdetails"));
        this.state = {
            markets: [],
            name: this.props.location.state ? this.props.location.state.name : "",
            category: this.props.location.state ? this.props.location.state.category : "",
            location: this.props.location.state ? this.props.location.state.location : "",
            loaded: false,

        }
    }


    filterMarkets = (targetArray, filters) => {
        console.log('filtver.name: ', filters.name, 'filtvers.category: ', filters.category, " filters.location: ", filters.location)
        console.log('tvargetvarray: ', targetArray)
        if (filters.name && filters.category && filters.location) {
            return targetArray.filter((target) => {
                return (target.name.includes(filters.name) && target.category === filters.category && target.location.includes(filters.location))

            })

        }
        if (filters.name && filters.category) {
            const response = targetArray.filter((target) => {
                console.log('targetname: ', target.name, 'filters.name', filters.name)
                return (target.name.includes(filters.name) && target.category === filters.category)

            })
            return this.setState({ markets: response, loaded: true })
        }
        else if (filters.name && filters.location) {
            console.log('if22222 is called here')
            const response = targetArray.filter((target) => {
                return (target.name.includes(target.name) && target.category === filters.category)

            })
            return this.setState({ markets: response, loaded: true })

        }
        else if (filters.location && filters.category) {
            const response = targetArray.filter((target) => {
                return (target.name.includes(filters.name) && target.category === filters.category)

            })
            return this.setState({ markets: response, loaded: true })

        }
        else if (filters.location || filters.category || filters.name) {
            const response = targetArray.filter((target) => {
                return (target.name.includes(filters.name) || target.category === filters.category || target.location.includes(filters.location))

            })
            return this.setState({ markets: response, loaded: true })

        } else {
            return this.setState({ markets: targetArray, loaded: true })
        }
    };

    handleDelete = (id) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userDetails.token}`
        }
        return axios
            .delete(`https://agromall-market-databank.herokuapp.com/api/v1/market/${id}`, {
                headers: headers
            })
            .then(res => {
                       this.setState({
                           markets: [
                               ...this.state.markets.filter(market => market._id !== id)
                           ]
                       });
            })
            .catch(err => {
                return err.response;
            });
    }

    componentDidMount = async () => {

        const response = await axios.get(`https://agromall-market-databank.herokuapp.com/api/v1/market/all`, {})

        await this.setState({
            markets: response.data,
        })
        const markets = [...this.state.markets]
        console.log("marketvssss: ", markets)
        const { name, category, location } = this.state;
        this.filterMarkets(markets, { name, category, location })
        console.log('this.filtveredMakers: ', this.filteredMarkets)

    };

    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {
        const { name, category, location } = this.state;
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
                                    <input type="text" className="form-control" placeholder="Name" onChange={this.onChange} value={this.state.name} name='name'></input>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group">
                                    <select className="form-control" title="Location" onChange={this.onChange} value={this.state.location} name='location'>
                                        <option>Lagos</option>
                                        <option>London</option>
                                        <option>New York</option>
                                        <option>Tokyo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-group">
                                    <select className="form-control" title="Category" onChange={this.onChange} value={this.state.category} name='category'>
                                        <option>select category</option>
                                        <option>Food & Vegetables</option>
                                        <option>Jobs</option>
                                        <option>Property</option>
                                        <option>Automotive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <input type="button" className="btn btn-primary btn-block" style={{ backgroundColor: 'green' }} value="Search" onClick={() => this.filterMarkets(this.state.markets, { name, category, location })}></input>
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
                                    List most recent places are submitted by our users. There are several markets in Lagos, but just a few of them are unique.
                        </p>

                            </div>
                        </div>

                        {this.state.loaded ? (
                            <div className="row">
                                <div className="col-sm-12">

                                    {this.state.markets.map(market => (
                                        <div className="row listing-row">
                                            <div className="col-sm-5" >
                                                <Link to={{ pathname: "/marketdetails", state: { name: market.name, description: market.description, imageUrl: market.imageUrl, geolocation: market.geolocation, category: market.category } }}><a ><img src={market.imageUrl} alt="Market Image" className="img-responsive" ></img></a></Link>
                                            </div>
                                            <div className="col-sm-7" >
                                                <h4 ><Link to={{ pathname: "/marketdetails", state: { name: market.name, description: market.description, imageUrl: market.imageUrl, geolocation: market.geolocation, category: market.category } }}><a style={{ color: 'green' }}>{market.name}</a></Link></h4>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                distracted by the readable content of a page when looking at its layout.
                                 </p>
                                                <p><strong>Category:</strong> <span>{market.category}</span></p>
                                                <p><strong>Location:</strong> <span>{market.geolocation.address}</span></p>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                {this.userDetails ? (<div> <div className="col-md-3 col-sm-6" >
                                                    <Link to={{ pathname: "/addmarket", state: { name: market.name, description: market.description, imageUrl: market.imageUrl, geolocation: market.geolocation, category: market.category } }}><input type="button" className="btn btn-primary btn-block" value="Update" style={{ magrinTop: '50px', backgroundColor: 'green' }}></input></Link>
                                                </div>
                                                    <div className="col-md-3 col-sm-6" >
                                                        <input type="button" className="btn btn-primary btn-block" value="Delete" onClick={() => { this.handleDelete(market._id) }} style={{ magrinTop: '50px', backgroundColor: 'red' }}></input>
                                                    </div></div>) : ""}

                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                </div>
                            </div>
                        ) : <PageLoader />}
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
