import {Link} from "react-router-dom";
import '../styles/navbar.css';
const Navbar = () => {
    return (
        <header>
        <div className="nav">
            <div className="logo">
             <h1> INDSAC-CRM</h1>
            </div>
            <div className="nav_links">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/industry">Industry</Link></li>
                </ul> 
            </div>
            <div className="btn">
                <button>Login</button>
                <h3>Contact us</h3>
            </div>
        </div>
        </header>
    )
}
export default Navbar;