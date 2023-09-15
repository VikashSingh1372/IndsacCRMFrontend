import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import login_image from "../Images/Login-image.png";
import icons8_google from "../Images/icons8-google.svg";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <Navbar />
            <div className="Login-form">
                <div>
                    <img src={login_image} alt="login" className="login-image" />
                </div>
                <form>
                    <div className="contents">
                        <span className="Login-heading">Welcome to Indsac CRM</span>
                        <span className="Login-content">Login to explore more.</span>
                    </div>

                    <div className="login-form-content">
                        <div className="form-group">
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                className="form-control"
                            />
                            <div className="invalid-feedback"></div>
                        </div>

                        <div className="form-group">
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="form-control"
                            />
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>

                    <div className="buttons">
                        <div className="form-group">
                        <Link to="/landingpage" >
                            <button type="submit" className="login-buttons">
                                <div className="btn-content">
                                  <span>Log</span>
                                    <span> in</span> 
                                </div>
                            </button>
                            </Link>
                        </div>
                        <div className="form-group">
                            <Link to="/register">
                                <button type="submit" className="user-buttons">
                                    Create New User
                                </button>
                            </Link>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="Google-buttons">
                                <div className="google-icon">
                                    <img src={icons8_google} alt="google-icon" />
                                </div>
                                Log in with Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    )
}
