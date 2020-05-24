
import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import logo from './images/agromall-logo1.png';
import av1 from './images/av1.jpg';
import Header from './header';
import Footer from './footer';




const Profile = () => {

    return (
        <body>
            {/* <!-- Preloader --> */}
            {/* <div id="preloader"></div> */}
            {/* <!-- Static navbar --> */}
            <Header/>

            <div className="page-bread mb70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Jonathan Doe</h3>
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb30">
                <div className="row">
                    <div className="col-sm-3 mb40">
                        <img src={av1} alt="" className="img-responsive mb15"></img>
                        <a href="#" className="link-underline">Change Profile</a>
                    </div>
                    <div className="col-sm-8 col-sm-offset-1 mb40">
                        <form>
                            <div className="form-group">
                                <label>Full name</label>
                                <input type="email" className="form-control" placeholder="John Doe"></input>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="john@gmail.com"></input>
                            </div>
                            <div className="form-group">
                                <label>Phone number</label>
                                <input type="text" className="form-control" placeholder="01-394-4932"></input>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="124, Munnawali, Jaipur, 302012"></input>
                            </div>
                            <div className="form-group">
                                <label>New Password</label>
                                <input type="password" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control"></input>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary btn-lg">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>

        </body>


    )
}


export default Profile;



