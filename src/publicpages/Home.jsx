import React from "react";
import Navbar from "./Navbar";
import bb22 from "../Images/bb22.jpg";
import marketing from "../Images/marketing.jpg";
import sales from "../Images/sales.jpg";
import inventory from "../Images/inventory.jpg";
import analytics from "../Images/analytics.jpg";
import account from "../Images/account.jpg";
import happyclient from "../Images/happyclient.gif";
import digital1 from "../Images/digital1.gif";
import Footer from "./Footer";




export default function Home() {



  return (
    <>
      {/* // Author: www.indsaccrm.com
        // Author URL: https:www.indsaccrm.com */}

      <link rel="shortcut icon" href="dist/img/u.png" type="image/x-icon" />
      <link rel="canonical" href="https://www.indsaccrm.com" />
      <link rel="apple-touch-icon" href="dist/img/u.png" />
      <link rel="alternate" hreflang="en" href="https://www.indsaccrm.com/" />

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="INDSAC CRM offers you a well-executed customer service strategy that will maximize customer lifetime value " />
      <meta name="Subject" content="CRM" />
      <meta property="og:title" content="Increase Sales,Customer Relationship" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.indsaccrm.com/" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/bb22.jpg" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/bb22.jpg" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="INDSAC CRM offers you a well executed customer service strategy which will maximize customer lifetime value." />
      <meta property="og:locale" content="en_US" />
      <title>Increase Sales,Customer Relationship | indsaccrm.com</title>


      <link rel="stylesheet" href="navigate/assets/css/style-starter.css" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap" rel="stylesheet" />

      <Navbar />

      {/* Common jquery plugin */}
      {/*bootstrap working*/}
      {/* //bootstrap working*/}
      {/* disable body scroll which navbar is in active */}
      {/* disable body scroll which navbar is in active */}
      <div className="w3l-hero-headers-9">
        <section className="slide slide-one">
          <div className="container">
            {/* <div class="row"> */}
            <div className="row">
              <div className="banner-text col-lg-5">
                <h5>Digital Products <br />for Business</h5>
                <p>Increase your Sales, Grow and Retain your customer.</p>
                <form action="login.jsp" name="register" method="post">  <a onclick="document.register.submit()" className="btn logo-button top-margin">Register</a>
                  <input type="hidden" name="type" defaultValue="register" />
                </form>
                <h6 className="para">Try a <strong> Free Demo </strong>with all the features.</h6>
              </div>
              <div className="image-postion col-lg-7">
                <img src={bb22} alt="product" className="img-responsive banner-images" />
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>
      <section className="w3l-call-to-action_9">
        <div className="call-w3">
          <div className="container">
            <div className=" main-cont-wthree-2">
              <div className="left-contect-calls text-center">
                <div className="call-grids-w3 ">
                  <div className="grids-effect-2">
                    <img src={marketing} alt="indsac-marketing" />
                  </div>
                  <div className=" grids-effect-2">
                    <img src={sales} alt="indsac-sales " />
                  </div>
                  <div className="grids-effect-2">
                    <img src={inventory} alt="indsac-inventory" />
                  </div>
                  <div className="grids-effect-2">
                    <img src={account} alt="indsac-account" />
                  </div>
                  <div className="grids-effect-2">
                    <img src={analytics} alt="indsac-analytics" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-teams-15">
        <div className="team-single-main">
          <div className="container">
            <div className=" grid grid-column-2 row">
              <div className="column1 col-lg-6">
                <img src={happyclient} alt="happy" className="img-responsive " />
              </div>
              <div className="column2 col-lg-6">
                <h3 className="team-head">A better business means better client experience</h3>
                <p className="para text">The journey involves understanding the customer requirements. INDSAC CRM offers you a well executed <a href="https://www.indsaccrm.com/navigate/comservice.jsp">customer service</a>
                  strategy which will maximize customer lifetime value. Customer experience impacted customers enthusiasm for being brand advocates.
                  We provide the smooth <a href="https://www.indsaccrm.com/navigate/impcomm.jsp">communication</a> process between your business and customers. Everything you do impacts your
                  customer's perception and their decision to keep coming back.</p>
                <p className="para mt-2 dis-none">
                  We provide you with every touchpoint a customer ever has with your business. By having a measurable indicator
                  of the customer, you can track how your business improves over time and use it to evaluate your success stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-specification-6">
        <div className="specification-layout">
          <div className="container">
            <div className="main-titles-head">
              <h3 className="header-name">We Bring The Best Things For Business
              </h3>
            </div>
            <div className="specification-effect row text-center">
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <span className="fa fa-thumbs-up" aria-hidden="true" />
                  <h4><a href="navigate/Promotions.jsp" className="title-head">Promotions</a></h4>
                  <p className="para">INDSAC CRM provides you with focused <a href="https://www.indsaccrm.com/navigate/Promotions.jsp">promotional</a>  activities which is an excellent way to introduce your product in the market. </p>
                </div>
              </div>
              <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <span className="fa fa-picture-o" aria-hidden="true" />
                  <h4><a href="navigate/crmmarketing.jsp" className="title-head">Social Media</a></h4>
                  <p className="para">With INDSAC CRM get campaigns based on your business goals will create a brand identity and positive brand association </p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <span className="fa fa-pie-chart" aria-hidden="true" />
                  <h4><a href="navigate/360view.jsp" className="title-head">360 Degree View</a></h4>
                  <p className="para">INDSAC <a href="https://www.indsaccrm.com/navigate/360view.jsp">360 degree</a>  customer view strategic approach enabling businesses to offer the best customer experience across all channels</p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <span className="fa fa-mobile" aria-hidden="true" />
                  <h4><a href="navigate/digitalmobile.jsp" className="title-head">Digital &amp; Mobile</a></h4>
                  <p className="para">Utilize the amazing <a href="https://www.indsaccrm.com/navigate/digitalmobile.jsp">technology</a>  where ever you are to benefits your business. View data and receive
                    valuable alerts in mobile.</p>
                </div>
              </div>
              <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <span className="fa fa-bolt" aria-hidden="true" />
                  <h4><a href="navigate/crmmarketing.jsp" className="title-head"> Marketing</a></h4>
                  <p className="para">Works best for you that will determine and pursue your <a href="https://www.indsaccrm.com/navigate/crmmarketing.jsp">business marketing</a> goals. Boost visibility and increase sales while sustaining a profit</p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                <div className="back-color">
                  <span className="fa fa-cubes" aria-hidden="true" />
                  <h4><a href="navigate/Planning.jsp" className="title-head">Planing</a></h4>
                  <p className="para">Get high level overview of your entire business that will develop a better understanding
                    of effective business <a href="https://www.indsaccrm.com/navigate/Planning.jsp">planning</a> process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* grids block 4 */}
      <section className="w3l-grids-7">
        <div className="grids4-block">
          <div className="container">
            <div className="row">
              <div className="column-text col-lg-6">
                <h3 className="team-head">Create Digital Presence</h3>
                <p className="para text"> Digital Presence matters whenever any person searches for your business online. We will make you go
                  digitally.</p>
                <div className="call-grids-w3">
                  <div className="grids-1 grids-effect-2">
                    <h4><a href="navigate/crmanalysis.jsp" className="title-head">Data Analysis</a></h4>
                    <p className="para">Deeper understanding  which, in turn, builds better business relationships.</p>
                  </div>
                  <div className="grids-1 grids-effect-2">
                    <h4><a href="navigate/Analytics.jsp" className="title-head">CRM Analytics</a></h4>
                    <p className="para"> Enable decision-makers to make better and more timely business decisions</p>
                  </div>
                  <div className="grids-1 grids-effect-2">
                    <h4><a href="navigate/digitalmarketing.jsp" className="title-head">Digital Marketing</a></h4>
                    <p className="para">Allows you to find new <a href="https://www.indsaccrm.com/navigate/digitalmarketing.jsp">markets</a>  and trade globally for only a small investment. </p>
                  </div>
                  <div className="grids-1 grids-effect-2">
                    <h4><a href="navigate/crmmarketing.jsp" className="title-head">Social Marketing</a></h4>
                    <p className="para">Increase your business's recognition, traffic, and sales with little to no cost. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={digital1} alt="product" className="img-responsive " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>

  );
}




