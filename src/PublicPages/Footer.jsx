import React from 'react'
import '../Style/publicpages.css';



export default function Footer() {
  return (
  <>
  <section className="w3l-footers-20">
    <div className="footers20">
      <div className="container">
        <h2><a className="footer-logo" href="index.jsp">
            <span className="fa fa-line-chart mr-2" aria-hidden="true" />INDSAC-CRM</a></h2>
        <div className=" row">
          <div className="grid-col col-lg-7 col-md-7">
            <h3>Get latest updates and offers.</h3>
            <div className="footer-subscribe mt-4">
              <form action method="post" className="input-button">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                <button className="btn footer-button btn-secondary action-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 footer-bottom-two">
            <ul>
              <li> <a href="navigate\contact.jsp" className="btn action-sub-button">Contact</a></li>
              <li> <a href="navigate\services.jsp" className="btn logo-button top-margin mt-md-3">Our Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-line-bottom" />
        <div className=" row">
          <div className="grids-content col-lg-2 col-md-2 col-sm-6">
            <div className="footer-nav">
              <a href="index.jsp" className="contact-para3">Home</a>
              <a href="navigate\about.jsp" className="contact-para3">About</a>
            </div>
          </div>
          <div className="grids-content col-lg-3 col-md-3 col-sm-6">
            <div className="footer-nav">
              <a href="navigate\termsofuse.jsp" className="contact-para3">Term of Use</a>
              <a href="navigate\privacypolicy.jsp" className="contact-para3">Privacy Policy</a>
              <a href="navigate\ourstory.jsp" className="contact-para3">Our Story</a>			
            </div>					
          </div>					
          <div className="grids-content col-lg-4 col-md-4 col-sm-6">			
            <div className="footer-nav">
              <a href="navigate\resources.jsp" className="contact-para3">What is CRM? </a>
              <a href="navigate\contact.jsp" className="contact-para3">Help Desk </a>						<a href="navigate\whychooseus.jsp" className="contact-para3">Why Choose INDSAC CRM</a>
            </div>					
          </div>					
          <div className="grids-content col-lg- col-md- col-sm-">			
            <div className="footer-nav">
              <a href="index.jsp" className="contact-para3">Free Demo</a>
              <a href="navigate\pricing.jsp" className="contact-para3">Pricing </a>				
            </div>					
          </div>
          <div className="col-lg- col-md- col-12 copyright-grid ">
            <p className="copy-footer-29">Â© 2022 | All rights reserved | Design by <a href="https://indsac.com" target="_blank"> INDSAC SOFTECH</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  </>
  )
}
