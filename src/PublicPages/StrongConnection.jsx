import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function StrongConnection() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Establish A Strong Connection With Customers" />
            <meta property="og:title" content="Strong Connection" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/strongconnection.jsp" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Establish A Strong Connection With Customers" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Strong Connection",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/navigate/strongconnection.jsp"}
    </script> */}

            <title>Strong Connection | Pharmaceutical Industry:: indsaccrm.com</title>
            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/pharmaceutical">Pharmaceutical Industry<span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active">Establish A Strong Connection With Customers</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <!-- breadcrumbs --> */}
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="center-text">
                            <h3>Establish A Strong Connection With Customers</h3><br /><br />

                            <h4>Make customer service your priority</h4>
                            <p class="para" > The product you have might have outstanding features and qualities but what if customer service isn't as
                                good as the product. Is it at least meeting the basic standards? And, this is one aspect that drives sales away. Also,
                                continuous marketing promotions could make worst of sales. CRM software, in its unique way, helps you in offering
                                industry-standard customer service.</p><br />

                            <h4>Customer retention gets improved</h4>
                            <p class="para" >
                                This is one of the most important things to consider when choosing a CRM for your business. CRM software integrates with:
                                an ERP or other accounting software, HR software, your website, and web forms to import new leads, billing and e-commerce platforms to register transactions, as well as marketing solutions. </p><br />

                            <h4>Know what your customers want</h4>
                            <p class="para" > One of the important ways to help your customers is self-help. Predicting issues or queries that your
                                customers might face in the future and preparing solutions or support documents will help them. It is an essential
                                component to be followed to improve customer communication and reduce customer service errors and also confusion over
                                your product or service. You can create support documents such as:<br />
                                1. Knowledgebase<br />
                                2. FAQs<br />
                                3. Video tutorials<br />
                                4. How to guides</p><br />

                            <h4>Offer better customer service</h4>
                            <p class="para" > Even the best product is only as good as the service that comes with it both before and after the sale.
                                Don't hit up your prospects with multiple marketing promotions that will annoy or scare them away. Drop the ball after
                                a sale and you've wasted the time and effort that went into winning a valuable customer. When your entire team has
                                immediate access to a customer's complete history, everyone can quickly provide personalized messages and solutions,
                                with the right resources. Smoother interactions build trust and encourage repeat business. </p><br />

                            <h4>Faster solutions</h4>
                            <p class="para" > Using a video-based call center helps to offer faster resolutions through face-to-face personalized
                                conversations. It helps to identify the main cause of the error and deliver effective solutions at the first touchpoint.  </p><br />

                            <h4>Real-time support</h4>
                            <p class="para" > Implement both live chat and chat-bot to deliver real-time support to your customers, depending upon your business requirements. </p><br />
                        </div>


                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
