import {Link} from "react-router-dom";
import '../Styles/Navbar.css';
const Navbar = () => {
    return (
        <header>
        <div className="nav">
            <div className="logo col-3">
             <h1>INDSAC-CRM</h1>
            </div>
            <div className="nav_links col-6">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/industry">Industry</a></li>
                </ul> 
            </div>
            <div className="btn col-3">
                <button>Login</button>
                <a>Contact us</a>
            </div>
        </div>
        </header>
    )
}
export default Navbar;