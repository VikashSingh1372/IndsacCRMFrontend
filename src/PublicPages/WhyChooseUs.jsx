import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import CRMImage from "../Images/CRMImage.jpg";

export default function WhyChooseUs() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="we have grown to support customers by putting their needs at the center of everything we do. We have got your back today, tomorrow, and all the days ahead" />
            <meta property="og:title" content="Why Choose INDSAC-CRM?" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/whychooseus.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/CRMImage.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/CRMImage.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="we have grown to support customers by putting their needs at the center of everything we do. We have got your back today, tomorrow, and all the days ahead" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Why Choose INDSAC-CRM?",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/navigate/whychooseus.jsp"}
            </script> */}

            <title>Why Choose INDSAC-CRM? | Why Choose INDSAC-CRM :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Why Choose INDSAC-CRM ?</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={CRMImage} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Why Choose INDSAC-CRM?</h4>
                                <p className="para">With more than 5 years of experience in the CRM industry, we know what it's like to be at every stage of a growing business. Since our start,
                                    we have grown to support customers by putting their needs at the center of everything we do.
                                    We have got your back today, tomorrow, and all the days ahead.<br/><br/>
                                        INDSAC-CRM makes customer service better. We build software to meet customer needs, set your team up for success,
                                        and keep your business in sync. </p><br />
                                        <a href="../login.jsp" className="btn action-button mt-6">Get Free CRM</a>


                                    
                            </div>
                            <div className="left-text">
                                <h3 style={{ fontSize: '45px' }}>INDSAC-CRM is not
                                    <br />just different, it's better.</h3><br />
                                <p className="para">CRM software is used by organizations to run their sales processes. While these solutions might be user-friendly robust, and secure, the amount of complexity leads to the user
                                    experience suffering, which often requires you to change the way you work to suit the software.</p><br />

                                <p className="para">INDSAC-CRM with its broad coverage, deep features can go head to head when it comes to technology and
                                    functionality. Where other CRMs use predatory business practices and aggressive, multi-year contracts to strong-arm
                                    users into sticking around, we are so confident in the strength of our product that we offer flexible, month-to-month subscriptions that can grow with your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-specification-6">
                <div className="specification-layout">
                    <div className="container">
                        <div className="main-titles-head">

                            <h3 className="header-name">We Bring The Best Services For You
                            </h3>

                        </div>
                        <div className="specification-effect row text-center">
                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <span className="fa fa-shield" aria-hidden="true"></span>
                                    <h4><a href="security.jsp" className="title-head">Secure and reliable</a></h4>
                                    <p className="para">With advanced security features like encryption, audit logs, IP restrictions, and two-factor authentication, INDSAC CRM conveniently protects
                                        your data, only allowing access to the users you authorize. </p>
                                </div>
                            </div>
                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                                <div className="back-color">
                                    <span className="fa fa-mobile" aria-hidden="true"></span>
                                    <h4><a href="digitalmobile.jsp" className="title-head">Mobile accessibility</a></h4>
                                    <p className="para">If you have a sales team in the field, it's important to ensure that they have access to customer data at all times.
                                        INDSAC CRM allows them to stay on the move, close deals more effectively, and keep everyone in the loop. </p>
                                </div>
                            </div>
                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                                <div className="back-color">
                                    <span className="fa fa-phone-square" aria-hidden="true"></span>
                                    <h4><a href="contact.jsp" className="title-head">Customer support</a></h4>
                                    <p className="para">With our support system, you will have access to a team of highly skilled support
                                        engineers on standby 24 hours a day, all year long. They can assist you with all your issues, big and small, generating solutions in the average period.</p>
                                </div>
                            </div>
                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                                <div className="back-color">
                                    <span className="fa fa-paper-plane" aria-hidden="true"></span>
                                    <h4><a href="coustomeronbording.jsp" className="title-head">Customer On-boarding</a></h4>
                                    <p className="para">Worried about migrating from your existing customer relationship management solutions. Our migration system, switch,
                                        helps you bring all your existing sales data into INDSAC CRM in just a few clicks.</p>
                                </div>
                            </div>
                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                                <div className="back-color">
                                    <span className="fa fa-inr" aria-hidden="true"></span>
                                    <h4><a href="costofcrm.jsp" className="title-head"> No hidden costs</a></h4>
                                    <p className="para">With INDSAC CRM, there are no forced contracts or additional surprise costs. What you pay for is what you get.
                                        The pricing is flexible as well you can opt to pay either monthly or annually.</p>
                                </div>
                            </div>
                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                                <div className="back-color">
                                    <span className="fa fa-industry" aria-hidden="true"></span>
                                    <h4><a href="crmmarketing.jsp" className="title-head">Marketing</a></h4>
                                    <p className="para">Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</p>
                                </div>
                            </div>

                            <div className="left-text">
                                <br /><br /><h3 style={{ fontSize: '35px' }}>The CRM Platform Your Whole Business Will Love</h3> <br /><br />
                                <p className="para">INDSAC-CRM platform has all the tools and integrations you need for marketing, sales, content management, and customer service.
                                    <br />Each feature in the platform is powerful alone, but the real magic happens when you use them together.</p><br />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
