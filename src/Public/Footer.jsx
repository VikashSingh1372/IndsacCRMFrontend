import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ theme }) {
  return (
    <>
      <footer
        className={`w3l-footer-22 position-relative ${
          theme ? "mt-5 pt-5" : "satya"
        }`}
      >
        <div className="footer-sub">
          <div className="container">
            <div className="text-txt">
              <div className={`right-side ${theme ? "" : "sub-sec"}`}>
                {/* <!-- form section --> */}
                <div className="row align-items-center w3l-forms-9">
                  <div className="main-midd col-md-6">
                    <h4 className="title-head mb-lg-2">
                      Subscribe Us to join our Community{" "}
                    </h4>
                    <p>Newsletter</p>
                  </div>
                  <div className="main-midd-2 col-md-6 mt-md-0 mt-4">
                    <form action="#url" method="GET" className="rightside-form">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button className="btn" type="submit">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
                {/* <!-- //form section --> */}
              </div>
              <div className="row sub-columns">
                <div className="col-lg-2 col-sm-6 sub-two-right">
                  <h6>Quick links</h6>
                  <ul>
                    <li>
                      <Link to="/">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6 sub-two-right pl-lg-5 mt-sm-0 mt-4">
                  <h6>Help & Support</h6>
                  <ul>
                    <li>
                      <Link to="/">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Live Chart
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Faq
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="fa fa-angle-double-right mr-2"></span>
                        Terms of Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-6 sub-one-left mt-lg-0 mt-sm-5 mt-4">
                  <h6>Contact </h6>
                  <div className="column2">
                    <div className="to1">
                      <span
                        className="fa fa-envelope-o"
                        aria-hidden="true"
                      ></span>
                      <Link to="mailto:info@cloudnode.info">
                        infor@cloudnode.info
                      </Link>
                    </div>
                    <div className="to2">
                      <span className="fa fa-phone" aria-hidden="true"></span>
                      <Link to="tel:+91 9329920138">+91 9329920138</Link>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 sub-one-left ab-right-cont pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                  <h6>About </h6>
                  <p>
                    We are committed to providing our learners with the highest
                    level of support and guidance throughout their learning
                    journey. Our platform is designed to be user-friendly and
                    accessible to learners from all over the world, regardless
                    of their language or cultural background.
                  </p>
                  <div className="columns-2">
                    <ul className="social">
                      <li>
                        <Link to="/">
                          <span
                            className="fa fa-facebook"
                            aria-hidden="true"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span
                            className="fa fa-linkedin"
                            aria-hidden="true"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span
                            className="fa fa-twitter"
                            aria-hidden="true"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/e">
                          <span
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span
                            className="fa fa-github"
                            aria-hidden="true"
                          ></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- copyright --> */}
        <div className="copyright-footer text-center">
          <div className="container">
            <div className="columns">
              <p>
                @2023 CloudNode. All rights reserved. Design by{" "}
                <Link to="https://cloudnode.info/" target="_blank"></Link>
                CloudNode
              </p>
            </div>
          </div>
        </div>
        {/* <!-- //copyright --> */}
      </footer>
    </>
  );
}
