import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

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



class Header extends Component {
    constructor(props) {
        super(props);
        this.userDetails = JSON.parse(localStorage.getItem("userdetails"));
        this.state = {
            loggedStatus: false,

        }

    }

    logout = () => {
        localStorage.clear();
        this.setState({ loggedStatus: true });
    };

    render() {
        return (



            this.state.loggedStatus ? (
                <Redirect to={"/login"} />
            ) : (
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="/"><img src={logo} style={{ height: '30px', marginTop: '-5px' }} alt=""></img></a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                {this.userDetails ? (<ul className="nav navbar-nav navbar-right">
                                    <li >
                                        <Link to={'/'}> <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home</a></Link>

                                    </li>
                                    <li>
                                        <Link to={'/addmarket'}> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Add market</a></Link>

                                    </li>
                                    <li>
                                        <Link to={'/profile'}> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile</a></Link>

                                    </li>
                                    <li>
                                        <Link to={'/'}> <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={this.logout}>Logout</a></Link>

                                    </li>
                                </ul>) : (<ul className="nav navbar-nav navbar-right">
                                    <li >
                                        <Link to={'/'}> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home</a></Link>

                                    </li>
                                    <li>
                                        <Link to={'/register'}> <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Register</a></Link>

                                    </li>
                                    <li ><Link to={'/login'}>
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login </a></Link>

                                    </li>
                                </ul >)}

                            </div>
                            {/* <!--/.nav-collapse --> */}
                        </div>
                        {/* <!--/.container-fluid --> */}
                    </nav>


                )





        )

    }


}


export default Header;
