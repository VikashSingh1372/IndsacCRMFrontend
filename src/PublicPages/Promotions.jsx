import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import promotions from "../Images/promotions.jpeg";


export default function Promotions() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="promotions provide a breather to salespeople as it removes some weight off their shoulder and induces prospects to purchase the product" />
            <meta property="og:title" content="Sales Promotions" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/promotions" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/promotions.jpeg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/promotions.jpeg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="promotions provide a breather to salespeople as it removes some weight off their shoulder and induces prospects to purchase the product" />
            <meta property="og:locale" content="en_US" />
            <title>Sales Promotions | Promotions :: indsaccrm.com</title>

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Sales Promotions",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/promotions"`}`
            </script>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active"> Promotions </li>
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
                                <img src={promotions} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>CRM Promotions</h4>
                                <p className="para">Promotion is any form of <a href="https://www.indsaccrm.com/impcomm.jsp">communication</a> a business or organization uses to inform,
                                    persuade, or remind people about its products and improve its public image. Product Promotion :
                                    <br /><br /> 1) explains the major features and benefits of its products (especially in relation to
                                    competitors), <br />2) tells where the products are sold, <br />3) advertises sales on those products,
                                    <br />4) answers customer questions, and <br />5) introduces new products.
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
                            <h3>What are Sales Promotions?</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para"> <a href="https://www.indsaccrm.com/sales.jsp">Sales</a> promotions provide a breather to salespeople as it removes some weight off their shoulder and induce prospects to purchase the product.
                            In many ways, sales promotions help your salespeople get more  <a href="https://www.indsaccrm.com/lead.jsp">leads</a> and ultimately more customers.
                            If you have a product that is new in the market or which is not receiving a lot of attention, then you can promote this product to customers via sales promotions.
                            Sales promotion is the process of persuading a potential customer to buy the product,
                            It is designed to be used as a short-term tactic to boost sales-affecting long-term customer loyalty.
                        </p>
                        <br />
                        <div className="left-text">
                            <h3> Types of Sales Promotions</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para"> A) Consumer sales promotions :<br />
                            Any sales promotion activity when you keep the end consumer in mind is known as consumer sales promotion.<br /><br />

                            B) Trade Sales promotions : <br />
                            If your promotional activities are focused on dealers, distributors, or agents, then it is known as trade promotions.
                            <br /></p>
                        <br /><br />
                        <div className="left-text">
                            <h3>There are some examples of sales promotions</h3>
                            <p className="para">    </p>
                        </div>
                        <p className="para"> 1-Money off coupons(Customer sales promotions):
                            Customers receive coupons, or cut coupons out of newspapers or the packaging of a product that enables them to buy the product next time at a reduced price.<br /><br />

                            2-Discount rates (Trade/Customer sales promotions):
                            like a money-off decrease.<br /><br />

                            3-Free gifts (Customer sales promotions):
                            A free product when buying another product.<br /><br />

                            4-Free trial (Customer sales promotions):
                            You have come across several software or online programs which offer a free trial to you before you purchase the product.<br />
                        </p>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
