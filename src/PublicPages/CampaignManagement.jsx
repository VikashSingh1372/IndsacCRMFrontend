import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import indsacemailcampaigns from "../Images/indsac-email-campaigns.gif";
import cm1 from "../Images/cm1.jpg";
import cm6 from "../Images/cm6.png";
import cm4 from "../Images/cm4.jpg";
import cm3 from "../Images/cm3.png";

export default function CampaignManagement() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Our campaign management tool gives you the power to run marketing campaigns directly from your CRM and track your success" />
            <meta property="og:title" content="Campaign Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/CampManagement.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/cm1.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/cm1.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Our campaign management tool gives you the power to run marketing campaigns directly from your CRM and track your success" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Campaign Management",
                "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/navigate/CampManagement.jsp"}
            </script> */}

            <title>Campaign Management | Pharmaceutical Industry :: indsaccrm.com</title>
            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><a href="../index.jsp">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
                            <li><a href="Pharmaceutical.jsp">Pharmaceutical Industry <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
                            <li class="active">Automated Campaign Management </li>
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
                                <img src={cm1} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4>Campaign Management In CRM</h4>
                                <p class="para">Our campaign management tool gives you the power to run marketing campaigns directly from your
                                    CRM and track your success.</p>
                                <div class="jst-two-coloums mt-4">
                                    <div class="icon-text">
                                        <h5> <a href="#" ></a>
                                        </h5>
                                        <p class="para">You can create multiple marketing campaigns and stages for different segments of your customer base and create automated campaigns.</p>
                                    </div>
                                    <div class="icon-text mt-lx-3 pt-lx-1">
                                        <h5 ><a href="#" ></a>
                                        </h5>
                                        <p class="para">Our INDSAC-CRM campaign management can be used to manage email marketing campaigns as well as other campaign types including Google Ads along with traditional marketing methods.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>Benefits Of Using Campaign Management</h3>

                            <p class="para"> <ul>
                                <li>1. Campaign management software enables to launch, schedule, quickly coordinate, and monitor marketing campaigns across different channels. The marketing campaign execution now can happen in just a few hours. As a result, the lead time or campaign roll-outs is significantly decreased.</li><br /><br />
                                <li>2. Efficient marketing solution allows for tracking the efficiency of your campaign as well as finding things that are not working. By using testing, marketers can gauge the probability of success of two different campaigns. By tracing the progress of a marketing campaign, marketers can find what is working and what is not. </li><br /><br />
                                <li>3. According to statistics, personalization significantly improves customer satisfaction and eventually conversion rates. A marketer can relate specific behaviors to individuals and then modify emails, landing pages, and offers.</li><br /><br />
                            </ul> </p>
                            <br /><br />
                            <div class="main-titles-head text-center">

                                <h3 class="header-name">
                                    Automation's That Are Always On-Even <br />When You are Off
                                </h3>
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
                                <h3 class="header-name">Email Campaigns</h3> <br />
                                <p class="para"> Use INDSAC-CRM campaign management tools for email marketing campaign automation. Select
                                    the emails you wish to send, insert the time you want the system to wait between each email, and
                                    select the criteria for your campaign member list. Then turn it on and the system does the rest.
                                    Include as many emails as you want in your email campaign. It's a great way to manage your B2C or
                                    B2B email marketing efforts.
                                </p>
                            </div>

                            <div class="col-xl-6 cwp4-image ">
                                <img src={indsacemailcampaigns} alt="product" class="img-responsive " />
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
                                <img src={cm4}alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">Multichannel Campaigns</h3> <br />
                                <p class="para">You can effortlessly create complex, multichannel marketing campaigns. With so many
                                    campaign nodes to choose from, you can generate campaigns that leverage email sends, SMS text messaging,
                                    automatic social media posts, landing pages, web forms, and more.</p>
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
                                <h3 class="header-name">Campaign Reporting and Analytics</h3> <br />
                                <p class="para"> With INDSAC-CRM campaign reporting and analysis features, you can do so in a matter of
                                    minutes. Simply navigate to the campaign in question and click the reporting icon to display campaign
                                    metrics such as emails opened, email links clicked, email bounces, unsubscribes, and spam complaints
                                    related to the campaign. You can view campaign report data in a chronological timeline view, and
                                    drill down into individual metrics for a more granular view.
                                </p>
                            </div>

                            <div class="col-xl-6 cwp4-image ">
                                <img src={cm6} alt="product" class="img-responsive " />
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
                                <img src={cm3}alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">Add Contacts to Live Campaigns</h3> <br />
                                <p class="para">If you have a drip marketing campaign or other campaigns that's ongoing over a long period
                                    of time, you can add a campaign node that pulls new contacts into that campaign. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
