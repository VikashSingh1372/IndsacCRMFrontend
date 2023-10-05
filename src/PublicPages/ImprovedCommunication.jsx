import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import impcomm from "../Images/impcomm.gif";
import impcomm2 from "../Images/impcomm2.gif";
import { Link } from 'react-router-dom';

export default function ImprovedCommunication() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Good communication delivers consistent brand messaging and support across all channels by understanding customer pain points" />
            <meta property="og:title" content="Communication" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/navigate/impcomm.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/impcomm.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/impcomm.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Good communication delivers consistent brand messaging and support across all channels by understanding customer pain points" />
            <meta property="og:locale" content="en_US" />

            {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Communication",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/impcomm.jsp"}
        </script> */}

            <title>Communication |Computer Industry :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/Computer">Computer Industry <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Improved Communication</li>
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
                                <img src={impcomm} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Improved Communication</h4>
                                <p className="para">Good communication delivers consistent brand messaging and support across all channels
                                    by understanding customer pain points. It also focuses on strengthening customer relationships.
                                    Having a strong communication strategy in place helps businesses to acquire and retain customers.</p>
                                <div className="jst-two-coloums mt-4">
                                    <div className="icon-text">
                                        <h5> <a href="#" ></a>
                                        </h5>
                                        <p className="para">Both business-to-business (B2B) and business-to-consumer (B2C) businesses use communication skills
                                            to design and deliver critical business communications that are highly personalized as well as
                                            interactive.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-recent-work-hobbies">
                <div className="recent-work ">
                    <div className="container">
                        <div className="left-text">
                            <h3>How Communication Grow Business</h3>
                        </div>
                        <h4>Faster customer support </h4>
                        <p className="para"> Effective communication with customers helps to learn the client's problem accurately and enables you to deliver faster support.</p>
                        <br /><br />

                        <h4>Level up conversions </h4>
                        <p className="para"> Assisting customers with the right answers in real-time helps to close the sales faster and increase sales conversions.
                        </p>
                        <br /><br />
                        <h4>Boost customer loyalty</h4>
                        <p className="para"> Having personalized conversations with customers with the help of visual engagement tools builds trust and cultivates loyalty with your customers.</p>

                    </div>
                </div>
            </section >

            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">

                        <div className="cwp4-two row">

                            <div className="cwp4-text col-xl-6">
                                <h4>How to improve customer service communication </h4>
                                <p className="para"> 1. Use visual engagement tools for real-time assistance <br /><br />
                                    2. Build omnichannel customer communication strategy<br /><br />
                                    3. Improve the first customer experience <br /><br />
                                    4. Deploy chatbots for automated customer communication<br /><br />
                                    5. Measure your customer communication metrics regularly<br />
                                </p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={impcomm2} alt="product" className="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            <Footer />
        </>
    )
}
