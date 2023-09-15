import './App.css';
import "./Style/publicpages.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './PublicPages/Home';
import About from './PublicPages/About';
import CrmDashboard from "./User/CrmDashboard";
import Login from "./PublicPages/Login";
import Register from './PublicPages/Register';
import Services from "./PublicPages/Services";
import Resources from "./PublicPages/Resources";
import Features from "./PublicPages/Features";
import Pricing from "./PublicPages/Pricing";
import Aerospace from "./PublicPages/Aerospace";
import Transport from "./PublicPages/Transport";
import Computer from "./PublicPages/Computer";
import Telecommunication from "./PublicPages/Telecommunication";
import Pharmaceutical from "./PublicPages/Pharmaceutical";
import Food from "./PublicPages/Food";
import Healthcare from "./PublicPages/Healthcare.jsx";
import Construction from "./PublicPages/Construction";
import Agriculture from "./PublicPages/Agriculture";
import Education from "./PublicPages/Education";
import Electronics from "./PublicPages/Electronics";
import Contact from "./PublicPages/Contact-Us";
import LandingPage from "./User/Landingpage";



function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="crmdashboard" element={<CrmDashboard/>} />
          <Route path="login"  element={<Login/>} />
          <Route path="contact_us" element={<Contact/>} />
          <Route path="register" element={<Register/>} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="resources" element={<Resources/>} />
          <Route path="features" element={<Features/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="aerospace" element={<Aerospace/>} />
          <Route path="transport" element={<Transport/>} />
          <Route path="computer" element={<Computer/>} />
          <Route path="telecommunication" element={<Telecommunication/>} />
          <Route path="pharmaceutical" element={<Pharmaceutical/>} />
          <Route path="food" element={<Food/>} />
          <Route path="healthcare" element={<Healthcare/>} />
          <Route path="construction" element={<Construction/>} />
          <Route path="agriculture" element={<Agriculture/>} />
          <Route path="education" element={<Education/>} />
          <Route path="electronics" element={<Electronics/>} />

          <Route path="landingpage" element={<LandingPage/>} />


        </Routes>
      </BrowserRouter>
  </>
   
  );
}

export default App;
