import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import team from "../Images/team.gif";
import leadm from "../Images/leadm.svg";
import inventm from "../Images/inventm.png";
import more from "../Images/more.gif";
import processm from "../Images/processm.png";
import billingm from "../Images/billingm.png"
import { Link } from 'react-router-dom';



export default function About() {


    return (
        <>
            <link rel="shortcut icon" href="../dist/img/u.png" type="image/x-icon" />
            <link rel="canonical" href="https://indsaccrm.com/navigate/about.jsp" />
            <link rel="apple-touch-icon" href="dist/img/u.png" />
            <link rel="alternate" hreflang="en" href="https://indsaccrm.com/navigate/about.jsp" />
            {/* Required meta tags  */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="INDSAC-CRM has a very well-equipped solution with some unique features. Providing business solutions across all industry segments to give access to all" />
            <meta property="og:title" content="About INDSAC-CRM" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/about.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/team.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/team.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="INDSAC-CRM has a very well-equipped solution with some unique features. Providing business solutions across all industry segments to give access to all" />
            <meta property="og:locale" content="en_US" />
            <title>About INDSAC-CRM | About :: indsaccrm.com</title>

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"About INDSAC-CRM",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/about.jsp"}
            </script> */}

            <Navbar />
            {/* breadcrumbs  */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">About</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* breadcrumbs  */}
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={team} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>About INDSAC-CRM </h4>
                                <p className="para">  Business solutions platform for the digital age. INDSAC-CRM has a very well-equipped
                                    solution with some unique features. Providing business solutions across all industry segments to
                                    give access to all. Every business has the right to access world-className business solutions.
                                    It's the guiding principle behind our work and reinforces our belief that the best technology makes
                                    your business smarter. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-recent-work-hobbies">
                <div className="recent-work ">
                    <div className="container">
                        <div className="left-text">
                            <h3>A product to meet every need</h3>
                            <p className="para">    </p>
                        </div>
                        <div className="row about-about">
                            <div className="col-lg-4 col-md-6">
                                <div className="about-grids">
                                    <h4>Who we are</h4>
                                    <p className="para">Young Entrepreneurs foster the next generation of entrepreneurs and business leaders and have the right
                                        mindset to provide a good platform for every business.</p>
                                    <div className="mt-3 about-list">
                                        <ul>
                                            <li ><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para"> To create integrated values</p>

                                            </li>
                                            <li><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para">Take on a stronger responsibility</p>
                                            </li>
                                            <li><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para">Deliver innovative products </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-line-top">
                                <div className="about-grids">
                                    <h4>Discovery</h4>
                                    <p className="para">To constantly reinvents new business solutions across all domains with new technology and deliver to pursue happier and richer lives. We develop and expand strategic products for providing the business experience.</p>
                                    <div className="mt-3 about-list">
                                        <ul>
                                            <li ><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para">Deliver innovative design </p>

                                            </li>

                                            <li><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para">To cater diverse business preferences</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-line-top">
                                <div className="about-grids">
                                    <h4>Our Vision</h4>
                                    <p className="para">To be recognized as the industry leader driving modernization in IT services in the developing world and to be the center of modern Research and Development in the IT sector.</p>
                                    <div className="mt-3 about-list">
                                        <ul>
                                            <li ><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para"> Improve CRM services</p>

                                            </li>
                                            <li><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para">Modern Research and Development </p>
                                            </li>
                                            <li><span className="fa fa-chevron-circle-right" aria-hidden="true"></span>
                                                <p className="para">Develop and deliver best services.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-about ">
                <div className="skills-bars text-center">
                    <div className="container">
                        <div className="row counter-width">
                            <div className="counter-counter col-lg-3 col-md-3 col-sm-6">
                                <h4>Active clients</h4>
                                <span>250</span>
                            </div>
                            <div className="counter-counter col-lg-3 col-md-3 col-sm-6">
                                <h4>Projects Done</h4>
                                <span>170+</span>
                            </div>
                            <div className="counter-counter col-lg-3 col-md-3 col-sm-6">
                                <h4>Success Rate</h4>
                                <span>90%</span>
                            </div>
                            <div className="counter-counter col-lg-3 col-md-3 col-sm-6">
                                <h4>Get Awards</h4>
                                <span>70+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-team-main-6">
                {/* team-grids */}
                <div className="team-content">
                    <div className="container">
                        <div className="main-titles-head text-center">

                            <h3 className="header-name">
                                Our Awesome Features
                            </h3>
                        </div>
                        <div className="row grid-col-4 text-center">
                            <div className="team-colomn col-lg-3 col-md-6 col-sm-6">
                                <div className="team-main-6">
                                    <div className="right-team-9">
                                        <a href="lead.jsp"><img className="img-responsive" src={leadm} alt=" " />
                                        </a>
                                        <br />
                                        <h6><a href="lead.jsp" className="title-team-32">Lead Management</a></h6>

                                    </div>
                                </div>
                            </div>
                            <div className="team-colomn col-lg-3 col-md-6 col-sm-6">
                                <div className="team-main-6">
                                    <div className="right-team-9">
                                        <a href="inventory.jsp"><img className="img-responsive" src={inventm} alt=" " />
                                        </a>
                                        <br />
                                        <h6><a href="inventory.jsp" className="title-team-32">Inventory Management</a></h6>

                                    </div>
                                </div>
                            </div>
                            <div className="team-colomn col-lg-3 col-md-6 col-sm-6">
                                <div className="team-main-6">
                                    <div className="right-team-9">
                                        <a href="process.jsp"><img className="img-responsive" src={processm} alt=" " />
                                        </a>
                                        <br />
                                        <h6><a href="process.jsp" className="title-team-32">Process Management System</a></h6>

                                    </div>
                                </div>
                            </div>
                            <div className="team-colomn col-lg-3 col-md-6 col-sm-6">
                                <div className="team-main-6">
                                    <div className="right-team-9">
                                        <a href="invoicemanagement.jsp  "><img className="img-responsive" src={billingm} alt=" " />
                                        </a>
                                        <br />
                                        <h6><a href="invoicemanagement.jsp " className="title-team-32">Invoice Management System</a></h6>

                                    </div>
                                </div>
                            </div>

                        </div><br />
                        <div className="row grid-col-4 text-center"><div className="team-colomn col-lg-4 col-md-6 scol-sm-6" ></div>
                            <div className="team-colomn col-lg-4 col-md-6 scol-sm-6" >
                                <div className="team-main-6">
                                    <div className="right-team-9">
                                        <a href="feature.jsp"><img className="img-responsive" src={more} alt=" " />
                                        </a>
                                        <h6><a href="feature.jsp" className="title-team-32">Explore More Features</a></h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}
