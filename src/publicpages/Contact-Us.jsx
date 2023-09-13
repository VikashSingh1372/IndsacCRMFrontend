import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Drop Us Message For Any Query" />
      <meta property="og:title" content="Contact Us" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/contact.jsp" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="Drop Us Message For Any Query" />
      <meta property="og:locale" content="en_US" />
      <title>Contact Us | Contact Us :: indsaccrm.com</title>

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":" Contact Us",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/contact.jsp"}
    </script> */}
    <link rel="stylesheet" href="assets/css/style-starter.css"/>
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap" rel="stylesheet"/>

      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="../index.jsp">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Contact Us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumbs //--> */}
      <section class="w3l-contact-info-main">
        <div>
        <div class="contact-sec">
          <div class="container">
            <div class="main-titles-head text-center">
              <h3 class="header-name">
                Drop us Message for any Query
              </h3>

            </div>
            <div class="contact row">
              {/* <!-- email --> */}
              <div class="col-lg-3 col-md-6 col-sm-6 contact-grids">
                <div class="contact-gtids ">
                  <span class="fa fa-envelope" aria-hidden="true"></span>
                  <h4>Email Address</h4>
                  <a href="mailto:hello@example.com">
                    <p class="contact-text-sub">support@indsaccrm.com</p>
                  </a>
                  <a href="mailto:info@example.com">
                    <p class="contact-text-sub">info@indsaccrm.com</p>
                  </a>
                </div>
              </div>
              {/* <!-- phone --> */}
              <div class=" col-lg-3 col-md-6 col-sm-6 contact-grids">
                <div class="contact-gtids ">
                  <span class="fa fa-phone" aria-hidden="true"></span>
                  <h4>Phone Number</h4>
                  <a href="tel:+91 7676289081">
                    <p class="contact-text-sub">+91 7676289081</p>
                  </a>

                </div>
              </div>
              {/* <!-- address --> */}
              <div class="col-lg-3 col-md-6 col-sm-6 contact-grids">
                <div class="contact-gtids ">
                  <span class="fa fa-building" aria-hidden="true"></span>
                  <h4>Address Line</h4>
                  <p class="contact-text-sub">INDSAC SOFTECH  <br /> Manyata Embassy Business Park Ground Floor, E-1, Nagavara, Bengaluru, Karnataka 560045</p>

                </div>
              </div>
              {/* <!-- 24 customer service --> */}
              <div class="col-lg-3 col-md-6 col-sm-6 contact-grids">
                <div class="contact-gtids ">
                  <span class="fa fa-headphones" aria-hidden="true"></span>
                  <h4>Support</h4>
                  <p class="contact-text-sub">24/7 Ready Our Support Team For You.</p>

                </div>
              </div>
            </div>
            <form method="post" class="indsaccrm.com-contact-fm" action="">
              <div>
                <input type="hidden" name="id" value="id" />
                <div class="row main-cont-sec" />

                <div class="col-lg-6 left-cont-contact">

                  <div class="form-group input-gap">
                    <input class="form-control" type="text" name="firstname" id="firstname" placeholder="First Name" autocomplete="off" />

                  </div>

                  <div class="form-group input-gap">
                    <input class="form-control" type="text" name="lastname" id="lastname" placeholder="Last Name" autocomplete="off" />

                  </div>

                  <div class="form-group input-gap">
                    <input class="form-control" type="email" name="email" id="email" placeholder="Email" autocomplete="off" />

                  </div>

                </div>
                <div class="col-lg-6 right-cont-contact">
                  <div class="form-group">
                    <textarea class="form-control" name="message" id="message" placeholder="Message" autocomplete="off"></textarea>
                  </div>
                </div>
              </div>
              <div class="form-group-2">
                <button type="submit" class="btn action-button mt-3" onClick="return validateForm()">Send Now</button>
              </div>
            </form>

            <div class=" contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.339832652282!2d77.6206769!3d13.0461752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x357fd0906e5de67e!2sIndsac%20Softech!5e0!3m2!1sen!2sin!4v1646367013019!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        </div>
      </section >

      <Footer />
    </>
  )
}
