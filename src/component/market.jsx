import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import bg2 from './agromall.mp4';
import bg3 from './images/bg3.jpg'
import Header from './header';
import Footer from './footer';
import logo from './images/agromall-logo1.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';




class MarketDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: "",
            imageUrl: "",
            geolocation: "",
            category: "",
        }
    }

    componentDidMount = async ()=>{
        await this.setState({
            name: this.props.location.state.name,
            description: this.props.location.state.description,
            imageUrl: this.props.location.state.imageUrl,
            geolocation: this.props.location.state.geolocation,
            category: this.props.location.state.category,

        })

    }


    render(){

        return (
        <body>
{/* <!-- Preloader --> */}
{/* <!-- <div id="preloader"></div> --> */}
        {/* <!-- Static navbar --> */}
        <Header/>
        <div className="listing-detail-header mb50">
            <div className="container">
            {console.log('propslocationname: ', this.props.location.state.name)}
        <h2 className="font300">{this.state.name}</h2>
                <p><i className="fa fa-map-signs"></i> {this.state.geolocation.address}</p>
                <ul className="rating-list list-inline clearfix">
                    <li><i className="fa fa-star text-warning"></i></li>
                    <li><i className="fa fa-star text-warning"></i></li>
                    <li><i className="fa fa-star text-warning"></i></li>
                    <li><i className="fa fa-star text-warning"></i></li>
                    <li><i className="fa fa-star-half-empty text-warning"></i></li>
                    <li>(234)</li>
                    <li className="pull-right"><a href="#review" className="link-underline">Submit a Review</a></li>
                </ul>
            </div>
        </div>
        <div className="listing-slider-row mb70">
            <div className="owl-carousel owl-theme detail-slider">
                <div className="item">
                        <img src={this.state.imageUrl} alt="" className="img-responsive"></img>
                </div>
                <div className="item">
                        <img src={img2} alt="" className="img-responsive"></img>
                </div>
                <div className="item">
                        <img src={img2} alt="" className="img-responsive"></img>
                </div>
                <div className="item">
                        <img src={img4} alt="" className="img-responsive"></img>
                </div>
                <div className="item">
                        <img src={img5} alt="" className="img-responsive"></img>
                </div>
                <div className="item">
                        <img src={img6} alt="" className="img-responsive"></img>
                </div>
            </div>
        </div>

        <div className="container mb30">
            <div className="row">
                <div className="col-sm-8 mb40">
                    <h3 className="left-title mb25">About Market</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tristique enim, ac tincidunt massa pulvinar non. Donec scelerisque libero eu tincidunt cursus. Phasellus vel commodo nunc, nec suscipit enim. Integer suscipit, mauris consectetur pharetra ultrices, neque sem malesuada mauris, id tristique ante leo vel magna. Phasellus ac risus vel erat elementum fringilla et non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tristique enim, ac tincidunt massa pulvinar non. Donec scelerisque libero eu tincidunt cursus. Phasellus vel commodo nunc, nec suscipit enim. Integer suscipit, mauris consectetur pharetra ultrices, neque sem malesuada mauris, id tristique ante leo vel magna. Phasellus ac risus vel erat elementum fringilla et non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <br/>
                    
                    <h3 className="left-title mb25">Location</h3>
                    <iframe height="350" frameborder="0"  style={{border: 0, width: '100%'}}className="mb30"
                                src={`https://www.google.com/maps/embed/v1/place?q=${this.props.location.state.geolocation.address}&key=AIzaSyAcC0a6iry-BDvy1LA4EFqlvKBGTdZELJA`} allowfullscreen></iframe>
                   
                    
                </div>
                
            </div>
        </div>
        <Footer/>
    </body>

    )

    }

    
}


export default MarketDetails;
