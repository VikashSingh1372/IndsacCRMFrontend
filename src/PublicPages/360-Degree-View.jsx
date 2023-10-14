import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import view from "../Images/360.jpg";


export default function DegreeView() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="A 360-degree view enables companies to provide the best customer experience, increase customer loyalty and satisfaction" />
      <meta property="og:title" content="360 Degree" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/360degreeview" />
      <meta property="og:image" content="https://www.indsaccrm.com/static/media/360.jpg" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/360.jpg" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="A 360-degree view enables companies to provide the best customer experience, increase customer loyalty and satisfaction" />
      <meta property="og:locale" content="en_US" />
      <title>360 Degree | 360 Degree view :: indsaccrm.com</title>
     
      <script type="application/ld+json">
        `{`
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "360 view",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.indsaccrm.com/static/media/u.png"
        },
        "url": "https://indsaccrm.com/360degreeview"
      `}`
      </script>

      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
              <li className="active">360 Degree view</li>
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
                <img src={view} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>360 Degree view </h4>
                <p className="para"> The term 360-degree view of the customer designates all available and significant
                  information about the customer collected by a company to provide the most personalized and
                  efficient customer service. The concept is widely used by companies implementing a customer-centric
                  approach to their business.
                </p>
                <br />
                <p className="para"> The importance of a 360-degree view of the customer cannot be overstated.
                  It improves the effectiveness of all your marketing efforts, predicts the potential demand,
                  helps salespeople to up-sell and cross-sell more. Finally, a 360-degree view enables companies
                  to provide the best customer experience, increase customer loyalty and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-recent-work-hobbies">
        <div className="recent-work ">
          <div className="container">
            <div className="left-text">
              <h3>Benefits of a 360-Degree View</h3>
              <p className="para"></p>
            </div>
            <div className="row about-about">
              <div className="col-lg-4 col-md-6">
                <div className="about-grids">
                  <h4>Enhanced customer intelligence</h4>
                  <p className="para">A 360-degree view drives your customer management strategy by providing a more complete picture of
                    customer activities and priorities.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Superior predictive analysis</h4>
                  <p className="para">It's about taking that complete picture of the customer's situation drawing on their accounts,
                    transactions, priorities, and service calls, and predicting where they're headed and what they'll need in the future.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 about-line-top">
                <div className="about-grids">
                  <h4>Improved customer loyalty</h4>
                  <p className="para">Landing a customer is important for starting a business, but keeping them coming back is the secret to
                    long-term success. Well-timed and informative communications are at the heart of building those ongoing customer
                    relationships.</p>
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
