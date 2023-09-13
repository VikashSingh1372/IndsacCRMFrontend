import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import addUser from "../Images/add-user.svg";

export default function Register() {
  return (
   <>
   <Navbar/>
   <div class="register-form">
      <div class="Image-container">
        <img src={addUser} alt="Register" class="Register-image" />
      </div>
      <form>
        <div class="form-container">
          <div class="contents">
            <span class="Register-heading">Sign-Up for Indsac-CRM </span>
            <span class="Register-content">Create an Account to explore more</span>
          </div>
          <div class="form-content">
            <div class="form-group">
              <input
                name="name"
                type="text"
                placeholder="Name"
                class="form-control"
              />
              <div class="invalid-feedback"></div>
            </div>

            <div class="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email"
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

            <div class="form-group">
              <input
                name="confirmPassword"
                type="password"
                placeholder="Repeat Password"
                class="form-control"
              />
              <div class="invalid-feedback"></div>
            </div>
           
            <div class="form-group">
              <input
                name="referralcode"
                type="text"
                placeholder="Enter Captcha Code"
                class="form-control"
              />
              <div class="invalid-feedback"></div>
            </div>
          </div>

          <div class="buttons-container">
            <div class="button-wrap">
              <button type="submit" class="Register-buttons">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>


   <Footer/>
   </>
  )
}
