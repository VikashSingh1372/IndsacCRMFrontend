import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import telcom from "../Images/telcom.png";
import tel1 from "../Images/tel1.jpg";
import tel2 from "../Images/tel2.png";
import tel3 from "../Images/tel3.png";
import tel4 from "../Images/tel4.jpg";
import tel5 from "../Images/tel5.jpg";
import tel7 from "../Images/tel7.png";
import tel8 from "../Images/tel8.png";
import tel9 from "../Images/tel9.png";
import tel10 from "../Images/tel10.png";



export default function Telecommunication() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="The telecommunication industry consists of companies that make communication possible worldwide through mobile phones, the internet, cable, or wirelessly" />
      <meta property="og:title" content="Telecommunication Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Telecommunication.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/telcom.png" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/telcom.png" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="The telecommunication industry consists of companies that make communication possible worldwide through mobile phones, the internet, cable, or wirelessly" />
      <meta property="og:locale" content="en_US" />
      <title>Telecommunication Industry | Telecommunication :: indsaccrm.com</title>

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":" Telecommunication Industry",
              "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Telecommunication.jsp"}
            </script> */}

      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><a href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li className="active">Telecommunication Industry</li>
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
                <img src={telcom} alt="product" className="img-responsive "/>
              </div>
              <div className="cwp4-text col-xl-6">
                <h4> Telecommunication Industry</h4>
                <p className="para">The telecommunication industry consists of companies that make communication possible worldwide through mobile phones, the internet, cable, or wirelessly. It allows people to communicate using words, audio, or video from any part of the world to any part of the world.
                </p>
                <div className="jst-two-coloums mt-4">
                  <div className="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p className="para">The leading companies in the telecommunication industry are satellite companies, internet service providers, wireless operators.</p>
                  </div>
                  <div className="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p className="para">The telecommunication industry includes various sub-sectors such as wireless
                      communication, ad-hoc network, mobile ad-hoc network, domestic telecommunication services, processing products, and systems. Mobile Ad-hoc network is the fastest growing sector in the telecommunication industry. </p>
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
              <h3>INDSAC-CRM for Telecom Industry</h3>
              <p className="para">CRM in the telecom industry can serve as a powerful tool to increase sales and improve customer engagement.
                CRM software systems developed by our team for telecommunications companies with competitive ability by supplying the tools to identify and withhold profitable customers.
              </p><br/>
                <p className="para">The power of INDSAC-CRM for Telecoms lies in its ability to make life easier for users. CRM for Telecoms is
                  a user-friendly system dedicated to helping customer service representatives build unique and personalized customer
                  relations. Navigating in data is streamlined for rapid and logical access. The telecom industry is spreading fast!
                  Innovations are being discussed every day. INDSAC-CRM brings innovations to help the telecom industry.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-features-4">
        <div className="features4-block">
          <div className="container">
            <div className="main-titles-head text-center">
              <h3 className="header-name"> INDSAC-CRM solution for the Telecommunication industry  </h3>
            </div>
            <div className="features-effect row text-center">

              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                <div className="back-color">
                  <a href="contactmanagement.jsp"><img className="img-responsive" src={tel1} alt=" "/></a>
                  <h4><a href="contactmanagement.jsp" className="title-head">Handle customer interactions comprehensively</a></h4>
                  <p className="para">Use one single tool to manage business processes such as task management, lead management, contact management, etc.</p><br/>
                </div>
              </div>
              <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <a href="CompAnalysis.jsp"><img className="img-responsive" src={tel2} alt=" "/></a>
                  <h4><a href="CompAnalysis.jsp" className="title-head">Analyze Your Competitors</a></h4>
                  <p className="para"> The telecom industry is extremely competitive. The competitive analysis provides you with complete information like brand equity, distribution channels, post-purchase service, etc. </p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <a href="salesforcasting.jsp"><img className="img-responsive" src={tel3} alt=" "/></a>
                  <h4><a href="salesforcasting.jsp" className="title-head">Sales forecasting</a></h4>
                  <p className="para">A CRM provides a telecom company a future overview by analyzing the historical data and performance of the company in previous years so,
                    the telecom company to prepare for future tasks.</p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <a href="Risk.jsp"><img className="img-responsive" src={tel4} alt=" "/></a>
                  <h4><a href="Risk.jsp" className="title-head">Minimizing the Risk</a></h4>
                  <p className="para">The managers can benefit from this feature and they can have a look at all the interactions between a customer and their employee to rectify any problem the moment it occurs.</p>
                </div>
              </div>
              <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <a href="Survey.jsp"><img className="img-responsive" src={tel5} alt=" "/></a>
                  <h4><a href="Survey.jsp" className="title-head"> Instant Feedback</a></h4>
                  <p className="para">A CRM provides the sales manager a chance to track and analyze the individual performance of every sales individual. An instant feedback function improves their performance.</p><br/>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                <div className="back-color">
                  <a href="Docmangement.jsp"><img className="img-responsive" src={tel7} alt=" "/></a>
                  <h4><a href="Docmangement.jsp" className="title-head">Streamline document handling </a></h4>
                  <p className="para">By using CRM ready product produces a complete and fully consolidated set of functions to handle all types of documents. This includes controlling customer contracts, bills, collecting letters. </p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <a href="workflowmanagement.jsp"><img className="img-responsive" src={tel8} alt=" "/></a>
                  <h4><a href="workflowmanagement.jsp" className="title-head">Workflow management</a></h4>
                  <p className="para">CRM incorporates a workflow management engine to assure that promises to customers are kept, avoiding errors and customer complaints down the line.
                    It handles critical business methods including order management, sales management.</p><br/>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                <div className="back-color">
                  <a href="invoicemanagement.jsp"><img className="img-responsive" src={tel9} alt=" "/></a>
                  <h4><a href="invoicemanagement.jsp" className="title-head"/> Billing System </h4>
                  <p className="para">Make billing information easy to access and transform. It allows to observe customer histories, check out invoices and
                    accepts payments, makes credit advice. </p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                <div className="back-color">
                  <a href="ExpandBusi.jsp"><img className="img-responsive" src={tel10} alt=" "/></a>
                  <h4><a href="ExpandBusi.jsp" className="title-head"> Expand Business</a></h4>
                  <p className="para"> It helps employees cultivate leads from seminars, conferences, trade shows, and webinars.
                    It helps generate leads from email lists and website visitors. It allows managers to forward those leads to salespeople so that follow-up can be done immediately.</p><br/><br/>
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
