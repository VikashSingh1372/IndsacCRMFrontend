import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import pharma from "../Images/pharma.gif";
import ph1 from "../Images/ph1.png";
import ph2 from "../Images/ph2.jpeg";
import ph3 from "../Images/ph3.jpg";
import ph4 from "../Images/ph4.png";
import ph5 from "../Images/ph5.png";
import ph6 from "../Images/ph6.png";


export default function Pharmaceutical() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="INDSAC-CRM provides solutions to this industry with the ability to automate processes, pinpoint marketing efforts" />
      <meta property="og:title" content="Pharmaceutical Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Pharmaceutical.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/pharma.gif" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/pharma.gif" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="INDSAC-CRM provides solutions to this industry with the ability to automate processes, pinpoint marketing efforts" />
      <meta property="og:locale" content="en_US" />
      <title>Pharmaceutical Industry | Industry :: indsaccrm.com</title>

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Pharmaceutical Industry",
          "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Pharmaceutical.jsp"}
          </script> */}



      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Pharmaceutical Industry</li>
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
                <img src={pharma} alt="product" class="img-responsive " />
              </div>
              <div class="cwp4-text col-xl-6">
                <h4>Pharmaceutical Industry</h4>
                <p class="para">The pharmaceutical company is a firm to research, discover, develop, market, and sell drugs. It is an important industry worldwide. These companies research and produce drugs to cure diseases of humans and animals. Some drugs also treat symptoms.</p>
                <div class="jst-two-coloums mt-4">
                  <div class="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p class="para">Large and small pharmaceutical companies, independent pharmacies, and medicine wholesalers are perhaps the most critical role play in the pharmaceutical industry. All three of the industries face multiple challenges. But, some common tools come to their aid and help meet business needs. </p>
                  </div>
                  <div class="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p class="para">INDSAC-CRM provides solutions to this industry with the ability to automate processes, pinpoint marketing efforts, and enhance the effectiveness of sales teams. </p>
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
              <h3>The role of CRM in the pharmaceutical industry</h3>
              <p class="para">Assessment procedures, quality systems, data security, transfer of information, data collection, and the documentation process are often under the spotlight in the industry. The pharmaceutical sector is faces challenges in the form of new regulations, competition in various markets around the world.  </p>
              <br />
              <p class="para">Using INDSAC-CRM pharma companies can enhance their sales and marketing processes, territory management, and account management activities. The main benefits offered by the INDSAC-CRM systems are the improvement in data analysis and reporting,
                customer service, and creating a strong connection with the customer. </p><br />
              <p class="para">  The main objectives of INDSAC-CRM : </p><br />
              <p class="para"> <ul>
                <li>1. Improve business relationships </li><br />
                <li>2. Connect with customers </li><br />
                <li>3. Streamline operational processes</li><br />
                <li>4. Increase productivity</li><br />
                <li>5. Boost profitability</li><br />
              </ul> </p>
            </div>
            <br /> <br />
            <div class="left-text">
              <h3>INDSAC-CRM Brings Wide Benefits For Pharmaceutical Industry</h3>
            </div>
            <div class="features-effect row text-center">


              <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                <div class="back-color">
                  <a href="CampManagement.jsp"><img class="img-responsive" src={ph1} alt=" " /></a>
                  <h4><a href="CampManagement.jsp" class="title-head">Automated Campaign Management</a></h4>
                  <p class="para">Campaigns are an efficient way to promote your business. The facilities from CRM enable the sales team to execute well-planned marketing activities to drive more sales. </p>
                </div>
              </div>
              <div class=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div class="back-color">
                  <a href="strongconnection.jsp"><img class="img-responsive" src={ph2} alt=" " /></a><br /><br />
                  <h4><a href="strongconnection.jsp" class="title-head">Establish A Strong Connection With Customers</a></h4>
                  <p class="para">CRM helps you to maintain & intensify connection with your potential customers. With the reminder facility, it is simple to get a reminder when the service expires.</p><br />
                </div>
              </div>

              <div class=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div class="back-color">
                  <a href="inventory.jsp"><img class="img-responsive" src={ph5} alt=" " /></a><br />
                  <h4><a href="inventory.jsp" class="title-head">Well-Optimized Products And Services</a></h4>
                  <p class="para">The data of various drugs can be stored securely via CRM. And, it is easy to fetch the details when needed. Also, you can identify the products and services customized for clients.</p>
                </div>
              </div>

              <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div class="back-color">
                  <a href="DBIntigration.jsp"><img class="img-responsive" src={ph4} alt=" " /></a>
                  <h4><a href="DBIntigration.jsp" class="title-head">Integrated Customer Database</a></h4>
                  <p class="para">INDSAC-CRM helps your sales team to save time while communicating with the cabinets.  The system will perform the actions for you so you can effectively use the details. </p>
                </div>
              </div>

              <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div class="back-color">
                  <a href="services.jsp"><img class="img-responsive" src={ph3} alt=" " /></a><br /><br />
                  <h4><a href="services.jsp" class="title-head">Offer improved Customer Services</a></h4>
                  <p class="para">An INDSAC-CRM allows to efficiently manage customer databases and offer them customized services. In the case of a past query, the system can fetch all data within seconds.</p>
                </div>
              </div>


              <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                <div class="back-color">
                  <a href="OPManagement.jsp"><img class="img-responsive" src={ph6} alt=" " /></a><br />
                  <h4><a href="OPManagement.jsp" class="title-head">Operational Management </a></h4>
                  <p class="para">INDSAC-CRM offers distinct features to manage operational tasks including sales forecast, supply chain management, quality control, and many more so, that you can deliver better customer services.   </p>
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


              <h3> Why use INDSAC-CRM for the pharmaceutical industry?</h3>
              <p class="para">INDSAC-CRM software all your product to get large reach by creating a clear marketing strategy.
                This software boosts your market reach and gives you an efficient workflow. Apart from offering improved customer services, you can perform other essential tasks for your pharmaceutical business like optimizing products & services, efficiency, operation management, running marketing campaigns, and many more. With CRM for your pharmaceutical business, you can reveal the existence of your newest medications, and organize staff work for maximum productivity. </p>

            </div>
          </div>
        </div>
      </section>




      <Footer />
    </>
  )
}
