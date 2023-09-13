import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function pricing() {
  return (
    <>
      {/* Required meta tags  */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="It's free you can use it" />
      <meta property="og:title" content="Productivity Analysis" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/pricing.jsp" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="It's free you can use it" />
      <meta property="og:locale" content="en_US" />


      <Navbar />
      {/* breadcrumbs  */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Pricing</li>
            </ul>
          </div>
        </div>
      </section>
      {/* breadcrumbs */}
      <section>

        <section class="w3l-contact-info-main">
          <div class="contact-sec">
            <div class="container">
              <div class="main-titles-head text-center">
                <h3 class="header-name">
                  Drop us Message for any Query
                </h3>
              </div>

              <div class="contact row">
                {/*  email  */}
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
                {/*  phone */}
                <div class=" col-lg-3 col-md-6 col-sm-6 contact-grids">
                  <div class="contact-gtids ">
                    <span class="fa fa-phone" aria-hidden="true"></span>
                    <h4>Phone Number</h4>
                    <a href="tel:+7-800-999-800">
                      <p class="contact-text-sub">+91 7676289081</p>
                    </a>
                  </div>
                </div>
                {/*  address */}
                <div class="col-lg-3 col-md-6 col-sm-6 contact-grids">
                  <div class="contact-gtids ">
                    <span class="fa fa-building" aria-hidden="true"></span>
                    <h4>Address Line</h4>
                    <p class="contact-text-sub">INDSAC SOFTECH  <br /> Manyata Embassy Business Park Ground Floor, E-1, Nagavara, Bengaluru, Karnataka 560045</p>
                  </div>
                </div>
                {/*  24 customer service  */}
                <div class="col-lg-3 col-md-6 col-sm-6 contact-grids">
                  <div class="contact-gtids ">
                    <span class="fa fa-headphones" aria-hidden="true"></span>
                    <h4>Support</h4>
                    <p class="contact-text-sub">24/7 Ready Our Support Team For You.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


      </section>
      <Footer />
    </>
  )
}
