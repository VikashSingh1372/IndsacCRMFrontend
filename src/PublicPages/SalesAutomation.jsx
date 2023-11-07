import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import sagif from "../Images/sagif.gif";
import sa1 from "../Images/sa1.png";
import sa3 from "../Images/sa3.jpg";
import sa6 from "../Images/sa6.png";
import sa5 from "../Images/sa5.png";
import sa8 from "../Images/sa8.png";
import sa4 from "../Images/sa4.png";
import indsacsalesautomation from "../Images/indsac-sales-automation.gif";
import { Link } from 'react-router-dom';



export default function SalesAutomation() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Sales Automation is a powerful tool to increase your sales and revenue, boost employee productivity and eliminate redundancy from your business processes" />
            <meta property="og:title" content="Sales Automation" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/salesautomation" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/sagif.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/sagif.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Sales Automation is a powerful tool to increase your sales and revenue, boost employee productivity and eliminate redundancy from your business processes" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Sales Automation",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/salesautomation"`}`
        </script>

            <title>Sales Automation | Best CRM Software | Indsac Crm :: indsaccrm.com</title>
            <Navbar />

            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Sales Automation</li>
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
                                Sales Automation
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={sagif} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <p className="para"> Sales Automation is a powerful tool to increase your sales and revenue, boost employee productivity and eliminate redundancy from your business
                                    processes. It employs the latest technologies such as Artificial Intelligence, which offer you a deeper penetration into the purchasing
                                    intent of your customers.</p><br />
                                <p className="para">Sales Automation is an excellent tool to create customizable workflows automatically, and reduce time spent on manual or repetitive tasks. </p><br />
                                <p className="para"> An interesting and crucial benefit offered by Salesforce automation tools is customer and market intelligence that comes with sterling reports and analytics related to your customers.</p>
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
                                    <h4>Benefits of using sales automation </h4>
                                    <p className="para"> 1. Salesforce automation plays a crucial role in motivating your sales team, keeping
                                        them informed in terms of the entire supply chain data, and enabling them to make smarter decisions. <br /><br />
                                        2. Salesforce automation offers seamless integration across devices without compromising organizational security.<br /><br />
                                        3. Managers can get actionable insights into real-time data and act accordingly. <br /><br />
                                        4. It improves overall productivity, keeps the motivation high, boosts range selling, and increases market coverage, all the while
                                        empowering you to make smart sales teams. <br /><br />
                                    </p>
                                </div>
                                <div className="col-xl-6 cwp4-image ">
                                    <img src={indsacsalesautomation} alt="product" className="img-responsive " />
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
                                Focus on the right Sales Automation for Faster Growth
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/digitalmobile"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/digitalmobile" className="title-head"> Digital Ordering</Link></h4>
                                    <p className="para">They have access to real-time stock and delivery data that enables them to make better sales pitches. </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/productivityanalysis"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/productivityanalysis" className="title-head">Measure Productivity</Link></h4>
                                    <p className="para">These metrics are accessible to the sales reps. Hence, they can self-assess themselves and improve their performance gradually.</p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/salesgoals"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/salesgoals" className="title-head"> Sales Goals</Link></h4><br />
                                    <p className="para">Using this feature you can set periodic targets for the sales reps and compare them against their achievements to measure productivity and efficiency. </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/survey"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/survey" className="title-head"> Instant Customer Surveys </Link></h4><br />
                                    <p className="para">This helps you understand anything and everything wrong with your sales strategies, and revamp them accordingly. </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/catalogsync"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/catalogsync" className="title-head"> Catalog Sync</Link></h4>
                                    <p className="para">Salesforce automation in India allows your sales teams to display a digital product catalog that is continuously synced with the main server in real-time. </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/predictiveAnalystics"><img className="img-responsive" src={sa8} alt=" " /></Link>
                                    <h4><Link to="/predictiveAnalystics" className="title-head"> Predictive Analytics</Link></h4><br />
                                    <p className="para">The predictive analysis allows your sales reps to suggest orders based on the specific point of sale history and enables them to offer
                                        a seamless purchase experience to the distributors.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
