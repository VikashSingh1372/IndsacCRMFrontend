import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import planning from "../Images/planning.jpg";
import { Link } from 'react-router-dom';
export default function Process() {
    return (
    <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="The CRM process is a strategy for keeping every customer interaction personalized and meaningful that consists of five main steps" />
            <meta property="og:title" content="CRM Process Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/processmanagement" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/planning.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/planning.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="The CRM process is a strategy for keeping every customer interaction personalized and meaningful that consists of five main steps" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"CRM Process Management",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/processmanagement"`}`
            </script>

            <title>CRM Process Management | Process Management :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active"> Process Management </li>
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
                                <img src={planning} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4>CRM Process Management</h4>
                                <p class="para">The CRM process is a strategy for keeping every customer interaction     personalized and meaningful that consists of five main steps.
                                    A customer relationship management system provides the data and functionalities your team needs to execute this strategy and ultimately turn leads into customers.
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
                            <h3>CRM Process Cycle</h3>
                            <p class="para">  The CRM cycle involves marketing, customer service, and sales activities.
                                It starts with outreach and customer acquisition and ideally leads to customer loyalty.<br /><br />
                                There are five key stages in the CRM cycle :<br />
                                <br />
                                1. Reaching a potential customer<br />
                                2. Customer acquisition<br />
                                3. Conversion<br />
                                4. Customer retention<br />
                                5. Customer loyalty<br />

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>Steps in CRM Process </h3>
                            <p class="para">  The five steps of the CRM process are a collaborative effort between marketing, sales,
                                and support departments. To help you understand how each team works together.</p><br />
                                <br />
                                <h3>1. Generate brand awareness</h3><br />
                                Acquiring new customers is to introduce them to your business. The marketing team typically takes on this task through
                                several measures:<br /><br />
                                1.  Learning about your target audience.<br />
                                2.  Segmenting your target audience.<br />
                                3. Creating marketing campaigns that speak to those target demographics.<br /><br />

                                <h3>2.Acquire leads </h3>
                                <p class="para">Introducing your brand to a potential customer is just the beginning of the CRM process. From there,
                                    you have to encourage them to learn more about your business and engage with it.</p><br />
                                    <br />
                                    <h3>3.Convert leads into customers </h3>
                                    <p class="para">  You've successfully engaged with your leads, and they're interested.
                                        Now it's time to turn those leads into customers.,</p><br />
                                        <br />
                                        <h3>4. Provide superior customer service </h3>
                                        <p class="para"> You've successfully converted your lead into a customer. But the CRM process doesn't end when a
                                            customer converts. To grow as a company, you need to retain customers.</p> <br />
                                            <br/>
                                                <h3>5.Drive upsells</h3>
                                                <p class="para">  When we think of a returning customer, we imagine a shopper continually coming back to the same business
                                                    to buy the products they know and love.
                                                    But there is another key way existing customers provide value by upgrading to more expensive products. <br />
                                                    <br />
                                                </p>
                                            </div>
                                        
                                        </div>
                                        
                                    </div>
                                </section>

                                <Footer />
                            </>
                            )
}
