import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import indsac_crm from "../Images/indsac-crm.gif";
import { Link } from 'react-router-dom';

export default function resources() {

  return (
   <>
      <Navbar />
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><a href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li className="active">Resources</li>
            </ul>
          </div>
        </div>
      </section>
      {/* breadcrumbs  */}
      <section className="w3l-content-with-photo-4">
        <div className="content-with-photo4-block">
          <div className="container">
            <div className="cwp4-two row">
              <div className="col-xl-6 cwp4-image ">
                <img src={indsac_crm} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>What is CRM?</h4>
                <p className="para">CRM (Customer Relationship Management), in its simplest form, helps companies build and improve lead and customer relationships and improve the efficiency of customer-facing processes.
                </p>
                <div className="jst-two-coloums mt-4">
                  <div className="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p className="para">It is the strategy to identify, understand, manage, and cater to the business needs of their prospects and existing customers. </p>
                  </div>
                  <div className="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p className="para">CRM software was originally designed to help businesses build and maintain
                      relationships with new and existing customers. Since then, CRM software has evolved from a
                      simple contact management system into a robust tool that helps users manage sales, marketing,
                      point-of-sale (POS) transactions, accounting, vendors, and other types of operational data
                      all in one easily accessible solution.</p>
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
              <h3>Why do businesses need a CRM?</h3>
              <p className="para">Customer relationship management is any tool, strategy, or process that helps businesses better organize and access customer data.
                It all started with handwritten notes but with the advent and proliferation of digital technology, it eventually evolved into databases stored on individual computers, and then the CRM definition shifted into something far more complex. </p><br/>
                <p className="para"> It was no longer just notes. Managing your business relationships with customers became a complicated
                  process. Now, to compete in any industry, you need a reliable system built on CRM software. Managing every aspect of the
                  business can be made easier with a robust CRM system. It should readily understand the business, unite it with the
                  employees and customers alike and capture the business information such that one gets a holistic view of each customer in
                  real-time.</p>
            </div>
            <br/> <br/>
              <div className="left-text">
                <h3>Benefits of INDSAC-CRM</h3>
              </div>
              <div className="row about-about">
                <div className="col-lg-4 col-md-6">
                  <div className="about-grids">

                    <h4>Enhances Better Customer Service</h4>
                    <p className="para">This system allows each employee to understand the specific needs of their customers as well as their transaction file. </p>
                    <div className="mt-3 about-list">

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 about-line-top">
                  <div className="about-grids">
                    <h4>Helps the sales team in closing deals faster</h4>

                    <p className="para">A CRM system helps in closing faster deals by facilitating quicker and more efficient responses to customer leads and information. </p>
                    <div className="mt-3 about-list">

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 about-line-top">
                  <div className="about-grids">
                    <h4>Facilitates optimized marketing</h4>
                    <p className="para">CRM enables a business to understand the needs and behavior of its customers. This allows them to identify the correct time to market their products to customers.
                    </p>
                    <div className="mt-3 about-list">

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


              <h3> CRM system is really necessary for business</h3>
              <p className="para">CRM helps businesses build a relationship with their customers that, in turn, creates loyalty and customer retention. Since customer loyalty and revenue are both qualities that affect a company's revenue, CRM is a management strategy that results in increased profits for a business. At its core, a CRM tool creates a simple user interface for a collection of data that helps businesses recognize and communicate with customers in a scalable way.
                Small businesses and even freelancers can benefit from CRM processes as well.</p><br/>




                <h3>How to choose the best CRM</h3>
                <p className="para">Choosing the right CRM for your business isn't easy.<br/>
                  The difficulty lies not only in the fact that there are many solutions and technologies to choose from. But you also have to consider deployment options, ability to customize, cost, scalability, and business value, before you decide.<br/>
                    With so many things to consider when choosing a CRM for your business, there is another important thing that your own needs.</p>
                  <Link to="/choosingrightcrm" className="btn action-button mt-lg-5 mt-4 ">Read more</Link>
                </div>
                </div>
            </div>
          </section>




          <Footer/>
        </>
        )
}
