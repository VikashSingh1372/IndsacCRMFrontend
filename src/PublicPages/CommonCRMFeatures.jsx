import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import sales from "../Images/sales.png";
import op from "../Images/op.png";
import order from "../Images/order.svg";
import indsacaccountmanagement from "../Images/indsac-account-management.gif";
import indsaccampaignmanagement from "../Images/indsac-campaign-management.gif";
import { Link } from 'react-router-dom';


export default function CommonCRMFeatures() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="INDSAC-CRM provide a best Common CRM Features" />
            <meta property="og:title" content="Common CRM Features " />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/common features.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/sales.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/sales.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="INDSAC-CRM provide a best Common CRM Features" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":" Common CRM Features ",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/common features.jsp"}
        </script> */}

            <title>Common CRM Features | Features :: indsaccrm.com</title>
            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/features">Features <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Common Features</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <h3 className="header-name"> Common CRM Features </h3>
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={sales} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Sales Process Automation</h4>
                                <p className="para">Sales process automation is one of the most important features. It automates and
                                    streamlines various sales functionalities to standardize business processes. Businesses can
                                    customize the application as per requirements. It reduces human error, makes the sales cycle
                                    shorter, and improves lead to customer conversion ratio.</p>
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
                                <h4>Opportunity Management</h4>
                                <p className="para">When a business qualifies for a lead, it becomes an opportunity. An opportunity is a
                                    potential revenue-generating contact or account. If the business does not nurture contacts or
                                    accounts properly, it will lose its selling opportunity. Opportunity Management enables businesses
                                    to manage and monitor the sales funnel and provides necessary info to complete the sales process.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={op} alt="product" className="img-responsive " />
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
                                <img src={order} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Quote and Order Management</h4>
                                <p className="para">When a customer is interested to buy a product or service, the salesperson creates a
                                    quote with all details. If the customer agrees to buy it at the specified price, an order will be
                                    generated. If not, the salesperson either cancels the quote or revises it to meet customer
                                    requirements. CRM automates and streamlines this process for business. It improves order processing capability, sales visibility, and relationship with customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">

                            <div className="cwp4-text col-xl-6">
                                <h4>Account Management</h4>
                                <p className="para">Account Management is another primary feature of CRM software. It captures and
                                    organizes company or division or household information and manages relationships</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsacaccountmanagement} alt="product" className="img-responsive "/>
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
                                <img src={indsaccampaignmanagement} alt="product" className="img-responsive "/>
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Campaign Management</h4>
                                <p className="para">Sales process automation is one of the most important features. It automates and
                                    streamlines various sales functionalities to standardize business processes. Businesses can
                                    customize the application as per requirements. It reduces human error, makes the sales cycle
                                    shorter, and improves the lead-to-customer conversion ratio...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
