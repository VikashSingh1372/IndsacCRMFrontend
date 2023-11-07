import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import a1 from "../Images/a1.png";


export default function Agriculture() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="CRM software for the agriculture industry allows farmers to store and follow up on customer leads to help find new customers, track customer behavior, interactions, and purchases of products and services" />
      <meta property="og:title" content="Agriculture Industry" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/agriculture.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/static/media/a1.png" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/a1.png" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="CRM software for the agriculture industry allows farmers to store and follow up on customer leads to help find new customers, track customer behavior, interactions, and purchases of products and services" />
      <meta property="og:locale" content="en_US" />
      <title>Agriculture Industry | Industry :: indsaccrm.com</title>

      <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Agriculture Industry",
      "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/agriculture"`}`
      </script>

      <Navbar />

      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><a href="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></a></li>
              <li className="active">Agriculture Industry</li>
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
                <img src={a1} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">
                <h4>Agriculture Industry</h4>
                <p className="para">CRM software for the agriculture industry allows farmers to store and follow up on
                  customer leads to help find new customers, track customer behavior, interactions, and purchases of products and services.</p>
                <div className="jst-two-coloums mt-4">
                  <div className="icon-text">
                    <h5> <a href="#" ></a>
                    </h5>
                    <p className="para"> It also helps to develop personalized and targeted marketing activities that have a better chance of creating a relationship with the buyers and the supply chain.</p>
                  </div>
                  <div className="icon-text mt-lx-3 pt-lx-1">
                    <h5 ><a href="#" ></a>
                    </h5>
                    <p className="para">Agriculture industry CRM needs to maintain long-term relationships with their buyers, agents, and supply chain customers, while gaining the
                      reputation of providing value to customers, increasing their loyalty, and achieving mutual trust.</p>
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
              <h3>Automate Your Agriculture Business Using CRM</h3>
              <p className="para">The main goal of INDSAC-CRM is to help businesses in building good relationships with clients and provide good management of your
                client base along with a variety of other agricultural processes. </p><br />

              <p className="para">By using CRM in your agricultural business, you can deal with suppliers, customers, and so on. To be
                precise, it is capable of storing contacts, adding information about deals, getting access to price history, and more.<br /><br />
                1. Show you the best purchase offers<br /><br />
                2. Keep track of how effective your managers are<br /><br />
                3. Give an opportunity to work remotely<br /><br />
                4. Allow users to access only the information they are supposed to see</p><br />
            </div>


            <div className="left-text">
              <h3>CRM Tasks for Agriculture Business</h3>
              <p className="para">CRM for agribusiness is able to keep track of equipment along with machinery, and the total number
                of livestock. Besides, it is able to track the growth of a variety of animals and plants. INDSAC-CRM for
                agribusiness constantly analyzes the needs and preferences of their customer in order to provide them with the most essential features. </p><br />

              <p className="para">
                1. Plan a task list that is based on natural cycles<br /><br />
                2. Keep a record of a warehouse and other physical assets<br /><br />
                3. Keep finances under control<br /><br />
                4. Manage documentation<br /><br />
                5. Control of employee's working efficiency</p>
            </div>

          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
