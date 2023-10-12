import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import comgif from "../Images/comgif.gif";
import sg from "../Images/sg.png";
import ic from "../Images/ic.jpg";
import rc1 from "../Images/rc1.png";
import ind from "../Images/ind.jpeg";
import cst from "../Images/cst.jpg";
import i5 from "../Images/i5.jpeg";
import { Link } from 'react-router-dom';

export default function Computer() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Computer Industry has taken over almost every other industry. Computer industry or also known as Information Technology (IT) Industry.It includes businesses of computer hardware, developing and maintaining computer software, and computer networking" />
      <meta property="og:title" content="Computer Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/computer" />
      <meta property="og:image" content="https://www.indsaccrm.com/static/media/comgif.gif" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/comgif.gif" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="Computer Industry has taken over almost every other industry. Computer industry or also known as Information Technology (IT) Industry.It includes businesses of computer hardware, developing and maintaining computer software, and computer networking" />
      <meta property="og:locale" content="en_US" />
      <title>Computer Industry | Industry :: indsaccrm.com</title>

      <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Computer Industry",
      "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/computer"`}`
      </script>

      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
              <li className="active">Computer Industry</li>
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
                <img src={comgif} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>Computer Industry</h4>
                <p className="para"> Computer Industry has taken over almost every other industry. Computer industry or also known as Information Technology (IT) Industry.
                </p>
                <div className="jst-two-coloums mt-4">
                  <div className="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p className="para">It includes businesses of computer hardware, developing and maintaining computer software, and computer networking. One major area which has been growing proliferatively is the service sector.</p>
                  </div>
                  <div className="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p className="para">The service sector has gone online in almost every sector such as health, education, retail, bank, beauty. There are hundreds of websites and apps for every single service.</p>
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
              <h3>What is CRM for IT Industry?</h3>
              <p className="para">CRM software keeps getting attention because it enables businesses to stay updated with the needs of customers, which are constantly evolving. Rapid progress in the IT sector has especially enhanced the need for IT companies to adopt CRM software. </p><br />

              <p className="para">CRM enables businesses to build relations with customers and increase acquisition, retention, loyalty, and
                profitability. But INDSAC-CRM tools do much more. They allow IT companies to improve operational efficiency and substantially reduce the time spent in generating reports for internal purposes and clients. CRM system stores and analyzes massive amounts of customer data and provides insights into customer behavior and how a company can influence it.</p>
            </div>
            <br /> <br />
            <div className="left-text">
              <h3> INDSAC-CRM Benefit For IT Companies</h3>
            </div>
            <div className="row about-about">
              <div className="col-lg-4 col-md-6">
                <div className="about-grids">

                  <h4>Stable Growth </h4>
                  <Link to="/stablegrowth"><img className="img-responsive" src={sg} alt=" " /></Link>
                  <p className="para">INDSAC-CRM tool helps in growing the company scientifically and sustainably in the national and international landscape.</p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Improved Communication </h4>
                  <Link to="/improvedcommunication"><img className="img-responsive" src={ic} alt=" " /></Link><br />
                  <p className="para"> Customers, partners, employees, and other stakeholders communicate in clearer and faster ways with each other.</p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Resource management </h4>
                  <Link to="/resources"><img className="img-responsive" src={rc1} alt=" " /></Link>
                  <p className="para">  Depending on the current and future market trends and the company's goals, CRM software can allocate resources and plan budgets accordingly.</p>
                  <div className="mt-3 about-list">

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

            <div className="row about-about">
              <div className="col-lg-4 col-md-6">
                <div className="about-grids">

                  <h4>Feedback and Referrals</h4>
                  <Link to="/survey"><img className="img-responsive" src={ind} alt=" " /></Link>
                  <p className="para"> Collect customer feedback to improve the overall experience, and generate referrals to convert into customers and increase sales for your dealership. </p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Customer Support Tool </h4>
                  <Link to="/contact_us"><img className="img-responsive" src={cst} alt=" " /></Link>
                  <p className="para">Get a helpdesk tool to provide top-notch support and service to your customers. Make it easier for them to know the status of their queries.</p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Intelligent Dashboard</h4>
                  <Link to="/dashboardandreporting"><img className="img-responsive" src={i5} alt=" " /></Link>
                  <p className="para">Establish and track sales and operations goals, and monitor individual performance and contributions to business goals.</p><br /><br />
                  <div className="mt-3 about-list">

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

              <h3> Services of INDSAC-CRM  for Your IT Industry</h3>
              <p className="para">CRM system is the one that can play a key role to open up the doors of business growth and
                development that you are working on. The expectation of rapid growth is true as you can expect this when you
                have CRM software in your working activity. The IT industry needs to stop investing bundles of money on any
                vintage software because CRM can help to improve operational efficiency, save countless hours on working on
                reports for the clients, and much more. INDSAC-CRM software has a superior power to hike up retention, loyalty,
                acquisitions, etc. </p>
              <Link to="/customer_services" className="btn action-button mt-lg-5 mt-4 ">Read more</Link>


            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
