import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import indsac_education from "../Images/indsac-education.gif";


export default function Education() {


  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Education CRM systems are software applications means to automate and manage communications with current students, employees, alumni, etc" />
      <meta property="og:title" content="Education CRM " />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/Education.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-education.gif" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/indsac-education.gif" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="Education CRM systems are software applications means to automate and manage communications with current students, employees, alumni, etc" />
      <meta property="og:locale" content="en_US" />

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Education CRM ",
    "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/Education.jsp"}
    </script> */}

      <title>Education CRM | Education Industry :: indsaccrm.com</title>
      <Navbar/>
      {/* <!-- breadcrumbs --> */}
      <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
          <div class="container seen-w3">
            <ul class="breadcrumbs-custom-path">
              <li><a href="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li class="active">Education Industry </li>
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
                <img src={indsac_education} alt="product" class="img-responsive " />
              </div>
              <div class="cwp4-text col-xl-6">
                <h4> Education CRM</h4>
                <p class="para">Education CRM systems are software applications means to automate and manage communications with current students, employees, alumni, etc.
                </p>
                <div class="jst-two-coloums mt-4">
                  <div class="icon-text">
                    <h5> <a href="#" > </a>
                    </h5>
                    <p class="para">There are many more processes handled by the CRM, the most important ones are the applicant and inquiry management,
                      student communication, admission notifications, enrollment management, analytics, and reporting.</p>
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
              <h3>Why educational industry need CRM</h3>
              <p class="para">It is a software application used to automate and handle communication with current students,
                employees, and alumni. All this work is done on a single system. Every connection with customers is tracked by
                the customer relationship management system in one place. With the help of customer relationship management
                software, you can take feedback from the customers, department, and students. Each interaction with your
                customers is tracked by the customer relationship management system.</p> <br />
            </div>

            <div class="left-text">
              <h3>Why choose INDSAC-CRM for educational purposes?</h3>
              <p class="para">INDSAC-CRM is best for its services. It is a smart decision to access some businesses. In the
                educational field ether, it is a school or college, the load of work is more. It is always a question of how
                they manage the record of students, staff, and other employees in a perfect way. But the customer relationship
                management system solves this problem easily.</p> <br />
            </div>

            <div class="left-text">
              <h3>Features of CRM For Educational Organization</h3>
              <p class="para">1. Centralize students' information. This keeps all the data of students, staff, and admission records in one software.<br /><br />
                2. Manage student inquiries and courses enquired.<br /><br />
                3. Manage student's enrolment information<br /><br />
                4. Maximize student's admission efficiency<br /><br />
                5. Mange whole marketing and students admission lifecycle<br /><br />
                6. Run emails, SMS marketing, and information campaigns to attract the students<br /><br />
                7. Manage the facility data<br /><br />
                8. Secure way to run the business<br /><br />
                9. Cost-efficient<br /><br />
                10. Real-time reporting and analytical reports<br /><br />
                11. Use education customer relationship management system on the desktop, phone, and tablets</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}
