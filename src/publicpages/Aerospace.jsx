import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import airline from "../Images/airline.gif";
export default function Aerospace() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Aerospace organizations research, design, manufacture, operate or maintain aircraft or spacecraft. Aerospace activity is very diverse, with a multitude of commercial, industrial, and military applications" />
      <meta property="og:title" content="Aerospace Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Aerospace.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/airline.gif" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/airline.gif" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="Aerospace organizations research, design, manufacture, operate or maintain aircraft or spacecraft. Aerospace activity is very diverse, with a multitude of commercial, industrial, and military applications" />
      <meta property="og:locale" content="en_US" />


      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Aerospace Industry",
      "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/navigate/Aerospace.jsp"}
      </script> */}

      <title>Aerospace Industry | Industry :: indsaccrm.com</title>

      <Navbar/>
      {/* <!-- breadcrumbs --> */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Aerospace Industry</li>
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
                <img src={airline} alt="product" class="img-responsive " />
              </div>
              <div class="cwp4-text col-xl-6">
                <h4> Aerospace Industry?</h4>
                <p class="para">Aerospace organizations research, design, manufacture, operate or maintain aircraft or spacecraft. Aerospace activity is very diverse, with a multitude of commercial, industrial, and military applications.Aerospace organizations research, design, manufacture, operate or maintain aircraft or spacecraft. Aerospace activity is very diverse, with a multitude of commercial, industrial, and military applications.
                </p>
                <div class="jst-two-coloums mt-4">
                  <div class="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p class="para">The aerospace industry is a cooperation of the public and private sectors </p>
                  </div>
                  <div class="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p class="para">Aerospace is a constantly evolving market that requires its players to take advantage of the latest and most effective practices and tools to meet growing customer expectations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w3l-recent-work-hobbies">
        <div class="recent-work ">
          <div class="container">
            <div class="left-text">
              <h3>CRM for Aerospace Industry </h3>
              <p class="para">Aerospace companies are not customer-driven, most of them have come to recognize the importance of
                customer relationship management (CRM) when it comes to improving sales and business development effectiveness,
                delivering superior customer service, improving the product, quote, and order configuration accuracy, and
                maximizing employee productivity and knowledge sharing, among other things. CRM software now offers a broad
                selection of CRM software capable of satisfying the complex and unique demands of aerospace and defense
                companies. </p>
              <br />
              <p class="para"> Aerospace contracts are characterized by their complexity and wide-ranging scope. Their management is further complicated by exceedingly intricate procedures, stringent regulations, and strict requirements from both clients and the government.
                A Cloud CRM solution in this environment must address the need for management of information security with exchanges as a priority from both operational and administrative perspectives in the Aerospace Sector.</p>
              <br />
              <br />
              <br />
              <h3>Benefits of INDSAC-CRM for Aerospace Industry</h3>
            </div>
            <div class="row about-about">
              <div class="col-lg-4 col-md-6">
                <div class="about-grids">

                  <p class="para">CRM software tools that target small and medium-sized businesses are seldom able to satisfy the complex requirements of aerospace companies.</p>
                  <div class="mt-3 about-list">

                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 about-line-top">
                <div class="about-grids">


                  <p class="para ">The most powerful benefit of using a CRM in aviation is that the sales team spends more time connecting with customers and developing deals, and less time analyzing data... </p>
                  <div class="mt-3 about-list">
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 about-line-top">
                <div class="about-grids">

                  <p class="para"> Using CRM you can create much more effective and personalized marketing campaigns. CRM platforms allow you to drill down into the data and get to know your passengers and their behavior.</p>
                  <div class="mt-3 about-list">

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
