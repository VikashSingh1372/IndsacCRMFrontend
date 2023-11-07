import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import sg1 from "../Images/sg1.gif";
import sg from "../Images/sg.gif";
import { Link } from 'react-router-dom';
export default function StableGrowth() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="CRM is key to your organization's growth, so you need to manage them as efficiently and effectively as possible" />
            <meta property="og:title" content="Business Stable Growth" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/stablegrowth" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/sg.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/sg.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="CRM is key to your organization's growth, so you need to manage them as efficiently and effectively as possible" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Business Stable Growth",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/stablegrowth"`}`
            </script>

            <title>Business Stable Growth |Computer Industry :: indsaccrm.com</title>
            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/Computer">Computer Industry <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Stable Growth</li>
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
                                <img src={sg} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Business Stable Growth</h4>
                                <p className="para">CRM is key to your organization's growth, so you need to manage them as efficiently and
                                    effectively as possible. INDSAC-CRM helps you be more connected to customers, improves business
                                    performance, and grows your company bigger and faster than ever.</p>
                                <div className="jst-two-coloums mt-4">
                                    <div className="icon-text">
                                        <h5> <a href="#" ></a>
                                        </h5>
                                        <p className="para">Building business relationships in an extensive competitive market are not simple.
                                            The rapid shift and continuous changes in technological aspects allow the organizations to meet
                                            the growing scenarios.</p>
                                    </div>
                                    <div className="icon-text mt-lx-3 pt-lx-1">
                                        <h5 ><a href="#" ></a> </h5>
                                        <p className="para"> Businesses need sales and to boost sales, our technicians provide you an effective environment to automate,
                                            engage, and create a platform to connect your needs.</p>
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
                            <h3>Business Growth Factors</h3>
                        </div>
                        <h4>Find the right customers</h4>
                        <p className="para"> Most businesses spend time and resources to generate leads and reps do not find the right opportunities to
                            convert them into sales. Without a CRM system, it is reported that marketing leads are not converted into sales as per
                            the survey. If you're a small or a big enterprise whose target is to grow through sales, then you can automate email
                            using CRM software. The marketing teams, as well as sales teams, can view the leads to create the most engaging
                            communication aspects thereby converting customers into sales which would help you to make better decisions.</p>
                        <br /><br />

                        <h4>Build more sustainable relationships</h4>
                        <p className="para"> The success factors for any organization rely on building sustainable relationships. Our team understands customers, what they want, and expectations that help an organization build a business on trust and understanding.</p>


                        <br /><br />

                        <h4> Reduce the cost of sales</h4>
                        <p className="para"> Selling a business solution to an existing customer is more than 70%.
                            Though new customers are crucial for business growth, it's not easy. But here's we
                            gain opportunities by providing new business solutions to the existing customers.
                            The greater the renewal opportunities created, the higher would be the sales growth.</p>
                        <br /><br />

                        <h4> Increase employee productivity</h4>
                        <p className="para"> Adopting the right technology frees up your teams from process-heavy tasks and gives them more time to
                            connect with customers. Manual operations like hunting for contact information or entering data can be automated or
                            eliminated from customer-related processes. Automation across sales, service and marketing will free your employees so
                            they can spend more time talking to prospective customers and strengthening relationships with existing ones, moving
                            the needle for your business.</p>

                    </div>
                </div>

            </section >

            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">

                        <div className="cwp4-two row">

                            <div className="cwp4-text col-xl-6">
                                <h4>INDSAC-CRM can help you improve business performance </h4>
                                <p className="para"> 1. Improving sales efficiency <br />
                                    2. Boosting sales effectiveness<br />
                                    3. Increasing upsell and cross-sell opportunities <br />
                                    4. Uncovering referral business <br />
                                    5. Reducing time to close<br />
                                </p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={sg1} alt="product" className="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
