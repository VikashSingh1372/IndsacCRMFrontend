import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from "../App";


export default function Navbar() {

  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item" title="Search">
            <Link to="/logout" className="btn search-search">Logout</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/contact_us">Contact Us</Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item" title="Search">
            <Link to="/login" className="btn search-search">Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/contact_us">Contact Us</Link>
          </li>
        </>
      )
    }
  }

  return (
   <>
     <link rel="stylesheet" href="assets/css/style-starter.css" />
     <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet" />
     <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap" rel="stylesheet" />
   
   
   <section className=" w3l-header-4 header-sticky">
    <header className="absolute-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1><Link className="navbar-brand" to="/">
            <span className="fa fa-line-chart" aria-hidden="true" />
              INDSAC-CRM
            </Link></h1>
          <button className="navbar-toggler bg-gradient" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>					
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>					
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <div className="dropdown">
                <a className="dropbtn  nav-link align-items-center">Industry<span className="fa fa-chevron-down pl-1" aria-hidden="true" /></a>
                <div className="dropdown-content">
                  <Link to="/Aerospace">Aerospace </Link>
                  <Link to="/Transport"> Transport</Link>
                  <Link to="/Computer">  Computer</Link>
                  <Link to="/Telecommunication">Telecommunication</Link>
                  <Link to="/Pharmaceutical">Pharmaceutical</Link>
                  <Link to="/Food">  Food</Link>
                  <Link to="/Healthcare"> Health Care </Link>
                  <Link to="/Construction">Construction</Link>
                  <Link to="/Agriculture">   Agriculture</Link>
                  <Link to="/Education">  Education</Link>
                  <Link to="/Electronics">  Electronics</Link>
                </div>
              </div>
            </ul>
            <ul className="navbar-nav search-righ">
              <RenderMenu />
            </ul>
          </div>
        </nav></div>
    </header>
  </section>
   </>
  );
}
