import { Link } from 'react-router-dom'




export default function Navbar() {

  return (
   <>
   <section className=" w3l-header-4 header-sticky">
    <header className="absolute-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <h1><a className="navbar-brand" href="index.jsp"><span className="fa fa-line-chart" aria-hidden="true" />
              INDSAC-CRM
            </a></h1>
          <button className="navbar-toggler bg-gradient" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.jsp">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="navigate\about.jsp">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="navigate\services.jsp">Services</a>					
              </li>
              <li className="nav-item">
                <a className="nav-link" href="navigate\resources.jsp">Resources</a>					
              </li>
              <li className="nav-item">
                <a className="nav-link" href="navigate\feature.jsp">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="navigate\pricing.jsp">Pricing</a>
              </li>
              <div className="dropdown">
                <a className="dropbtn  nav-link">Industry<span className="fa fa-chevron-down" aria-hidden="true" /></a>
                <div className="dropdown-content">
                  <a href="navigate\Aerospace.jsp">Aerospace </a>
                  <a href="navigate\Transport.jsp"> Transport</a>
                  <a href="navigate\Computer.jsp">  Computer</a>
                  <a href="navigate\Telecommunication.jsp">Telecommunication</a>
                  <a href="navigate\Pharmaceutical.jsp">Pharmaceutical</a>
                  <a href="navigate\Food.jsp">  Food</a>
                  <a href="navigate\Health Care.jsp"> Health Care </a>
                  <a href="navigate\Construction.jsp">Construction</a>
                  <a href="navigate\Agriculture.jsp">   Agriculture</a>
                  <a href="navigate\Education.jsp">  Education</a>
                  <a href="navigate\Electronics.jsp">  Electronics</a>
                </div>
              </div>
            </ul>
            <ul className="navbar-nav search-righ">
              <li className="nav-item" title="Search"><a href="login.jsp" className="btn search-search">Login</a></li>
              <li className="nav-item">
                <a className="nav-link" href="navigate\contact.jsp">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav></div>
    </header>
  </section>
   </>
  );
}
