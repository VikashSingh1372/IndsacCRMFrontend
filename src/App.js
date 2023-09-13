import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './publicpages/Home';
import About from './publicpages/About';
import CrmDashboard from "./Public/CrmDashboard";
import Login from "./publicpages/Login";
import Register from './publicpages/Register';
import Services from "./publicpages/Services";
import Resources from "./publicpages/Resources";
import Features from "./publicpages/Features";
import Pricing from "./publicpages/Pricing";
import Aerospace from "./publicpages/Aerospace";
import Transport from "./publicpages/Transport";
import Computer from "./publicpages/Computer";
import Telecommunication from "./publicpages/Telecommunication";
import Pharmaceutical from "./publicpages/Pharmaceutical";
import Food from "./publicpages/Food";
import Healthcare from "./publicpages/Healthcare.jsx";
import Construction from "./publicpages/Construction";
import Agriculture from "./publicpages/Agriculture";
import Education from "./publicpages/Education";
import Electronics from "./publicpages/Electronics";
import Contact from "./publicpages/Contact-Us";
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
