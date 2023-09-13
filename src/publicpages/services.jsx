import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import oppormg from "../Images/oppormg.png";
import emailmg from "../Images/emailmg.jpg";
import leadmg from "../Images/leadmg.svg";
import con1 from "../Images/con1.jpg";
import taskmg from "../Images/taskmg.png";
import salesmg from "../Images/salesmg.png";
import salesf from "../Images/salesf.jpg";
import reportmg from "../Images/reportmg.png";
import productivitymg from "../Images/productivitymg.png";



export default function services() {
  
  return (
  <>
  <Navbar/>
   {/* breadcrumbs */}
    <section class="w3l-inner-banner-main">
        <div class="about-inner inner2">
            <div class="container seen-w3">
                <ul class="breadcrumbs-custom-path">
                    <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                    <li class="active">Services</li>
                </ul>
            </div>
        </div>
    </section>
 {/* breadcrumbs  */}
<section class="w3l-features-4">
    <div class="features4-block">
        <div class="container">
            <div class="main-titles-head text-center">

                <h3 class="header-name">
		Save time with INDSAC-CRM powerful automations
                </h3>
            </div>
            <div class="features-effect row text-center">
              <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div class="back-color">
                        <a href="contactmanagement.jsp"><img class="img-responsive" src={con1} alt=" "/></a>
                        <h4><a href="contactmanagement.jsp" class="title-head">Contact Management</a></h4>
                        <p class="para">CRM systems allow salespeople to create contact records and store prospect and customer information in a database. </p>
                    </div>
                </div>
                <div class=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div class="back-color">
                          <a href="task.jsp "><img class="img-responsive" src={taskmg} alt=" "/></a>
                        <h4><a href="task.jsp" class="title-head">Task Management </a></h4>
                        <p class="para"> CRM system that includes task management capabilities sales peoples increase their
                            workflow and keep on top of their follow up. </p>
                    </div>
                </div>
                  <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div class="back-color">
                         <a href="sales.jsp "><img class="img-responsive" src={salesmg} alt=" "/></a>
                        <h4><a href="sales.jsp" class="title-head">Sales Automation </a></h4>
                        <p class="para">Sales automation takes all the repetitive, manual tasks performed by sales reps and managers, and automates them. 
                            Sales automation helps you track contacts, manage opportunities.</p>
                    </div>
                </div>
                <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div class="back-color">
                      <a href="salesforcasting.jsp"><img class="img-responsive" src={salesf} alt=" "/></a><br/><br/>
                        <h4><a href="salesforcasting.jsp" class="title-head"> Sales Forecasting  </a></h4>
                        <p class="para">A CRM software predicts your future sales based on data from your current pipeline. You may need to alter your marketing plan based on the sales forecast.</p>
                    </div>
                </div>               
                <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div class="back-color">
                          <a href="dashboard.jsp"><img class="img-responsive" src={reportmg} alt=" "/></a>
                        <h4><a href="dashboard.jsp" class="title-head">Reporting & Dashboards</a></h4>
                        <p class="para">Create customized reports as interactive pie, bar, and line charts. Export reports as PDFs or Word files.
Utilize dashboards and reports for management, sales, marketing & more. </p>
                    </div>
                </div>
               
                <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div class="back-color">
                       <a href="panalysis.jsp"><img class="img-responsive" src={productivitymg} alt=" "/></a>
                        <h4><a href="panalysis.jsp" class="title-head"/> Productivity Analysis </h4>
                        <p class="para">Track and measure your team's progress, know the status of key opportunities, and 
                            ensure you're getting results. Compare productivity among departments and representatives. 
                            Track detailed marketing campaign metrics. </p>
                    </div>
                </div>
                
		 <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div class="back-color">
                          <a href="lead.jsp "><img class="img-responsive" src={leadmg} alt=" "/></a><br/>
                        <h4><a href="lead.jsp" class="title-head">Lead Management </a></h4>
                        <p class="para">Lead management is the process of capturing and nurturing leads as they move through your sales pipeline along with
						the sales representatives and converted into a sale. </p>
                    </div>
                </div>	
                
		 <div class="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div class="back-color">
                         <a href="email.jsp"><img class="img-responsive" src={emailmg} alt=" "/></a><br/>
                        <h4><a href="email.jsp" class="title-head">Email Integration</a></h4>
                        <p class="para"> Email service in an INDSAC-CRM helps keep your sales team organized and productive. 
                            They can integrate their calendars to schedule appointments and engage prospects and customers 
                            accordingly.</p>
                    </div>
                </div>
                
		<div class=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div class="back-color">
                       <a href="opp.jsp "><img class="img-responsive" src={oppormg} alt=" "/></a><br/>
                        <h4><a href="opp.jsp" class="title-head">Opportunity Management</a></h4>
                        <p class="para">It provides opportunity tracking so you'll always know the details for each prospective sale, and allows you to 
				review forecasts in real-time with detailed reports., dashboards and lists.</p>
                    </div>
                </div>		
           </div>
        </div>
    </div>
</section>

<Footer/>
  
  </>
  )
}
