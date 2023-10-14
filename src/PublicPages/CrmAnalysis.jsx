import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Analysis from "../Images/Analysis.png";

export default function CrmAnalysis() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful information for business decision-making" />
      <meta property="og:title" content="CRM Analysis" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/crm_analysis" />
      <meta property="og:image" content="https://www.indsaccrm.com/static/media/Analysis.png" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/Analysis.png" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful information for business decision-making" />
      <meta property="og:locale" content="en_US" />
      <title>CRM Analysis | CRM Analysis :: indsaccrm.com</title>

      <script type="application/ld+json">
        `{`"@context":"https://schema.org","@type":"WebPage","name":"CRM Analysis",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/crm_analysis"`}`
        </script>



      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
              <li className="active"> CRM Analysis </li>
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
                <img src={Analysis} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>CRM Analysis</h4>
                <p className="para">Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful
                  information for business decision-making. The purpose of Data Analysis is to extract useful information from data
                  and make decisions based upon the data analysis.</p>
                <br />
                <p className="para"> If your business is not growing, then you have to look back and acknowledge your
                  mistakes and make a plan again without repeating those mistakes. And even if your business is
                  growing, then you have to look forward to making the business grow more. All you need to do is
                  analyze your business data and business processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-recent-work-hobbies">
        <div className="recent-work ">
          <div className="container">
            <div className="left-text">
              <h3>Data Analysis Process</h3>
              <p className="para">    </p>
            </div>
            <p className="para"> The Data Analysis Process is nothing but gathering information by using a proper application or tool which allows you to explore the data and find a pattern in it. Based on that information and data, you can make decisions, or you can get ultimate conclusions.
              <br /> <br />
              Data Analysis consists of the following phases: <br /> <br />
              1. Data Requirement Gathering<br />
              2. Data Collection<br />
              3. Data Cleaning<br />
              4. Data Analysis<br />
              5. Data Interpretation<br />
              6. Data Visualization</p>
            <br />

            <div className="left-text">
              <h3>Types of Data Analysis: Techniques and Methods</h3>
              <p className="para">    </p>
            </div>
            <p className="para"> There are several types of Data Analysis techniques that exist based on business and technology.<br />
              However, the major Data Analysis methods are:<br /><br />

              1. Text Analysis: Text Analysis is also referred to as Data Mining. It is one of the methods of data analysis to
              discover a pattern in large data sets using databases or data mining tools. It is used to transform raw data into
              business information. Business Intelligence tools are present in the market which are used to make strategic business
              decisions. Overall it offers a way to extract and examine data and derive patterns and finally interpretation of the
              data.<br /><br />

              2. Diagnostic Analysis: Diagnostic Analysis shows "Why did it happen?" by finding the cause from the insight found in
              <br /> <br />

              3. Statistical Analysis. Statistical Analysis shows "What happen?" by using past data in the form of dashboards.
              Statistical Analysis includes collection, analysis, interpretation, presentation, and modeling of data.
              It analysis a set of data or a sample of data. <br /> <br />

              4. Predictive Analysis : Predictive Analysis: This Analysis makes predictions about future outcomes based on current
              or past data. Forecasting is just an estimate.
              Its accuracy is based on how much detailed information you have and how much you dig into it.
              <br /> <br />

              5. Prescriptive Analysis: Prescriptive Analysis combines the insight from all previous Analysis to determine which
              action to take in a current problem or decision. Most data-driven companies are utilizing Prescriptive Analysis
              because predictive and descriptive Analysis is not enough to improve data performance. Based on current situations and
              problems, they analyze the data and make decisions.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
