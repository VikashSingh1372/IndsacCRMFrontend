import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import indsacvision from "../Images/indsac-vision.jpg";
import indsaccrm1 from "../Images/indsac-crm1.jpg";


export default function OurStory() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="About Indsac CRM" />
            <meta property="og:title" content="Our Story" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/ourstory.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-crm1.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-crm1.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="About Indsac CRM" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Our Story",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/ourstory.jsp"}
    </script> */}

            <title>Our Story | Invoice Management System :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active"> Our Story </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}

            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsaccrm1} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <h4>About CRM </h4>
                                <p className="para">Customer relationship management software is a special system with one primary purpose? improving relationships with
                                    clients by providing businesses with smart tools to effectively develop a successful strategy.
                                    CRM software can advance crucial business operations, such as marketing, service and
                                    sales activities, to improve customer experience and loyalty from initial contact to repeat purchases.
                                </p><br />
                                <p className="para">If your main concern is sales, you can make use of performance tracking for individual sales agents.
                                    The CRM software focuses on putting customer needs first and delivering a superior, more personalized customer experience.</p>

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
                                <h4>Our Vision </h4>
                                <p className="para">TO BRING POSITIVE TRANSFORMATION TO EVERY LIFE WE TOUCH </p><br />
                                <p className="para">To be recognized as the industry leader driving modernization in IT services in India
                                    and the developing world and to be the centre of modern Research and Development in IT sector.
                                </p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsacvision} alt="product" className="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-recent-work-hobbies">
                <div className="recent-work ">
                    <div className="container">
                        <div className="left-text">
                            <h3> How CRM is useful for a company?</h3>
                            <p className="para">Customer relationship management systems can be easily customized to meet the specifications needed of any business type and size.<br /><br />
                                1. B2B: From managing an account's contact information to staying up to date with business deals, payments, and reports, B2B companies do best with a sales CRM in place.<br /><br />
                                2. B2C: B2C companies have shorter customer life cycles, and they typically require a solution that is more direct and less time-consuming.<br /><br />
                                3. SMBs: SMBs are not small and medium businesses but smart and modern businesses. There's no truth to the common mistake that cloud CRM is too expensive and complicated for SMBs.<br /><br />
                                4. Enterprises: Advanced CRM features like workflow management, advanced analytics, sales, and marketing automation,  can help reduce the time salespeople spent on mundane tasks.</p><br /><br />

                            <h3> Benefits of CRM </h3>
                            <p className="para"> 1. A CRM system manages all your contacts and aggregates lead and customer information to build profiles of everyone you interact with.<br /><br />
                                2. Streamlining and improving the sales process, building a sales pipeline, automating tasks, and analyzing your sales data will inevitably lead to one outcome increased sales and sales productivity.<br /><br />
                                3. Retention and rates are extremely important determiners for a company?s success; customer churn is a major obstacle to business growth.<br /><br />
                                4. Analytical CRM tool make your data available, intelligible, and relevant to your business needs. All your enough of sales data, finance data and marketing data flow into CRM to become visible metrics.<br /><br />
                                5. Having all your major day-to-day business functions in one place makes for better workflow, an easier association between team members, and better project management.<br /><br />
                            </p><br />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
