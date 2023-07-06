import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../Styles/Register.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { path_url } from "../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [theme, setTheme] = useState(true);
  const darkMode = () => {
    setTheme(false);
  };
  const lightMode = () => {
    setTheme(true);
  };
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    usertype: Yup.string().required("User type is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      usertype: "student",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      values.usertype = userType;

      try {
        const response = await axios.post(`${path_url}/register`, values);

        if (response.data.statusCodeValue === 200) {
          navigate("/");
        } else {
          toast.error(response.data.body);
        }
      } catch (error) {
        setStatus(error.response.data.message);
      } finally {
        setSubmitting(false);
      }
    },
  });
  const handleUserTypeChange = () => {
    setUserType("Instructor");
  };
  return (
    <>
      {/* <Navbar darkMode={darkMode} lightMode={lightMode} theme={theme} /> */}
      <div className="register-form">
        <div className="Image-container">
          <img src="./add-user.svg" alt="Register" className="Register-image" />
        </div>

        <div className="side">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-container">
              <div className="content">
                {/* <span className="Register-heading">Sign-Up for {userType}</span> */}
                <span className="Register-heading">Sign-Up</span>
                <span className="Register-content text-muted">
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
                      (formik.errors.name && formik.touched.name
                        ? " is-invalid"
                        : "")
                    }
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.name && formik.touched.name
                      ? formik.errors.name
                      : null}
                  </div>
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={
                      "form-control" +
                      (formik.errors.email && formik.touched.email
                        ? " is-invalid"
                        : "")
                    }
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.email && formik.touched.email
                      ? formik.errors.email
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

                <div className="form-group">
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Repeat Password"
                    className={
                      "form-control" +
                      (formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? formik.errors.confirmPassword
                      : null}
                  </div>
                </div>
              </div>
              <div className="buttons-container">
                <div className="button-wrap">
                  <button type="submit" className="Register-buttons">
                    Register
                  </button>

                  {userType === "student" && (
                    <button
                      type="button"
                      className="float-right Register-buttons"
                      onClick={() => {
                        handleUserTypeChange();
                        formik.handleReset();
                      }}
                    >
                      Instructor
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer theme={theme} /> */}
      <>
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
    </>
  );
}
