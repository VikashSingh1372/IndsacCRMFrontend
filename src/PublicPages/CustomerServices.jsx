import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import itp3 from "../Images/itp3.png";
import itp1 from "../Images/itp1.png";
import itp from "../Images/itp.png";

export default function CustomerServices() {
    return (
        <>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="CRM is the one that handles your work to ease your high efforts. Customer Relationship Management (CRM) can plan and control your crucial projects" />
            <meta property="og:title" content="Computer Services" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/customer_services" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/itp.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/itp.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="CRM is the one that handles your work to ease your high efforts. Customer Relationship Management (CRM) can plan and control your crucial projects" />
            <meta property="og:locale" content="en_US" />
            <title>Computer Services | Features :: indsaccrm.com</title>

            <script type="application/ld+json">
                `{`"@context":"https://schema.org","@type":"WebPage","name":" Computer Services ",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/customer_services"`}`
            </script>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/computer">Computer <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Services for IT Industry</li>
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
                                <img src={itp} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4> You can plan and manage IT projects here</h4>
                                <p className="para">CRM is the one that handles your work to ease your high efforts. Customer Relationship
                                    Management (CRM) can plan and control your crucial projects. It can handle your IT projects too as
                                    it can structure your projects, focus on targets, goals, budget, etc from the starting. This is the
                                    best way to not meet up with any big issues. You can also watch project status just for a reminder.</p>
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
                                <h4>Boost up customer satisfaction and loyalty</h4>
                                <p className="para">CRM users useless features of CRM. If they start focusing on every feature then their
                                    work can be done in a great way as well. Every industry keeps its eyeballs on customer support
                                    service because the customer is the king for every industry or every sector. INDSAC-CRM for the IT
                                    industry is to offer timely and efficient customer support and help to their customers that daily
                                    deals with them.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={itp1} alt="product" className="img-responsive " />
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
                                <img src={itp3} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>CRM Analytics</h4>
                                <p className="para">INDSAC-CRM process, interpret, and report the data of sales and operations to build a
                                    picture of the ideal customer and current performance of operations. This doesn't just enable
                                    companies to focus more on which marketing campaigns work, but also they can improve operational
                                    efficiency. Employees also generate reports to share internally and with their customers faster,
                                    and have to depend less on multiple tools for the same, since all the information becomes available in a single integrated tool.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <Footer />
        </>
    )
}
