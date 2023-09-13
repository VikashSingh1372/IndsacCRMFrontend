import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import analytics from "../Images/analytics.gif";


export default function Features() {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="CRM software can also help you boost sales by keeping an eye on customers, from nurturing leads to closing the sale and maintaining customer loyalty" />
      <meta property="og:title" content="CRM Features" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.indsaccrm.com/navigate/feature.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/analytics.gif" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/analytics.gif" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="CRM software can also help you boost sales by keeping an eye on customers, from nurturing leads to closing the sale and maintaining customer loyalty" />
      <meta property="og:locale" content="en_US" />
      <title> CRM Features | Features :: indsaccrm.com</title>


      <Navbar />
       {/* breadcrumbs  */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Features</li>
            </ul>
          </div>
        </div>
      </section>
       {/* breadcrumbs  */}
      <section class="w3l-content-with-photo-4">
        <div class="content-with-photo4-block">
          <div class="container">
            <div class="cwp4-two row">
              <div class="col-xl-6 cwp4-image ">
                <img src={analytics} alt="product" class="img-responsive "/>
              </div>
              <div class="cwp4-text col-xl-6">
                <h4>How INDSAC-CRM makes business easier</h4>
                <p class="para">With the right features, CRM software can also help you boost sales by keeping an eye on customers, from nurturing leads to closing the sale and maintaining customer loyalty.</p>
                <div class="jst-two-coloums mt-4">
                  <div class="icon-text">
                    <p class="para"> It can also save you tons of time and money through sales force automation.</p>
                  </div>
                  <div class="icon-text mt-lx-3 pt-lx-1">

                    <p class="para">INDSAC-CRM software provides you with three main types of features that help you to grow your business.</p>
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
              <h3>Categories of INDSAC-CRM features</h3>
            </div>
            <div class="row about-about">
              <div class="col-lg-4 col-md-6">
                <div class="about-grids">

                  <h4>Core CRM Features</h4>
                  <p class="para">Core features make or break a system's inclusion in the CRM category; these features should be standard across all CRM software.</p>
                  <div class="mt-3 about-list">
                    <a href="core features.jsp" class="btn action-button mt-lg-5 mt-4 ">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 about-line-top">
                <div class="about-grids">
                  <h4>Common CRM Features</h4>

                  <p class="para">Common features show up in the majority of systems on the CRM market, but not all of them. These features often indicate more robust systems, rather than a basic plan or offer.</p>
                  <div class="mt-3 about-list">
                    <a href="common features.jsp" class="btn action-button mt-lg-5 mt-4 ">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 about-line-top">
                <div class="about-grids">
                  <h4> Optional CRM features</h4>
                  <p class="para"> Optional features aren't common across CRM systems and can set certain software offerings apart from others within the category.</p>
                  <div class="mt-3 about-list">
                    <a href="optional features.jsp" class="btn action-button mt-lg-5 mt-4 ">Read more</a>
                  </div>
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
