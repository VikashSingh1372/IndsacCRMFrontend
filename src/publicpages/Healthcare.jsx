import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import h1 from "../Images/h1.jpg";
import h3 from "../Images/h3.png";
import h4 from "../Images/h4.jpg";
import indsac_multiple_platforms from "../Images/indsac-multiple-platforms.gif";
import indsac_management_processes from "../Images/indsac-management-processes.gif";

export default function Healthcare() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="The goal of all healthcare providers is to deliver care of the highest quality to patients and consumers" />
      <meta property="og:title" content="Health Care Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Health Care.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/h1.jpg" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/h1.jpg" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="The goal of all healthcare providers is to deliver care of the highest quality to patients and consumers" />
      <meta property="og:locale" content="en_US" />
      <title>Health Care Industry | Industry :: indsaccrm.com</title>

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Health Care Industry",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Health Care.jsp"}
    </script> */}




      <Navbar />
      {/* <!-- breadcrumbs --> */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Health Care Industry</li>
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
                <img src={h1} alt="product" class="img-responsive " />
              </div>
              <div class="cwp4-text col-xl-6">
                <h4>Health Care Industry</h4>
                <p class="para">The goal of all healthcare providers is to deliver care of the highest quality to
                  patients and consumers. Part of delivering high-quality healthcare services establishing reliable
                  relationships with care seekers and maintaining an organized patient information structure that is
                  accessible by everyone involved in the delivery of healthcare services, while complying with
                  medical information, security, and privacy regulations.
                </p>
                <div class="jst-two-coloums mt-4">
                  <div class="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p class="para">Improving access to patient data effectively improves the quality of care and increases patient satisfaction.
                    </p>
                  </div>
                  <div class="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p class="para">A healthcare customer relationship management (CRM) system is an invaluable tool to maintain up-to-date information about patients,
                      offer quality support, gather valuable insights, and provide efficient customer management processes.</p>
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
              <h3>How Healthcare CRM improves patient care?</h3>
              <p class="para">A Healthcare CRM helps to meet patients' needs.
                Like other business organizations, healthcare firms too can utilize CRM technology to focus on relationship management, while offering more tangible benefits.</p><br />

              <p class="para">A healthcare CRM solution can become a centralized healthcare hub data to manage different data streams.
                This includes communications, analytics, and other passive patient interactions. This helps healthcare institutes to
                create an actively engaged consumer base involved in a partnership with healthcare professionals.</p><br />

              <p class="para">A CRM can free up you and your staff to focus on the patients' treatments, and more strategic projects,
                which results in enhanced customer experience, reducing waiting times, and satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="w3l-content-with-photo-4">
        <div class="text-center">

          <h3 class="header-name">
            The Benefits of Having a CRM in the Healthcare Industry
          </h3>
        </div>
        <div class="content-with-photo4-block">
          <div class="container">
            <div class="cwp4-two row">

              <div class="cwp4-text col-xl-6">
                <h4>Reports, Metrics, and Dashboards</h4>
                <p class="para">
                  A CRM stores data on patients in a communications module so that it is readily available to employees throughout the healthcare
                  system to schedule and track patient appointments and interactions. <br />The patient management module of the CRM enables
                  staff to add or update patient records and access the medical histories of patients to provide better care.<br />The reporting module of the CRM can be designed to segment the patient population to analyze and then understand them better. </p>

              </div>
              <div class="col-xl-6 cwp4-image ">
                <img src={h3} alt="product" class="img-responsive " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w3l-content-with-photo-4">
        <div class="content-with-photo4-block">
          <div class="container">
            <div class="cwp4-two row">
              <div class="col-xl-6 cwp4-image ">
                <img src={h4} alt="product" class="img-responsive " />
              </div>
              <div class="cwp4-text col-xl-6">
                <h4> Mailing and Marketing Campaigns</h4>
                <p class="para"> A healthcare CRM can track patient satisfaction and the patients' likelihood of referring others to the healthcare establishment. Such data provides valuable feedback to healthcare executives to make data-driven decisions.
                  <br />The CRM allows you to filter your contacts to get a targeted list of patients or prospective patients who would most likely be interested in upcoming special offers or new services or products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="w3l-content-with-photo-4">
        <div class="content-with-photo4-block">
          <div class="container">
            <div class="cwp4-two row">

              <div class="cwp4-text col-xl-6">
                <h4>Customer Management Processes</h4>
                <p class="para">Filing out forms, reporting, compliance with regulations, appointments, patient notes by doctors and nurses, medications prescribed and on hand, etc.
                  All of these tasks, which involve a specific sequence of actions, can be automated with a CRM.
                  <br />The task management module of the CRM allows staff to add a task, assign it to an individual staff member, and track the progress, deadline, priority, and completion of the job.
                </p>
              </div>
              <div class="col-xl-6 cwp4-image ">
                <img src={indsac_management_processes} alt="product" class="img-responsive " />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="w3l-content-with-photo-4">
        <div class="content-with-photo4-block">
          <div class="container">
            <div class="cwp4-two row">
              <div class="col-xl-6 cwp4-image ">
                <img src={indsac_multiple_platforms} alt="product" class="img-responsive " />
              </div>
              <div class="cwp4-text col-xl-6">
                <h4> Availability on Multiple platforms</h4>
                <p class="para">CRM software is one of the most popular types of software for business and healthcare
                  practices. Approximately 50 % of users access CRM software from a smartphone or a tablet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
