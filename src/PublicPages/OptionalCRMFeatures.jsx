import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import cust from "../Images/cust.png";
import t1 from "../Images/t1.png";
import indsaccallcenterautomation from "../Images/indsac-call-center-automation.gif";
import { Link } from 'react-router-dom';


export default function OptionalCRMFeatures() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="INDSAC-CRM provide a best Optional CRM Features" />
            <meta property="og:title" content="Optional CRM Features" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/optional feature.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-call-center-automation.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-call-center-automation.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="INDSAC-CRM provide a best Optional CRM Features" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Optional CRM Features",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/optional feature.jsp"}
        </script> */}

            <title>Optional CRM Features | Features :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/features">Features <span className="fa fa-angle-right" aria-hidden="true"></span>
                            </Link></li>
                            <li className="active">Optional Features</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <h3 className="header-name"> Optional CRM Features </h3>
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">

                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsaccallcenterautomation} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <h4>Call Center Automation</h4>
                                <p className="para">CRM with call center automation enables service agents to solve customers' problems
                                    quickly. It gives the right information at the right time to improve the overall customer experience.
                                    Interactive voice response (IVR), virtual agents, automatic call distribution are just a few examples
                                    of call center automation.</p>
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
                                <h4>Training and Ease to learn</h4>
                                <p className="para">Every CRM has a different learning curve. It will not make any difference if your
                                    employees do not understand the application easily. INDSAC-CRM provides training to make the
                                    product more usable. Also, CRM applications have built-in Help functionality to guide users step by
                                    step.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={t1} alt="product" className="img-responsive " />
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
                                <img src={cust} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>  Easy Customization</h4>
                                <p className="para">Every business has its unique strategies and processes. And to automate those processes,
                                    you have to customize CRM. We provide an easy customization feature to make your work easy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
