import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import addUser from "../Images/add-user.svg";

export default function Register() {
  return (
   <>
   <Navbar/>
   <div className="register-form">
      <div className="Image-container">
        <img src={addUser} alt="Register" className="Register-image" />
      </div>
      <form>
        <div className="form-container">
          <div className="contents">
            <span className="Register-heading">Sign-Up for Indsac-CRM </span>
            <span className="Register-content">Create an Account to explore more</span>
          </div>
          <div className="form-content">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="form-control"
              />
              <div className="invalid-feedback"></div>
            </div>

            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email"
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

            <div className="form-group">
              <input
                name="confirmPassword"
                type="password"
                placeholder="Repeat Password"
                className="form-control"
              />
              <div className="invalid-feedback"></div>
            </div>
           
            <div className="form-group">
              <input
                name="referralcode"
                type="text"
                placeholder="Enter Captcha Code"
                className="form-control"
              />
              <div className="invalid-feedback"></div>
            </div>
          </div>

          <div className="buttons-container">
            <div className="button-wrap">
              <button type="submit" className="Register-buttons">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>


   <Footer/>
   </>
  )
}
