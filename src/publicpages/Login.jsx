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
            <div class="Login-form">
                <div>
                    <img src={login_image} alt="login" class="login-image" />
                </div>
                <form>
                    <div class="contents">
                        <span class="Login-heading">Welcome to Indsac CRM</span>
                        <span class="Login-content">Login to explore more.</span>
                    </div>

                    <div class="login-form-content">
                        <div class="form-group">
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                class="form-control"
                            />
                            <div class="invalid-feedback"></div>
                        </div>

                        <div class="form-group">
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                class="form-control"
                            />
                            <div class="invalid-feedback"></div>
                        </div>
                    </div>

                    <div class="buttons">
                        <div class="form-group">
                            <button type="submit" class="login-buttons">
                                <div class="btn-content">
                                    <span>Log</span>
                                    <span> in</span>
                                </div>
                            </button>
                        </div>
                        <div class="form-group">
                            <Link to="/register">
                                <button type="submit" class="user-buttons">
                                    Create New User
                                </button>
                            </Link>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="Google-buttons">
                                <div class="google-icon">
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
