
import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';
import logo from './images/agromall-logo1.png';
import Header from './header';
import Footer from './footer';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';




const RegisterPage = () => {

    return (
        <body>
         
            <Header/>

            <div className="page-bread mb70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Register</h3>
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb70">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <div className="border-card">
                            <h3 className="font300 mb0 text-center">Create an account. It's Free!</h3> <hr />
                            <form role='form'>
                                <div className='form-group-icon mb15'>
                                    <i className='fa fa-user'></i>
                                    <input type="text" className='form-control' placeholder="Name"></input>
                                </div>
                                <div className='form-group-icon mb15'>
                                    <i className='fa fa-envelope'></i>
                                    <input type="email" className='form-control' placeholder="Username"></input>
                                </div>
                                <div className='form-group-icon mb15'>
                                    <i className='fa fa-lock'></i>
                                    <input type="password" className='form-control' placeholder="Password"></input>
                                </div>
                                <div className='form-group-icon mb15'>
                                    <i className='fa fa-refresh'></i>
                                    <input type="password" className='form-control' placeholder="Confirm Password"></input>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" id="tm"></input>
                                    <label for="tm">
                                        Accept Terms & Conditions
                                </label>
                                </div>
                                <input type="submit" value="SignUp" className='btn btn-primary btn-lg btn-block'></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </body>


    )
}


export default RegisterPage;



