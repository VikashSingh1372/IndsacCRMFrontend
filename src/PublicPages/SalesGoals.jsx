import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import salesgoals from "../Images/salesgoals.gif"

export default function SalesGoal() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="With Sales Goals, you can define your sales objectives as measurable goals in your CRM, track progress, and reach your targets" />
            <meta property="og:title" content="Sales CRM Goals" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/salesgoals.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/salesgoals.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/salesgoals.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="With Sales Goals, you can define your sales objectives as measurable goals in your CRM, track progress, and reach your targets" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Sales CRM Goals",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/navigate/salesgoals.jsp"}
            </script> */}

            <title>Sales CRM Goals | Sales Goals :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/services">services <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/salesautomation">Sales Automation<span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active"> Sales Goals </li>
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
                                <img src={salesgoals} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4>Sales Goals</h4>
                                <p class="para">Goals provide a way to measure the success of your business. <br /><br /> If you're focussed on
                                    closing deals or increasing revenue, goals help you understand what you need to accomplish and how
                                    to take action.<br /><br /> With Sales Goals, you can define your sales objectives as
                                    measurable goals in your CRM, track progress, and reach your targets.
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
                            <h3>Sale CRM Goals</h3>
                            <p class="para">    </p>
                        </div>
                        <p class="para"><h4>1. Increase customer retention</h4>Happy customers are loyal customers and they also offer good word-of-mouth
                            advertising, which can be invaluable. One of the major benefits in mapping out your CRM plan with increased
                            customer satisfaction as your primary goal is the fact that all other goals and objectives will invariably support
                            this effort. In this way, each method that you use or measure that you take will share a symbiotic relationship
                            with the rest. As a result, all of your investments in CRM will be supporting your goals in a balanced and seamless
                            fashion.</p>
                        <br /><br />
                        <p class="para"><h4>2. Improve The Efficiency Of Your Business </h4>
                            A good CRM platform will collect and organize a wealth of data about individual and group consumer profiles.
                            Another part of these endeavors can be the implementation and use of knowledge management systems that increase the
                            speed at which customer inquiries are addressed and problems are resolved. Greater levels of efficiency will also
                            lead to improved client satisfaction. </p>
                        <br /><br />
                        <p class="para"><h4>3. Expand Your Customer Base</h4>
                            CRM program that is linked to a high-quality knowledge management platform will allow you to stay in contact with
                            prospects that have yet to convert. It will also allow you to identify commonalities and relationships among the
                            clients that you already have so that you can hone and improve your future efforts in outreach. A larger customer
                            base will allow for increased continuity in profits, even in a seasonal industry.</p>
                        <br /><br />
                        <p class="para"><h4>4. Enhance Your Sales And Support Teams</h4>
                            CRM helps you replace undesirable additions to your team or gives you a framework for increasing the customer service skills of existing employees, it is certain to
                            improve the benefits that hired workers are providing.
                        </p> <br /><br />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
