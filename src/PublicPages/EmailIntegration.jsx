import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import email1 from "../Images/email1.png";
import indsacemail2 from "../Images/indsac-email2.gif";
import indsacemail3 from "../Images/indsac-email3.gif";
import indsacemail4 from "../Images/indsac-email4.gif";
import email10 from "../Images/email10.jpg";
import indsacemail5 from "../Images/indsac-email5.gif";
import email9 from "../Images/email9.jpg";


export default function EmailIntegration() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Email integration in your CRM lets you automatically capture your messages to and from your contacts to your account. INDSAC-CRM automatically associates all e-mails with their respective customer records" />
            <meta property="og:title" content="E-Mail Integration" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/emailintegration" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/email1.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/email1.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Email integration in your CRM lets you automatically capture your messages to and from your contacts to your account. INDSAC-CRM automatically associates all e-mails with their respective customer records" />
            <meta property="og:locale" content="en_US" />
            <title>E-Mail Integration | Best CRM Software | Indsac Crm :: indsaccrm.com</title>

            <script type="application/ld+json">
                `{`"@context":"https://schema.org","@type":"WebPage","name":"E-Mail Integration ",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/emailintegration"`}`
            </script>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">E-Mail Integration</li>
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
                                E-Mail Integration
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={email1} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <p className="para"> Email integration in your CRM lets you automatically capture your messages to and from your contacts to your account.  </p><br />
                                <p className="para">  INDSAC-CRM automatically associates all e-mails with their respective customer records, so you'll never have to comb through a mountain of messages to send your next round of follow-ups.</p><br />
                                <p className="para">These tools offer you a wide variety of additional ways to engage with your customers and subscribers at different points in the campaign...</p>
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
                                <h4>Benefits of E-Mail Integration</h4>
                                <p className="para"> 1. CRM makes the outreach highly appealing due to collecting prospects personal data, creating a holistic view of a prospect, and crafting e-mails based on it. <br /><br />
                                    2. CRM has pre-designed email templates, which allow customers to create visually appealing branded messages.<br /><br />
                                    3. Saves any documents attached to an email to the company account record. <br /><br />
                                    4. Synchronize in real-time so your team will always see the latest correspondence.<br /><br />
                                    5. Automatically create new customer support cases from incoming emails.<br /><br />
                                    6. Automatically capture e-mails to and from your CRM contacts to your activities timeline.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsacemail2} alt="product" className="img-responsive " />
                            </div>
                        </div>
                    </div><br /><br /><br />
                    <div className="main-titles-head text-center">

                        <h3 className="header-name">
                            INDSAC-CRM email integration for complete transparency<br /> of every interaction across your team.
                        </h3>
                    </div>
                </div>
            </section>

            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name">Automatic Email Capture</h3> <br />
                                <p className="para"> Our email integration creates a history of every interaction with your prospects and customers.
                                    Your system automatically captures your incoming and outgoing e-mails and stores them in your account activities.
                                    <br />The -emails are stored in chronological order, with a summary grid letting you select what information to display and store any attached documents.
                                </p>
                            </div>

                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsacemail3} alt="product" className="img-responsive " />
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
                                <img src={indsacemail4} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name">Email Attachments </h3> <br />
                                <p className="para">The CRM will store any attached documents to the email record.
                                    This might be your proposal documents, meeting minutes, quotations, or images. The volume of documents stored is determined by your CRM price plan.</p>
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
                                <h3 className="header-name">Real-time Sync</h3> <br />
                                <p className="para"> Email integration works across the email accounts of all your CRM users and all your CRM contacts.
                                    As it synchronizes in real-time, you'll be able to see all the messages to and from your customers, along with other activities, whether you're in the office or out on the road.
                                </p>
                            </div>

                            <div className="col-xl-6 cwp4-image ">
                                <img src={email10} alt="product" className="img-responsive " />
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
                                <img src={indsacemail5} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h3 className="header-name">Email status updates </h3> <br />
                                <p className="para">INDSAC-CRM informs you when your e-mails were delivered if they've been opened, and when
                                    they were read. You can also use advanced filters to identify leads who haven't responded within a
                                    certain time frame as well as leads that are responding well and are ready to close. This analysis
                                    allows you to strategically plan your follow-ups for maximum benefit.</p>
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
                                <h3 className="header-name">Email Templates</h3> <br />
                                <p className="para"> Templates are a quick, easy way to free yourself from the tedium of drafting e-mails. Design a template to suit your business, or choose from our gallery of handpicked templates and customize them with text, images, tables, and columns.
                                    You can also get reports to find out which email templates had the best open rates and which ones failed to click.
                                </p>
                            </div>

                            <div className="col-xl-6 cwp4-image ">
                                <img src={email9} alt="product" className="img-responsive " />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

