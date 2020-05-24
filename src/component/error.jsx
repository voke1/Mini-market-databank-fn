
import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/bundle.css';




const ErrorPage = () => {

    return (
        <body className="misc-page" style={{height: '74rem'}}>
            {/* <!-- Preloader --> */}
            {/* <!-- <div id="preloader"></div> --> */}
            <div className="display-table">
                <div className="vertical-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3 text-center">
                                <div className="error-box">
                                    <h1>404</h1>
                                    <h2 className="font300">Page Not Found</h2>
                                    <p>
                                        The page you're looking is not found. Please try later.
                                </p>
                                    <a href="index.html" className="link-underline">Back to home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </body>
        

    )
}


export default ErrorPage;



