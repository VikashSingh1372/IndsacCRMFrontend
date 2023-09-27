import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import food1 from "../Images/food1.jpg";

export default function Food() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="INDSAC-CRM solutions help to create standardized and clearly defined processes" />
      <meta property="og:title" content="Food Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Food.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/food1.jpg" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/food1.jpg" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="INDSAC-CRM solutions help to create standardized and clearly defined processes" />
      <meta property="og:locale" content="en_US" />
      <title>Food Industry | Food Industry :: indsaccrm.com</title>

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Food Industry",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Food.jsp"}
    </script> */}

      <Navbar />
      {/* !-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><a href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li className="active">Food Industry</li>
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
                <img src={food1} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>Food Industry?</h4>
                <p className="para">The food Industry comprises processing, preservation, conversion, and preservation of eatable items. The raw material for the food industry is obtained from the agriculture industry. Therefore, the food industry is dependent on the agriculture industry.</p>
                <div className="jst-two-coloums mt-4">
                  <div className="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p className="para">The food industry has grown exponentially in the past decad and  industry deliver high quality standards at the best possible price. </p>
                  </div>
                  <div className="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p className="para">Constantly increasing market demands require standardized processes and company processes from purchasing to production and sales all run smoothly.</p>
                  </div>
                </div>
              </div>
              <div className="left-text">
                <h3>CRM For Food Industry</h3>
                <p className="para">INDSAC-CRM solutions help to create standardized and clearly defined processes. All information that used to be stored separately is now kept in one place, which makes searching for it that much easier. </p><br />
                <p className="para">Your sales staff benefits from centrally stored information. Your sales team is always well informed and can access the in-house database directly from their mobile devices. This system saves your company time and money. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-specification-6">
        <div className="specification-layout">
          <div className="container">
            <div className="main-titles-head">

              <h3 className="header-name">We Bring The Best Features For Food Industry</h3>

            </div>
            <div className="specification-effect row text-center">
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                <div className="back-color">
                  <span className="fa fa-tachometer" aria-hidden="true"></span>
                  <h4><a href="dashboard.jsp" className="title-head">Dashboard</a></h4>
                  <p className="para">INDSAC CRM provides you with focused promotional activities which is an excellent way to introduce your product to the market. </p>
                </div>
              </div>
              <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <span className="fa fa-tasks" aria-hidden="true"></span>
                  <h4><a href="task.jsp" className="title-head">Managing Tasks</a></h4>
                  <p className="para">With INDSAC CRM get campaigns based on your business goals will create a brand identity and positive brand association. </p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                <div className="back-color">
                  <span className="fa fa-file-text-o" aria-hidden="true"></span>
                  <h4><a href="Docmangement.jsp" className="title-head">Managing Documents</a></h4>
                  <p className="para">INDSAC 360 degrees customer view strategic approach enabling businesses to offer the best customer experience across all channels.</p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <span className="fa fa-mobile" aria-hidden="true"></span>
                  <h4><a href="digitalmobile.jsp" className="title-head">Mobile Access To Data</a></h4>
                  <p className="para">Utilize the amazing technology where ever you are to benefits your business. View data and receive valuable alerts on mobile.</p>
                </div>
              </div>
              <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                <div className="back-color">
                  <span className="fa fa-database" aria-hidden="true"></span>
                  <h4><a href="lead.jsp" className="title-head"> Lead Capture Forms</a></h4>
                  <p className="para">Works best for you that will determine and pursue your business marketing goals. Boost visibility and increase sales while sustaining a profit.</p>
                </div>
              </div>
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                <div className="back-color">
                  <span className="fa fa-line-chart" aria-hidden="true"></span>
                  <h4><a href="salesforcasting.jsp" className="title-head">Visualize Your Sales Process</a></h4>
                  <p className="para">Get high-level overview of your entire business that will develop a better understanding of the effective business planning process.</p>
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
