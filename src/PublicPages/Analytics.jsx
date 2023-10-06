import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import anaylitics from "../Images/anaylitics.gif";

export default function Analytics() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="CRM analytics, also known as customer analytics, refers to the process of interpreting the data within your CRM software to uncover valuable insights that will impact business decisions" />
            <meta property="og:title" content="INDSAC-CRM Analytics" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/Analytics.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/anaylitics.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/anaylitics.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="CRM analytics, also known as customer analytics, refers to the process of interpreting the data within your CRM software to uncover valuable insights that will impact business decisions" />
            <meta property="og:locale" content="en_US" />
            <title>INDSAC-CRM Analytics | CRM Analytics :: indsaccrm.com</title>

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"CRM Analytics",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/navigate/Analytics.jsp"}
    </script> */}

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active"> CRM Analytics</li>
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
                                <img src={anaylitics} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>CRM Analytics</h4>
                                <p className="para">CRM analytics, also known as customer analytics, refers to the process of interpreting
                                    the data within your CRM software to uncover valuable insights that will impact business decisions.
                                    The overall purpose is to better understand your customers so you can sell to them as effectively as possible.
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
                            <h3>How INDSAC-CRM analytics can help your business?</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para"> While there are specific functions a CRM should provide to work well, another side of its functionality
                            is providing data and analytics. Business analytics is the foundation for successfully converting leads into
                            customers and customers into brand advocates.<br /> <br />
                            1. Shows a clear customer journey <br />
                            2. Indicates a change in lead status<br />
                            3. Offers insight into customer retention strategies<br />
                            4. Segments your customers </p>
                        <br />

                        <div className="left-text">
                            <h3>Applications of CRM analytics</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para"> After implementation, CRM analytics offers insights to understand and use the data that is mined.
                            Organizations use CRM analytics in the following ways:<br /><br />

                            1. Customer segmentation groupings: Dividing customers into those most and least likely to repurchase a product.<br /><br />
                            2. Profitability analysis and customer value: Learning which customers contribute to the highest profits over time.
                            This involves understanding not just how much a customer spends, but how many resources you dedicate to that customer in return.<br /> <br />
                            3. Personalization: The ability to market to individual customers based on the data collected about them.<br /><br />
                            4. Measuring and tracking escalation: The ability to measure how often problems arise with a product or service to
                            eliminate that issue and quickly achieve customer satisfaction.<br /> <br />
                            5. Predictive modeling: Comparing various product development plans in terms of likely future success given the customer knowledge base by measuring engagement levels through customer shares.</p>
                    </div>
                </div>
            </section>




            <Footer />

        </>
    )
}
