import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import dash1 from "../Images/dash1.jpg";
export default function DashboardAndReporting() {
  return (
    <>
      {/* <!-- Required meta tags --> */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Dashboards typically focus on images, graphs, and figures instead of lengthy sections of text. A CRM report is a management tool that offers all the needed data to strengthen your customer relationships" />
      <meta property="og:title" content="Reporting & Dashboards" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://indsaccrm.com/navigate/dashboard.jsp" />
      <meta property="og:image" content="https://www.indsaccrm.com/web/navigate/assets/images/dash1.jpg" />
      <meta property="og:image:secure_url" content="https://www.indsaccrm.com/web/navigate/assets/images/dash1.jpg" />
      <meta property="og:site_name" content="indsaccrm.com" />
      <meta property="og:description" content="Dashboards typically focus on images, graphs, and figures instead of lengthy sections of text. A CRM report is a management tool that offers all the needed data to strengthen your customer relationships" />
      <meta property="og:locale" content="en_US" />

      {/* <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Reporting & Dashboards ",
"logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/navigate/dashboard.jsp"}
</script> */}

      <title>Reporting & Dashboards | Best CRM Software | Indsac Crm :: indsaccrm.com</title>
      <Navbar />

      {/* <!-- breadcrumbs --> */}
      <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
          <div className="container seen-w3">
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
              <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
              <li className="active">Reporting & Dashboards</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumbs //--> */}
      <section className="w3l-content-with-photo-4">
        <div className="content-with-photo4-block">
          <div className="container">
            <div className="main-titles-head text-center">
              <h3 className="header-name">
                Reporting & Dashboards
              </h3>

            </div>
            <div className="cwp4-two row">
              <div className="col-xl-6 cwp4-image ">
                <img src={dash1} alt="product" className="img-responsive " />
              </div>
              <div className="cwp4-text col-xl-6">

                <p className="para">Dashboards & Reporting are important tools in the best CRM software. </p><br />
                <p className="para">Dashboards typically focus on images, graphs, and figures instead of lengthy sections
                  of text. They provide a quick snapshot of your sales activity and key performance indicators (KPI)
                  You and your sales team can use them to see an overview of your sales pipeline's effectiveness
                  and determine which tasks need to be completed next.</p><br />
                <p className="para">A CRM report is a management tool that offers all the needed data to strengthen your customer relationships.
                  They usually exist inside CRM dashboards that connect your data in a way that will make your reports interactive, focused, and efficient through automation.</p><br />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w3l-recent-work-hobbies">
        <div className="recent-work ">
          <div className="container">
            <div className="left-text">
              <h3>Benefits of CRM Dashboards </h3>

              <h4>It keeps your team on track.</h4>
              <p className="para" >
                An in-depth sales report might not always be what your team needs to stay on pace to meet its goals. The top-level
                information that a dashboard presents can be enough to tell your salespeople what needs to get done now and what can wait,
                saving the time and effort of analyzing detailed reports.</p><br />

              <h4>It streamlines your team's work. </h4>
              <p className="para" > With dashboards, your team can rapidly determine which tasks should be done first without clicking through your CRM software to pull up reports. This function can save tremendous amounts of time.</p><br />

              <h4>It updates in real-time. </h4>
              <p className="para" > A report is a static document that inflexibly presents data for a given period. A dashboard, on the other hand, reacts to and reflects changes in your data instantly.
                This way, your team gets to build its strategy based on your most recent KPI data rather than outdated numbers.</p><br />

              <h4>It results in stronger sales processes overall. </h4>
              <p className="para" >Dashboards bring your sales team's work into the present tense, they result in better overall sales
                performance. A current picture of your sales pipeline and your prospect's progress along it is far more meaningful to
                your team than data from an old report, so CRM dashboards are especially powerful in guiding your sales team.
              </p><br />
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-recent-work-hobbies">
        <div className="recent-work ">
          <div className="container">
            <div className="left-text">
              <h3>Benefits of CRM Reporting </h3>

              <h4>Better decision-making.</h4>
              <p className="para" > CRM reporting and CRM reporting tools will help you make quicker, more informed decisions based on robust, reliable visual data. </p><br />

              <h4>Increased insight </h4>
              <p className="para" >CRM reporting software offers you in-depth insights based on historic, predictive, and in-the-moment data.</p><br />
              <p className="para" >The digestible visual information served up by CRM dashboards will empower you to spot emerging trends, identify strengths and weaknesses, and ultimately, meet the needs of your customers head-on.</p><br />

              <h4>More engagement </h4>
              <p className="para" >One of the top benefits of CRM reporting is effective campaign tracking.
                When done correctly, it will enable you to compile relevant information related to your customers behaviors and preferences in different touch points and understand if your marketing initiatives are effective.</p><br />

              <h4>Consistent performance  </h4>
              <p className="para" >CRM reporting allows you to set actionable benchmarks while monitoring your performance in various areas with pinpoint accuracy. </p><br />

              <h4>Maximum access & efficiency </h4>
              <p className="para" >With CRM reports, you can give everyone in your customer service department the tools to improve their performance with data analytics.
                And when you do that, communication will improve, productivity will increase, and you will be able to benefit from the power of business intelligence (BI), 24/7. </p><br />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
