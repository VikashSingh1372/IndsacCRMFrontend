import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import indsactask3 from "../Images/indsac-task3.gif";
import indsactask1 from "../Images/indsac-task1.gif";
import indsactask from "../Images/indsac-task.gif";
import { Link } from 'react-router-dom';


export default function TaskManagement() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="It helps in scheduling various tasks that come across service, sales, contact center, and other marketing functions" />
            <meta property="og:title" content="Task Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/taskmanagement" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/indsac-task.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/indsac-task.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="It helps in scheduling various tasks that come across service, sales, contact center, and other marketing functions" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Task Management",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/taskmanagement"`}`
        </script>

            <title>Task Management | Best CRM Software | Indsac Crm :: indsaccrm.com</title>
            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Task Management</li>
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
                                Task Management
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsactask} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <p className="para">Task management is the process of effective allocation and distribution of tasks in an organization for increased professional and personal productivity. </p><br />
                                <p className="para"> This involves the proper management of various customer relationship management (CRM) functions and more abstract sales.</p><br />
                                <p className="para"> It helps in scheduling various tasks that come across service, sales, contact center, and other marketing functions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">

                        <div className="cwp4-two row">

                            <div className="cwp4-text col-xl-6">
                                <h4>Why do you need to manage tasks?</h4>
                                <p className="para"> 1. To make sure that we get things done, in time. <br />
                                    2. Make sure that regular tasks are not missed.<br />
                                    3. Measure the efficiency of employees. <br />
                                    4. Bring in accountability of the team. <br />
                                    5. Bring focus to your job.<br />
                                    6. Organize your organization.</p>
                            </div>
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsactask1} alt="product" className="img-responsive " />
                            </div>
                        </div>
                        <br /><br />
                        <div className="left-text">
                            <h3>How CRM helps in Better task management</h3>  <br /><br />
                            <h4>1. CRM Notifications</h4> <br />
                            <p className="para">   1. When the task is completed. <br />
                                2. If the task is pending. <br />
                                3. Automatic escalations to higher management, as per configuration done. </p> <br />

                            <h4>2. Activity Logging and reporting.</h4><br />
                            <p className="para">1. Per hour cost of all the team members is already entered in the CRM.<br />
                                2. So when team members perform any kind of activity for any module, we can get the time and cost analysis easily. <br />
                                3. Also, logging activity is very simple, just a single click on the CRM interface.</p><br />

                            <h4>3. Tracking employees </h4><br />
                            <p className="para">1. We get all the details about the activities done by an employee.<br />
                                2. Not just the quantity of activity done, but also the quality and timeliness of the same.</p><br /><br />
                        </div>

                        <div className="container">

                            <div className="cwp4-two row">

                                <div className="cwp4-text col-xl-6">
                                    <h4>Benefits of using task management </h4>
                                    <p className="para"> 1. With the help of Gantt charts, it helps you monitor your progress and mark milestones to keep your project on schedule.<br /><br />
                                        2. Helps you to organize, assign, and prioritize tasks using color codes, all from a single platform.<br /><br />
                                        3. Allows you to set goals, keep track of deliverables, and manage deadlines. <br /><br />
                                        4. Eliminates the need to remember all tasks yourself and keeps you on track with timely reminders. <br /><br />
                                        5. Customizable options help you work with what you find comfortable.<br /><br />
                                    </p>
                                </div>
                                <div className="col-xl-6 cwp4-image ">
                                    <img src={indsactask3} alt="product" className="img-responsive " />
                                </div>
                            </div>
                        </div><br /><br />

                        <div className="text-center">
                            <h3>INDSAC-CRM Tasks Management Feature</h3><br /><br />
                            <p className="para"> The tasks management feature allows you to create reminders in your customer accounts that sync with your calendar.
                                You can set up tasks for yourself or assign them to one of your team, and also send an email reminder. You can set up recurring tasks.
                                Once a task is completed it will automatically be added to the activities timeline in your customer account.</p><br /><br />
                        </div>
                        <div className="row about-about">
                            <div className="col-lg-4 col-md-6">
                                <div className="about-grids">

                                    <h4>Setting Reminders</h4>
                                    <p className="para">Easily set reminders for tasks synchronized with your calendar to never miss a deadline and have a proactive approach. </p><br />
                                    <div className="mt-3 about-list">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-line-top">
                                <div className="about-grids">
                                    <h4>Assign Tasks </h4>

                                    <p className="para">Set a task for yourself or assign it to different team members or colleagues across the organization.</p><br />
                                    <div className="mt-3 about-list">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-line-top">
                                <div className="about-grids">
                                    <h4> Email Integration</h4>
                                    <p className="para">With email and CRM integration, you can manage all your communication through a unified platform. </p><br />
                                    <div className="mt-3 about-list">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row about-about">
                            <div className="col-lg-4 col-md-6">
                                <div className="about-grids">

                                    <h4>Map Out Your Workflow</h4>
                                    <p className="para">This will make it easier to understand which tasks are completed, what needs to be done, and how different strategies will help you. You can also automate recurring tasks such as follow-ups from customers, different task alerts, and updating databases.</p>
                                    <div className="mt-3 about-list">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-line-top">
                                <div className="about-grids">
                                    <h4>Stay on Top of Your Day </h4>

                                    <p className="para">A timeline of tasks can also be maintained for each customer or employee in the CRM software.
                                        Hence, just when a task is completed, it will be automatically updated so your team can focus on the next important task.  </p><br />
                                    <div className="mt-3 about-list">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 about-line-top">
                                <div className="about-grids">
                                    <h4>Seamless Data Management</h4>
                                    <p className="para">Stay updated with the current projects/leads/etc and keep track of performance by having a holistic view of the pipeline through your CRM dashboard.
                                        Having easy access to data makes it user-intuitive and enables users to derive actionable insights. </p>
                                    <div className="mt-3 about-list">

                                    </div>
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
