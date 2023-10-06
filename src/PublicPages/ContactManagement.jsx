import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import indsaccontactmanagement from "../Images/indsac-contact-management.gif";
import contactanalytics from "../Images/contactanalytics.png";
import { Link } from 'react-router-dom';

 
export default function ContactManagement() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="INDSAC-CRM allows you to store and load all personal information about each customer. Provides customer conversation with all the information they need to form a quick rapport" />
            <meta property="og:title" content="Contact Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/contactmanagement.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-contact-management.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-contact-management.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="INDSAC-CRM allows you to store and load all personal information about each customer. Provides customer conversation with all the information they need to form a quick rapport" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Contact Management ",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/contactmanagement.jsp"}
        </script> */}

            <title>Contact Management | Best CRM Software | Indsac Crm :: indsaccrm.com</title>
            <Navbar />

            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Contact Management</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="main-titles-head text-center">
                            <h3 className="header-name">
                                Contact Management
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsaccontactmanagement} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>The Key To Your Customer Success</h4>
                                <p className="para"> INDSAC-CRM allows you to store and load all personal information about each customer. Provides customer conversation with all the information they need to form a quick rapport.</p>
                                <div className="jst-two-coloums mt-4">
                                    <div className="icon-text">
                                        <h5> Longer Customer Relationship</h5>
                                        <p className="para">Built strong relationships that have value. Empower you to deliver a world-class customer experience</p>
                                    </div>
                                    <div className="icon-text mt-lx-3 pt-lx-1">
                                        <h5>Improve Data Management</h5>
                                        <p className="para"> Displays the metrics that you need to see and can be accessed at a moment's notice, making data-driven decisions quickly.</p>
                                    </div>
                                </div>
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
                                <h4>Best insights of Contacts</h4>
                                <p className="para"> Get critical information that will help develop the relationships and promote your products and services.</p>
                                <div className="jst-two-coloums mt-4">
                                    <div className="icon-text">
                                        <h5> Increased Productivity </h5>
                                        <p className="para">Automates the entire scheduling process which dramatically increases the productivity of business</p>
                                    </div>
                                    <div className="icon-text mt-lx-3 pt-lx-1">
                                        <h5 >Improving Marketing Effectiveness </h5>
                                        <p className="para">A well-designed INDSAC-CRM contact database provides you with a wealth of analytical data including better insight into the people and companies exhibiting interest in your products and services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={contactanalytics} alt="product" className="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
