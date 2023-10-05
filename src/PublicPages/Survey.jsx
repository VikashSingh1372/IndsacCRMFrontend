import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import lappy from "../Images/lappy.gif";
import survey3 from "../Images/survey3.png";
import survay2 from "../Images/survay2.gif";
import { Link } from 'react-router-dom';


export default function Survey() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Customer satisfaction surveys give you the insights you need to make better decisions" />
            <meta property="og:title" content=" Instant Customer Surveys" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/Survey.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/survey3.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/survey3.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Customer satisfaction surveys give you the insights you need to make better decisions" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":" Instant Customer Surveys",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Survey.jsp"}
    </script> */}

            <title> Instant Customer Surveys | Best CRM Software | Indsac Crm :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/salesautomation">Sales Automation <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Instant Customer Surveys</li>
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
                                Instant Customer Surveys and Feedback
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={survey3} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <br /><br /><br />
                                <p className="para"> Connect with your customers to better understand their needs. </p><br />
                                <p className="para">Customer satisfaction surveys give you the insights you need to make better decisions.</p><br />
                                <p className="para"> A consumer survey will help you understand your customer's likes, dislikes, and where you need to make improvements. </p>
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
                                <h4>INDSAC Surveys and Feedback Management</h4>
                                <p className="para"> Create easy-to-use surveys by using a simple editor to collect feedback and information
                                    from your customers. With Feedback Management capabilities, you can deliver relevant and personalized
                                    experiences to your customers. Feedback Management simplifies your feedback management process and maps the
                                    feedback to existing customer records at every stage of the customer lifecycle.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={survay2} alt="product" className="img-responsive " />
                            </div>
                        </div>
                        <br /> <br />


                        <div className="container">

                            <div className="cwp4-two row">

                                <div className="cwp4-text col-xl-6">
                                    <h4> The benefit of Customer Feedback Surveys</h4>
                                    <p className="para"> 1. They give every member of your audience an equal say.<br /> <br />
                                        2. It allows them to be anonymous, and therefore more truthful with their opinions.<br /> <br />
                                        3. It can provide you with a clear, statistically significant analysis.<br /> <br />
                                        4. You can target a specific audience, based on geography, demographics, and other filters.<br /> <br />
                                        5. You can direct the conversation to avenues you prefer to know more about, avoiding the distractions
                                        that otherwise abound.<br /> <br />
                                    </p>
                                </div>
                                <div className="col-xl-6 cwp4-image ">
                                    <img src={lappy} alt="product" className="img-responsive " />
                                </div>
                            </div>
                        </div><br /> <br />

                        <div className="text-center">
                            <h3 className="header-name">Instant Feedback</h3>
                        </div><br />
                        <p className="para">An instant customer feedback system is a key function of understanding what your customers
                            think and feel, as well as understanding their interactions with your site and product.
                            Customer feedback and reviews are more important than ever in today's ever-changing digital world.
                            Businesses of all sizes can benefit from customer feedback, but growing ones especially. </p>
                        <br /><br /><br />
                        <div className="cwp4-two row">

                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name"> Accurate Results </h3> <br />
                                <p className="para">With Feedback Management, customers don't have to leave the chat window to provide feedback.
                                    Post-Chat Surveys reduce the need for the survey taker to recall information, ensuring that you're gathering accurate feedback.</p>
                            </div>

                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name">  Capture Feedback </h3> <br />
                                <p className="para">Customer sends their feedback via web link or email, then efficiently share insights with
                                    your teams so you can deepen customer relationships and improve retention.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
