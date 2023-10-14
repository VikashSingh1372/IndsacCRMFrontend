import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import opp1 from "../Images/opp1.gif";
import opp2 from "../Images/opp2.jpg";
import opp7 from "../Images/opp7.jpg";
import opp4 from "../Images/opp4.png";
import opp5 from "../Images/opp5.png";
import oppm from "../Images/oppm.gif";
import oppm1 from "../Images/oppm1.jpg";
import oppm2 from "../Images/oppm2.png";
import oppm3 from "../Images/oppm3.png";


export default function OpportunityManagement() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Our opportunity management functionality allows you to implement sales methodologies that help guide your sales reps through predefined steps to the final sale" />
            <meta property="og:title" content="Opportunity Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/opportunitymanagement" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/opp1.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/opp1.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Our opportunity management functionality allows you to implement sales methodologies that help guide your sales reps through predefined steps to the final sale" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Opportunity Management",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/opportunitymanagement"`}`
        </script>

            <title> Opportunity Management | Best CRM Software | Indsac Crm :: indsaccrm.com</title>
            <Navbar />

            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services.jsp">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Opportunity Management</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="main-titles-head text-center">
                            <h3 className="header-name">
                                Opportunity Management
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={opp1} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <p className="para"> Our opportunity management functionality allows you to implement sales methodologies that help guide your sales reps through predefined steps to the final sale. </p><br />
                                <p className="para">It provides opportunity tracking so you'll always know the details for each prospective sale, and allows you to review forecasts in real-time with detailed reports, dashboards and lists. </p><br />
                                <p className="para">INDSAC-CRM gives you complete visibility into your pipeline so you can ensure your forecasting is accurate and identify where the best opportunities lie.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="container">

                            <div className="cwp4-two row">

                                <div className="cwp4-text col-xl-6">
                                    <h4>What is opportunity management? </h4>
                                    <p className="para"> Every business generates leads. However, leads don't bring in revenue, deals do.
                                        You generate leads, nurture them, and convert them when they show an interest in purchasing your products or service. </p><br />
                                    <p className="para">   The stage between identifying a lead and closing or losing a deal is your "opportunity". </p> <br />
                                    <p className="para">  Your sales team likely puts a substantial amount of effort into interacting with
                                        the right people, involving stakeholders, making presentations, and showcasing demos to help them make that purchasing decision.</p>
                                </div>
                                <div className="col-xl-6 cwp4-image ">
                                    <img src={opp2} alt="product" className="img-responsive " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-features-4">
                <div className="features4-block">
                    <div className="container">
                        <div className="main-titles-head text-center">

                            <h3 className="header-name">
                                Complete Visibility of Your Opportunities
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <a href=""><img className="img-responsive" src={opp7} alt=" " /></a><br />
                                    <h4><a href="" className="title-head"> Improve Your Win Rates</a></h4>
                                    <p className="para">Implement sales methodologies and guide reps through predefined steps so important stages are never missed and opportunities
                                        continue progressing through your pipeline. </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <a href=""><img className="img-responsive" src={opp4} alt=" " /></a>
                                    <h4><a href="" className="title-head">Manage Your Pipeline</a></h4>
                                    <p className="para">ales and management reports and dashboards provide access to data and analytics,
                                        including an opportunity funnel, sales reports, key performance indicators, and pending activities.</p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <a href=""><img className="img-responsive" src={opp5} alt=" " /></a><br />
                                    <h4><a href="" className="title-head"> Expose Hot Opportunities</a></h4>
                                    <p className="para"> With more information at your fingertips, you can uncover the best opportunities and focus resources where they matter most. </p>
                                </div>
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
                                <h3 className="header-name">Capture opportunities easily without creating duplicates</h3> <br />
                                <p className="para"> Auto-capture and map all the different opportunities associated with one contact, no
                                    matter how many different channels of inquiry including online and phone channel, manual bulk upload,
                                    or individual opportunity addition without creating duplicate contacts.
                                </p>
                            </div>

                            <div className="col-xl-6 cwp4-image ">
                                <img src={oppm} alt="product" className="img-responsive " />
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
                                <img src={oppm1}alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name">More Accurate Forecasting</h3> <br />
                                <p className="para">Build reliable and accurate sales forecasts with INDSAC-CRM opportunity management. Our sales dashboards and reports give you a
                                    view into exactly what is happening in your pipeline, so you can identify the details of every opportunity and ensure your forecasts are always accurate and up-to-date.</p>

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
                                <h3 className="header-name">Boost Productivity</h3> <br />
                                <p className="para">  INDSAC-CRM opportunity management also delivers a major boost in productivity.
                                    Rather than having your reps spend their time compiling the details for all their deals, management can generate an up-to-date
                                    opportunity forecast with just a few clicks of the mouse. You can also quickly generate quotes and maintain a detailed quote history for each opportunity.
                                </p>
                            </div>

                            <div className="col-xl-6 cwp4-image ">
                                <img src={oppm2} alt="product" className="img-responsive " />
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
                                <img src={oppm3} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name">Ensure high team productivity with opportunity smart views</h3> <br />
                                <p className="para">Smart views allow teams to prioritize their opportunities and concentrate on the most important tasks first.
                                    They'd know exactly which opportunities to handle next, view all their tasks and follow-ups in a clean view, and make prospect interactions fast and relevant.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


