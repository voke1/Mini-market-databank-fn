
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom"
import './css/style.css';
import './css/bundle.css';
import logo from './images/agromall-logo1.png';
import Header from './header';
import Footer from './footer';
import axios from "axios";
import Loader from './loader';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';




class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userDetails: '',
            showProgress: "",
            message: "",
        }
    }

    onChange = async (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({
            isChanged: true,
        });
    }

    login = user => {
        return axios
            .post(`https://agromall-market-databank.herokuapp.com/api/v1/auth/user/signin`, {
                email: user.email,
                password: user.password,
            })
            .then(res => {
                localStorage.setItem("userdetails", JSON.stringify(res.data));
                return res;
            })
            .catch(err => {
                return err.response;
            });
    };

    onSubmit = async e => {
        e.preventDefault();
        this.setState({ showProgress: true });

        const user = {
            email: this.state.email,
            password: this.state.password,
            isAdmin: true,
        };
        try {
            const response = await this.login(user);
            if (response.data.email && response.data.password) {
                this.setState({
                    redirect: "/",
                    userDetails: response.data,
                    showProgress: false,
                });
                return
            }

            if (!response.data.success) {
                this.setState({
                    message: "An error occurred!",
                    userDetails: response.data,
                    showProgress: false,
                });
                return
            }


        } catch (error) {
            console.log(error);
        }
    };

    renderRedirect = target => {
        return <Redirect to={target} />;
    };

    render() {

        const message = (
            <p
                className={this.state.message ? "animated shake" : "msg"}
                style={{ color: "red" }}
            >
                {this.state.message}
            </p>
        );
        return (
            <body>
                {/* <!-- Preloader --> */}
                {/* <!-- <div id="preloader"></div> --> */}
                {/* <!-- Static navbar --> */}
                {this.state.redirect ? this.renderRedirect(this.state.redirect) : ""}
                <Header />
                <div className="page-bread mb70" >
                    <div className="container" >
                        <div className="row" >
                            <div className="col-sm-6" >
                                <h3>Sign In</h3>
                            </div>
                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb70">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                            {this.state.showProgress ? "" : message}
                            <div className="border-card">

                                <h3 className="font300 mb0 text-center">Login to your account</h3> <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className='form-group-icon mb15'>
                                        <i className='fa fa-envelope'></i>
                                        <input type="email" className='form-control' name='email' value={this.state.email} onChange={this.onChange} placeholder="Email"></input>
                                    </div>
                                    <div className='form-group-icon mb15'>
                                        <i className='fa fa-lock'></i>
                                        <input type="password" className='form-control' name='password' value={this.state.password} onChange={this.onChange} placeholder="Password"></input>
                                    </div>
                                    <br />
                                    <button type="submit" className='btn btn-default btn-lg btn-block' onClick={this.onSubmit} style={{ backgroundColor: 'green', color: 'white' }}>{this.state.showProgress ? <Loader /> : "Login"}</button>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </body>


        )

    }

}


export default LoginPage;



