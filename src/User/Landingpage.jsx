import React from "react";
import { useState } from "react";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import MainSidebar from "./Mainsidebar";
import CrmDashboard from "../User/CrmDashboard";
import "../Style/LandingPage.css";

export default function Landingpage() {
  const [hamburger,sethamburger]=useState(true);
  const handleclickonbutton= (hamburger)=>{
    if(document.documentElement.clientWidth<=800)
    return {width:"100%",left:"0rem"};
    else
    return {width:!hamburger && "95%",
    left: !hamburger && "3.7rem"};
  }
  const handleclickonbutton1= (hamburger)=>{
    if(document.documentElement.clientWidth<=800)
    {
      return {display: hamburger && "none"};
    }
  }
  return (
    <>
    <div className="con1 d-flex">
      <div className="subcon1" style={handleclickonbutton1(hamburger)}>
      <MainSidebar hamburger={hamburger} sethamburger={sethamburger}  />
      </div>
      <div className="subcon2" style={handleclickonbutton(hamburger)}>
      <UserNavbar  hamburger={hamburger} sethamburger={sethamburger}  />
      <CrmDashboard />
      <UserFooter />
      </div>

    </div>
    </>
  );
}
