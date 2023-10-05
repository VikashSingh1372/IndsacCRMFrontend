import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import digitalmarketing from "../Images/digitalmarketing.jpg";


export default function DigitalMarketing() {
    return (
        <>

            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Digital marketing is every marketing activity, a strategy that is used on digital platforms such as social media, websites to attract prospective customers" />
            <meta property="og:title" content="Best CRM Digital Marketing" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/digitalmarketing.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/digitalmarketing.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/digitalmarketing.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Digital marketing is every marketing activity, a strategy that is used on digital platforms such as social media, websites to attract prospective customers" />
            <meta property="og:locale" content="en_US" />
            <title>Best CRM Digital Marketing | Digital Marketing :: indsaccrm.com</title>

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Digital Marketing",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/digitalmarketing.jsp"}
            </script> */}

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active"> Digital Marketing </li>
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
                                <img src={digitalmarketing} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Digital Marketing</h4>
                                <p className="para">Digital marketing is every marketing activity, a strategy that is used on digital
                                    platforms such as social media, websites to attract prospective customers. It aims your marketing
                                    methods on platforms that prospective customers spend most of their time on such as Facebook,
                                    Twitter, Instagram, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-recent-work-hobbies">
                <div className="recent-work ">
                    <div className="container">
                        <div className="left-text">
                            <h3>What is the role of CRM in digital marketing?</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para">  More and more activities are taking place online from web searches to shopping etc. as it is quicker and
                            more practical. There is no longer the need to stand in a line in a store if you choose not to, especially during
                            sales season when everything is chaotic, nor go to the library for information on a company. </p>
                        <br /><p className="para">For these, brands needed a quick adaptation as well as something that would help manage audience engagement and data.

                            <br />So, what have stores or businesses chosen to do? They have decided to bring their products and services to your doorstep and online.

                            <br />With technology updates and limitless information, a customer is exposed to many other offers of the same product, CRM is key to staying ahead of the game. </p>
                        <br />
                        <div className="left-text">
                            <h3>Importance of CRM in Digital Marketing</h3>
                            <p className="para">  One thing that every business person knows is that a happy customer will return. A happy customer will likely tell three or more of their friends about your business.

                                <br /><br />An unhappy customer will likely tell six or more people about their experience with your business. So, no matter what business you are in, keeping the customer happy is the key to success.<br />
                                <br />   1. Digital Marketing Strategies Connected to CRM
                                <br />   2. CRM Personalizes the Digital Marketing Campaign
                                <br />  3. Digital Connections
                                <br />4. Satisfaction Guaranteed
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
