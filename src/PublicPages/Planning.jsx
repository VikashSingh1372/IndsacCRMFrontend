import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import planning from "../Images/planning.jpg";


export default function Planning() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="CRM Planning is a term used to describe all activities, strategies, and tools used by a company to manage the way it interacts with its customer base" />
            <meta property="og:title" content="CRM Planning" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/planning" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/planning.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/planning.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="CRM Planning is a term used to describe all activities, strategies, and tools used by a company to manage the way it interacts with its customer base" />
            <meta property="og:locale" content="en_US" />
            <title>CRM Planning | Planning :: indsaccrm.com</title>

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"CRM Planning",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/planning"`}`
            </script>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active"> Planning </li>
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
                                <img src={planning} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>CRM Planning</h4>
                                <p className="para">CRM Planning is a term used to describe all activities, strategies, and tools used by a company to
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
            <section className="w3l-recent-work-hobbies">
                <div className="recent-work ">
                    <div className="container">
                        <div className="left-text">
                            <h3>Key Elements Of CRM Planning</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para"><h4>1. Technology </h4>We used the latest technology for developed CRM for our clients.
                            Data is collected from the entire customer lifecycle, including marketing and sales platforms, digital commerce,
                            and customer service interactions.  </p>
                        <br />      <br />
                        <p className="para"><h4>2. Strategy </h4>
                            Our CRM strategy should be based on clear goals and objectives. It should also align with the customer company's
                            positioning, culture, vision, and values.  </p>
                        <br /><br />
                        <p className="para"><h4>3. Processes </h4>
                            INDSAC-CRM strategy to work, all internal and external processes should be customer-centric.
                            We provide the best possible customer experience. </p>
                        <br /> <br />
                        <p className="para"><h4>4. People</h4>
                            Developers focused on customer engagement. </p>
                        <br /><br />
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}
