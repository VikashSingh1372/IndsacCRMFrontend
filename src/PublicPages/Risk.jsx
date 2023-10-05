import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import mr1 from "../Images/mr1.jpg";

export default function Risk() {
    return (
        <>

            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="All businesses start with risk on the part of the enterprise, including Indsac. Running a business means investing your money into something without being 100% convinced about the outcome" />
            <meta property="og:title" content="Risk Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/Risk.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/mr1.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/mr1.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="All businesses start with risk on the part of the enterprise, including Indsac. Running a business means investing your money into something without being 100% convinced about the outcome" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Risk Management",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Risk.jsp"}
            </script> */}

            <title>Risk Management |  Minimizing The Risk:: indsaccrm.com</title>

            <Navbar />

            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/telecommunication">Telecommunication Industry<span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active">Minimizing The Risk </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={mr1} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4> CRM Risk Management </h4>
                                <p class="para">All businesses start with risk on the part of the enterprise, including Indsac. Running a business means investing your money into something without being 100% convinced about the outcome. Many entrepreneurs succeed just because they risked a million dollars.<br /> <br />
                                    A CRM strategy does not only reduce risks but helps you to make sound decisions for your business. Many business start-ups fear getting a CRM within their business. But with effective plans, your CRM will be a good asset for your business.<br />  <br />
                                    CRM enables you to cultivate customer loyalty. Loyal customers are the people that make a good percentage of your total revenue. Loyal customers will always turn to you even if you are experiencing a problem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>CRM Risk Management Strategies</h3>
                            <p class="para">    </p>
                        </div>
                        <p class="para"><h4>1. Risk Avoidance </h4>
                            Risk avoidance involves strategies to avoid the identified risks altogether. You're taking proactive
                            steps to eliminate the risk by putting the right measures in place to start with. Some examples of
                            this might be ensuring your requirements are clear so that customizations are developed correctly the
                            first time or performing product selection against your requirements so that the CRM you choose is
                            already known to meet the majority of your needs. </p>
                        <br /><br />

                        <p class="para"><h4>2. Risk Transfer</h4>
                            Transferring the risk involves sharing or completely shifting the ownership of the risk with a
                            third party. In most cases, this transferring of risk is specific to financial risks that are taken
                            on by an organization like an insurance company, a GDPR consultant, etc. When you transfer risk,
                            you are shifting the liability in addition to the ownership of the risk itself.</p>
                        <br /><br />
                        <p class="para"><h4>3. Risk Mitigation </h4>
                            When you work to mitigate risk, you are trying to lessen its potential effect by lowering its exposure below your
                            acceptable threshold. You defined what's acceptable during the initial phases of your risk analysis, so now you'll
                            use those standards to help you target a response</p>
                        <br /><br />
                        <p class="para"><h4>4. Risk Acceptance</h4>
                            We must accept the things we cannot change. In certain cases, you will have to do just that. It's not ideal of
                            course, but it is a necessary strategy for two main situations: Either the risks are minor enough that you can
                            choose to handle them at the moment if they come up, or the necessary response is simply not possible due to lack
                            of resources, budget, or time.
                        </p>
                        <br /><br />

                    </div>
                </div>
            </section>

            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>How to reduce risk when choosing & implementing CRM</h3>
                            <p class="para">    </p>
                        </div>
                        <p class="para"><h4>1. Your CRM partner</h4>
                            If you are new to CRM, you will need much more guidance from your CRM partner, so you
                            should choose one with an approach that matches your needs.</p><br /><br />

                        <p class="para"><h4>2. The CRM software</h4>
                            The CRM software
                            Taking the risk out of the software you choose to run involves a lot of checks which will vary
                            depending on what you need from CRM.</p><br /><br />

                        <p class="para"><h4>3. The CRM vendor</h4>
                            When thinking about the company that owns and manages the product, you want to be sure that, their reputation within the
                            community on their customer-centricity is strong.</p><br /><br />

                        <p class="para"><h4>4. Your people </h4>
                            Many professionals in the CRM industry believe that the biggest risk involved in adopting a CRM culture
                            is not the software involved, but rather, the openness and ability to embrace change within companies
                            considering CRM. </p><br /><br />

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
