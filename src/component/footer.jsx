import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';




const Footer = () => {

    return (
        < footer className="footer" >
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
                            <a href="#">support@theagromall.com</a>
                        </p>
                    </div>
                    <div className="col-md-4 mb30">
                        <h3>useful links</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="f-links list-unstyled">
                                    <li><a href="#">Restaurants</a></li>
                                    
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="f-links list-unstyled">
                                    <li><a href="#">Shop</a></li>
                                   
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
        </footer >


    )
}


export default Footer;
