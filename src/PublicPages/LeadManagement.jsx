import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import lead2 from "../Images/lead2.gif";
import lead3 from "../Images/lead3.png";
import lead4 from "../Images/lead4.png";
import lead5 from "../Images/lead5.jpg";
import lead6 from "../Images/lead6.jpg";
import lead7 from "../Images/lead7.jpg";
import { Link } from 'react-router-dom';


export default function Lead() {
    return (
        <>

            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Lead management is a systematic process in which incoming leads are qualified, analyzed, and nurtured so that they can be converted into new business opportunities" />
            <meta property="og:title" content="Lead Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/lead.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/lead4.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/lead4.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Lead management is a systematic process in which incoming leads are qualified, analyzed, and nurtured so that they can be converted into new business opportunities" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Lead Management",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/lead.jsp"}
        </script> */}

            <title>Lead Management | Best CRM Software | Indsac Crm :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active">Lead Management </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="main-titles-head text-center">
                            <h3 class="header-name">
                                Lead Management
                            </h3>

                        </div>
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead2} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">

                                <p class="para"> Lead management is a systematic process in which incoming leads are qualified, analyzed, and nurtured so that they can be converted into new business opportunities.</p><br />
                                <p class="para">In a sales process, leads from multiple channels enter your lead management system, and the sales-ready leads are converted into deals.</p><br />
                                <p class="para">From lead generation to conversion and analysis, take a look at some of the popular ways that you can find sales success with the INDSAC-CRM lead management system.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-titles-head text-center">

                    <h3 class="header-name">
                        The Lead Management Process
                    </h3>
                </div>
            </section>
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">1: Lead capturing  </h3> <br />
                                <p class="para">
                                    A good lead management software ensures that every lead is automatically fed into the CRM system from web forms, e-mails, and chat, preventing prospects from falling through the cracks.
                                </p>
                            </div>

                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead3} alt="product" class="img-responsive " />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead4} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">2: Lead enrichment & tracking </h3> <br />
                                <p class="para">Lead management software mines data from multiple sources. It uses direct mailing or email
                                    marketing lists. Other times, it extracts information from customer databases or even social media
                                    platforms. With access to the right data, it analyzes the information, segments valuable customer
                                    identifiers, and produces a set of qualified leads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">3: Lead qualification </h3> <br />
                                <p class="para"> The predictive scoring model helps you prioritize contacts you interact with by going through historical data and assigning a score to every contact based on engagement with your company.
                                    Your team can easily identify the right leads and invest their time in making a sale.  </p>
                            </div>
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead5} alt="product" class="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead6} alt="product" class="img-responsive "/>
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">4: Lead distribution</h3> <br />
                                <p class="para">A lead management system automatically assigns leads to salespeople across territories on a round-robin basis, assigns phone numbers to territories, and transfers calls to sales teams.<br />
                                    This way, your sales team can prioritize assigned leads instead of manually searching for new leads in the CRM system.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">5: Lead nurturing</h3> <br />
                                <p class="para"> Your all leads are not sales-ready. Lead nurturing educate and demonstrate the value
                                    of your product/service. With lead management software in place, you can send campaigns to these
                                    leads who are not quite ready yet to make a purchase.</p>
                            </div>
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead7}alt="product" class="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
