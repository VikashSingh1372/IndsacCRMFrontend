import React from "react";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import MainSidebar from "./Mainsidebar";
import CrmDashboard from "../User/CrmDashboard";

export default function Landingpage() {
  return (
    <>
      <MainSidebar />
      <UserNavbar />

      <CrmDashboard />

      <UserFooter />
    </>
  );
}
