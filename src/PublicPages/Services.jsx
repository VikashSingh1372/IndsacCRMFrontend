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
    <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
            <div className="container seen-w3">
                <ul className="breadcrumbs-custom-path">
                    <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                    <li className="active">Services</li>
                </ul>
            </div>
        </div>
    </section>
 {/* breadcrumbs  */}
<section className="w3l-features-4">
    <div className="features4-block">
        <div className="container">
            <div className="main-titles-head text-center">

                <h3 className="header-name">
		Save time with INDSAC-CRM powerful automations
                </h3>
            </div>
            <div className="features-effect row text-center">
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                        <Link to="/contactmanagement"><img className="img-responsive" src={con1} alt=" "/></Link>
                        <h4><Link to="/contactmanagement" className="title-head">Contact Management</Link></h4>
                        <p className="para">CRM systems allow salespeople to create contact records and store prospect and customer information in a database. </p>
                    </div>
                </div>
                <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                          <Link to="/taskmanagement "><img className="img-responsive" src={taskmg} alt=" "/></Link>
                        <h4><Link to="/taskmanagement" className="title-head">Task Management </Link></h4>
                        <p className="para"> CRM system that includes task management capabilities sales peoples increase their
                            workflow and keep on top of their follow up. </p>
                    </div>
                </div>
                  <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                         <Link to="/salesautomation "><img className="img-responsive" src={salesmg} alt=" "/></Link>
                        <h4><Link to="/salesautomation" className="title-head">Sales Automation </Link></h4>
                        <p className="para">Sales automation takes all the repetitive, manual tasks performed by sales reps and managers, and automates them. 
                            Sales automation helps you track contacts, manage opportunities.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                      <Link to="/salesforecasting"><img className="img-responsive" src={salesf} alt=" "/></Link><br/><br/>
                        <h4><Link to="/salesforecasting" className="title-head"> Sales Forecasting  </Link></h4>
                        <p className="para">A CRM software predicts your future sales based on data from your current pipeline. You may need to alter your marketing plan based on the sales forecast.</p>
                    </div>
                </div>               
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                          <Link to="/dashboardandreporting"><img className="img-responsive" src={reportmg} alt=" "/></Link>
                        <h4><Link to="/dashboardandreporting" className="title-head">Reporting & Dashboards</Link></h4>
                        <p className="para">Create customized reports as interactive pie, bar, and line charts. Export reports as PDFs or Word files.
Utilize dashboards and reports for management, sales, marketing & more. </p>
                    </div>
                </div>
               
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                       <Link to="/productivityanalysis"><img className="img-responsive" src={productivitymg} alt=" "/></Link>
                        <h4><Link to="/productivityanalysis" className="title-head"> Productivity Analysis </Link></h4>
                        <p className="para">Track and measure your team's progress, know the status of key opportunities, and 
                            ensure you're getting results. Compare productivity among departments and representatives. 
                            Track detailed marketing campaign metrics. </p>
                    </div>
                </div>
                
		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div className="back-color">
                          <Link to="/leadmanagement"><img className="img-responsive" src={leadmg} alt=" "/></Link><br/>
                        <h4><Link to="/leadmanagement" className="title-head">Lead Management </Link></h4>
                        <p className="para">Lead management is the process of capturing and nurturing leads as they move through your sales pipeline along with
						the sales representatives and converted into a sale. </p>
                    </div>
                </div>	
                
		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                         <Link to="/emailintegration"><img className="img-responsive" src={emailmg} alt=" "/></Link><br/>
                        <h4><Link to="/emailintegration" className="title-head">Email Integration</Link></h4>
                        <p className="para"> Email service in an INDSAC-CRM helps keep your sales team organized and productive. 
                            They can integrate their calendars to schedule appointments and engage prospects and customers 
                            accordingly.</p>
                    </div>
                </div>
                
		<div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div className="back-color">
                       <Link to="/opportunitymanagement"><img className="img-responsive" src={oppormg} alt=" "/></Link><br/>
                        <h4><Link to="/opportunitymanagement" className="title-head">Opportunity Management</Link></h4>
                        <p className="para">It provides opportunity tracking so you'll always know the details for each prospective sale, and allows you to 
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
