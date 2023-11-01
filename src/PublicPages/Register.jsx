import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import addUser from "../Images/add-user.svg";
import * as Yup from "yup";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import { path_url } from '../Config/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Register() {
  const generateRandomCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  };

  const [captchaCode, setCaptchaCode] = useState(generateRandomCaptcha());
  const navigate = useNavigate();
  const handleReloadCaptcha = () => {
    setCaptchaCode(generateRandomCaptcha());
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters').max(50, 'Name must not exceed 50 characters'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    captcha: Yup.string().required('Captcha is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      usertype: "student",
      email: '',
      password: '',
      confirmPassword: '',
      captcha: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      console.log(values)
      if (values.captcha === captchaCode) {
        // delete values.captcha;
        try {
          const response = await axios.post(
            `${path_url}/register`,
            values
          );

          if (response.data.statusCodeValue === 200) {
            toast.success('Registration successful!');
            setTimeout(() => {
              navigate("/login");
              }, 3000);
           
          } else {
            toast.error(response.data.body);
            handleReloadCaptcha();
          }
        } catch (error) {
          setStatus(error.response.data.message);
        } finally {
          setSubmitting(false);
        }
      } else {
        toast.error('Incorrect captcha. Please try again.');
        formik.setFieldValue('captcha', '');
        handleReloadCaptcha();
      }
    },
  });


  return (
    <>
      <Navbar />
      <div className="register-form">
        <div className="Image-container">
          <img src={addUser} alt="Register" className="Register-image" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-container">
            <div className="contents">
              <span className="Register-head">
                <span className="Register-heading">Sign-Up for </span>
                <span className="Register-heading">Indsac-CRM</span>
              </span>
              <span className="Register-content">
                Create an Account to explore more
              </span>
            </div>
            <div className="form-content">
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={
                    "form-control" +
                    (formik.errors.name && formik.touched.name ? " is-invalid" : "")
                  }
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <div className="invalid-feedback">
                  {formik.errors.name && formik.touched.name ? formik.errors.name : null}
                </div>
              </div>

              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={
                    "form-control" +
                    (formik.errors.email && formik.touched.email ? " is-invalid" : "")
                  }
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="invalid-feedback">
                  {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                </div>
              </div>

              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={
                    "form-control" +
                    (formik.errors.password && formik.touched.password ? " is-invalid" : "")
                  }
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div className="invalid-feedback">
                  {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                </div>
              </div>


              <div className="form-group">
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat Password"
                  className={
                    "form-control" +
                    (formik.errors.confirmPassword && formik.touched.confirmPassword ? " is-invalid" : "")
                  }
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                <div className="invalid-feedback">
                  {formik.errors.confirmPassword && formik.touched.confirmPassword
                    ? formik.errors.confirmPassword
                    : null}
                </div>
              </div>

              <h6>Captcha Code</h6>

              <div className="form-group">
                <div className="captcha">
                  <div className="captcha-container">
                    <input
                      name="showcaptcha"
                      type="text"
                      className="form-control"
                      value={captchaCode}
                      readOnly
                    />
                  </div>
                  <div className="reload-container">
                    <button
                      type="button"
                      className="refresh-captcha"
                      onClick={handleReloadCaptcha}>
                      <FontAwesomeIcon icon={faRepeat} />
                    </button>
                  </div>
                </div>
                <input
                  name="captcha"
                  type="text"
                  placeholder="Enter Captcha"
                  className={
                    "form-control" +
                    (formik.errors.captcha && formik.touched.captcha ? " is-invalid" : "")
                  }
                  onChange={formik.handleChange}
                  value={formik.values.captcha}
                />
                <div className="invalid-feedback">
                  {formik.errors.captcha && formik.touched.captcha ? formik.errors.captcha : null}
                </div>
              </div>
            </div>

            <div className="buttons-container">
              <div className="button-wrap">
                <button type="submit" className="Register-buttons">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}
