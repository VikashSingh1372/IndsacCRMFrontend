import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CRM1 from "../Images/CRM1.png";
import indsactask3 from "../Images/indsac-task3.gif";
import indsacleadmanagement from "../Images/indsac-lead-management.gif";
import { Link } from 'react-router-dom';

export default function CoreCRMFeatures() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="INDSAC-CRM provide a best Core CRM Features" />
            <meta property="og:title" content="Core CRM Features" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://www.indsaccrm.com/navigate/core features.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/CRM1.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/CRM1.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="INDSAC-CRM provide a best Core CRM Features" />
            <meta property="og:locale" content="en_US" />
            <title>Core CRM Features | Features :: indsaccrm.com</title>

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Core CRM Features",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/core features.jsp"}
            </script> */}

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">

                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><a to="/features">Features <span className="fa fa-angle-right" aria-hidden="true"></span></a></li>
                            <li className="active">Core Features</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <h3 className="header-name"> Core CRM Features </h3>
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={CRM1} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4> Contact management</h4>
                                <p className="para">It allows users to segment their contacts into groups to organize and better cater to
                                    them. With this CRM feature, you'll be able to gather crucial customer data and bolster your
                                    marketing strategies when introducing new products. It also improves the personalization of all
                                    contacts with customers, making them feel important and catered to.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">

                            <div className="cwp4-text col-xl-6">
                                <h4>Task Management</h4>
                                <p className="para">Customer management is tightly coupled with employee management. If you want to serve
                                    your customers better, first manage your employees better. If a customer's request is pending for
                                    a long time because your employees do not know who should work on it, it will never improve the
                                    customer experience. It is important to assign and complete tasks within time and budget. Using
                                    CRM, a business can automate the task management process. It creates and assigns tasks among
                                    employees based on their skill set, availability, location, etc.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsactask3}alt="product" className="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsacleadmanagement} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4> Lead management</h4>
                                <p className="para">Manage the process of converting prospects into potential customers (leads) by identifying, scoring, and moving leads through the sales pipeline. A lead management tool makes the process more efficient.
                                    This removes burdensome manual entry tasks and creates the freedom to increase productivity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
