import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import erm from "../Images/erm.jpg";

export default function Electronics() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="E-CRM, or Electronic Customer Relationship Management, is an integrated online sales, marketing, and service strategy that is used to identify, attract and retain an organization's customers" />
      <meta property="og:title" content="E-CRM? " />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Electronics.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/erm.jpg" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/erm.jpg" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="E-CRM, or Electronic Customer Relationship Management, is an integrated online sales, marketing, and service strategy that is used to identify, attract and retain an organization's customers" />
      <meta property="og:locale" content="en_US" />
      <title>E-CRM? | Industry :: indsaccrm.com</title>

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"E-CRM?  ",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Electronics.jsp"}
    </script> */}

      <Navbar/>
      {/* <!-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><a href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li className="active">Electronics Industry</li>
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
                <img src={erm} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>E-CRM?</h4>
                <p className="para">E-CRM, or Electronic Customer Relationship Management, is an integrated online sales,
                  marketing, and service strategy that is used to identify, attract and retain an organization's customers.
                </p>
                <div className="jst-two-coloums mt-4">
                  <div className="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p className="para">It describes improved and increased communication between an organization and its clients by creating and enhancing customer interaction through innovative technology. </p>
                  </div>
                  <div className="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p className="para">E-CRM software provides profiles and histories of each interaction the organization has with its customers, making it an important tool for all small and medium businesses.</p>
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
              <h3>Business Benefits of E-CRM </h3>
              <p className="para">Implementation of an E-CRM system enables an organization to streamline processes and provide sales, marketing,
                and service personnel with better, more complete customer information. The result is that E-CRM allows organizations to build more profitable customer relationships and decrease operating costs.</p>
              <br />
              <p className="para">Businesses that strategize and implement an E-CRM solution can align their processes around technology
                to effectively deliver a seamless, high-quality customer experience across all channels. Customers have the power
                to help themselves through online personalized services that are made available on demand. The Internet provides a simple and ideal medium where customers can get information from websites, buy products and find answers using FAQ sections, forums, or chat rooms. </p>
              <br />
              <p className="para">The benefits of E-CRM include the following <br /><br />

                1. Improved customer relations, service, and support<br /><br />
                2. Matching the customers' behavior with suitable offers<br /><br />
                3. Increased customer satisfaction and loyalty<br /><br />
                4. Greater efficiency and cost reduction<br /><br />
                5. Increased business revenue</p>

            </div>
            <br /> <br />
            <div className="left-text">
              <h3>Benefits of E-CRM</h3>
            </div>
            <div className="row about-about">
              <div className="col-lg-4 col-md-6">
                <div className="about-grids">

                  <h4>Customer management</h4>
                  <p className="para">Provides access to all customer information including inquiry status and correspondence.</p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4> Knowledge management</h4>

                  <p className="para">A centralized knowledge base that handles and shares customer Information. </p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Back-end integration</h4>
                  <p className="para">Blends with other systems such as billing, inventory through relevant customers contact points such as websites and call centers.</p>
                  <div className="mt-3 about-list">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer/>
    </>
  )
}
