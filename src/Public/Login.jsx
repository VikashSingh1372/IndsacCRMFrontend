import React, { useState,useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import { path_url } from "../config/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { responseMessages } from '../config/config';


export default function Login() {
  const [theme, setTheme] = useState(true);
  const darkMode = () => {
    setTheme(false);
  };
  const lightMode = () => {
    setTheme(true);
  };
  const [isLogin, SetLogin] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),

    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const event = new Event("submit", { cancelable: true });
        event.preventDefault();
        const response = await axios.post(
          `${path_url}/authenticate`,
          values
        );

        localStorage.setItem("accessToken", response.data.token);
        
          SetLogin(true);
          toast.success("Login Successfully");
         
        
      } catch (error) {
        const errorMessage = responseMessages[error.response.data.message];
          toast.error(errorMessage);
      } finally {
        setSubmitting(false);
      }
    },
  });
  
  useEffect(() => {
    if (isLogin) {
      const redirectTimer = setTimeout(() => {
        return navigate("/user", { replace: true }); // Replace '/user' with the actual path to the user page
      }, 3000);
  
      return () => {
        clearTimeout(redirectTimer);
      };
    }
  }, [isLogin, navigate]);
  
 
  

  return (
    <>
      {/* <Navbar darkMode={darkMode} lightMode={lightMode} theme={theme} /> */}
      <div className="Login-form">
        <div>
          <img src="./support-team.svg" alt="login" className="login-image" />
        </div>


        <form onSubmit={formik.handleSubmit}>
          <div className="content">
            <span className="Login-heading">Welcome to INDSAC-CRM</span>
            <span className="Login-content text-muted" >Login to explore more.</span>
          </div>

          <div className="login-form-content">
            <div className="form-group">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className={
                  "form-control" +
                  (formik.errors.username && formik.touched.username
                    ? " is-invalid"
                    : "")
                }
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <div className="invalid-feedback">
                {formik.errors.username && formik.touched.username
                  ? formik.errors.username
                  : null}
              </div>
            </div>

            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className={
                  "form-control" +
                  (formik.errors.password && formik.touched.password
                    ? " is-invalid"
                    : "")
                }
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className="invalid-feedback">
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null}
              </div>
            </div>
          </div>

          <div className="buttons">
            <div className="form-group">
              <button type="submit" className=" login-buttons">
                <div className="btn-content">
                  <span>Log in</span>
                </div>
              </button>
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
                  <img src="./icons8-google.svg" alt="goole-icon" />
                </div>
                Log in with Google
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer theme={theme} /> */}
      <><ToastContainer
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
      /></>
    </>
  );
}
