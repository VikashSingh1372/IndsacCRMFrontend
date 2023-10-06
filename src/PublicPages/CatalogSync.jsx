import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import indsaccatalogsync from "../Images/indsac-catalog-sync.gif"

export default function CatalogSync() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="CRM Planning is a term used to describe all activities, strategies, and tools used by a company to manage the way it interacts with its customer base" />
            <meta property="og:title" content="Catalog Sync" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/ContSync.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-catalog-sync.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-catalog-sync.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="CRM Planning is a term used to describe all activities, strategies, and tools used by a company to manage the way it interacts with its customer base" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Catalog Sync",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/ContSync.jsp"}
            </script> */}

            <title>Catalog Sync | Catalog Sync :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/services">services <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/salesautomation">Sales Automation<span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active"> Catalog Sync </li>
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
                                <img src={indsaccatalogsync} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4>Catalog Sync</h4>
                                <p class="para">CRM Planning is a term used to describe all activities, strategies, and tools used by a company to
                                    manage the way it interacts with its customer base.<br /> <br />The right CRM strategy can help you build solid
                                    relationships with your customers and increase customer loyalty and retention.
                                    <br />  <br />However, for it to work, your strategy must align with your sales and marketing plan and your
                                    customer service department.
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
                            <h3>Key Elements Of CRM Planning</h3>
                            <p class="para">    </p>
                        </div>
                        <p class="para"><h4>1. Technology </h4>We used the latest technology for developed CRM for our clients. Data is collected
                            from the entire customer lifecycle, including marketing and sales platforms, digital commerce, and customer service
                            interactions. </p>
                        <br /> <br />
                        <p class="para"><h4>2. Strategy </h4>
                            Our CRM strategy should be based on clear goals and objectives.
                            It should also align with the customer company's positioning, culture, vision, and values. </p>
                        <br /><br />
                        <p class="para"><h4>3. Processes </h4>
                            INDSAC-CRM strategy to work, all internal and external processes should be customer-centric. We provide the best
                            possible customer experience. </p>
                        <br /> <br />
                        <p class="para"><h4>4. People</h4>
                            Developers focused on customer engagement.
                        </p><br /><br />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
