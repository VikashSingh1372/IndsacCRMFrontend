import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import indsacmanagingdocuments from "../Images/indsac-managing-documents.gif";


export default function Docmangement() {
    return (
        <>

            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Ensure the right people have access to the right documents and associate these documents with their respective deals with a centralized repository for all your sales collaterals" />
            <meta property="og:title" content="Document Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/docmangement" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/indsac-managing-documents.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/indsac-managing-documents.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Ensure the right people have access to the right documents and associate these documents with their respective deals with a centralized repository for all your sales collaterals" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Document Management",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/docmangement"`}`
            </script>

            <title>Document Management | Document Management :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/food">Food Industry<span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active"> Managing Documents </li>
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
                                <img src={indsacmanagingdocuments} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4> Managing Documents</h4>
                                <p class="para">Centralized access to datasheets and other relevant documents.<br /><br /> Ensure the right people have access
                                    to the right documents and associate these documents with their respective deals with a centralized repository
                                    for all your sales collaterals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>Benefits of a Document Management</h3>
                            <p class="para">    </p>
                        </div>
                        <p class="para"><h4>1. Full Document Management within CRM</h4><br />
                            Having a document automation platform integrated with your CRM, you get the privilege of handling the
                            communication activities and processing documents in a single window.
                            <br /><br />Create, access, and edit all of your files from the CRM system. Use the stored in it contact information
                            to immediately share the produced papers with your colleagues and clients. The regular update of the document
                            status in the system makes it easy to track the work progress. </p>
                        <br />      <br />
                        <p class="para"><h4>2. Reduced Time Spent on Document Creation </h4> <br />
                            Facilitate your business processes by reducing the time spent on producing documents.
                            With the integration, gone is the need to manually insert the case-specific information into a template.
                            <br /><br />
                            The relevant data from a CRM system, including information about contacts, products, and pricing,
                            is automatically populated into the designated fields in your document.  </p>
                        <br /><br />
                        <p class="para"><h4>3. Workflow Automation</h4> <br />
                            Forget about scanning documents and transferring them to your colleagues and clients via email. With an integrated system in your office, you can send all of your papers for approval or signature directly from a CRM system.
                            All the required contact information is already stored in it, making sharing an easy activity.</p>
                        <br />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
