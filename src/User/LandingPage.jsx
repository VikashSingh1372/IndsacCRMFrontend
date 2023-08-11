import React, { useState } from "react";
import "../Styles/LandingPage.css";
import logo from "../Images/Logo.png";
import dummy from "../Images/user-dummy-160x160.jpg";
import dummy1 from "../Images/user1-128x128.jpg";
import dummy2 from "../Images/user8-128x128.jpg";
import dummy3 from "../Images/user3-128x128.jpg";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import NewCustomer from "../Public/NewCustomer";
import ControlSidebar from "./ControlSidebar";
import MainSidebar from "./MainSidebar";
import AuthVerification from "../Components/AuthVerify";
import SetUser from "../Components/SetUser";
import { Link, Outlet, useOutlet } from "react-router-dom";
import Home from "./Home";
import CreateTask from "../Public/CreateTask";
import Interaction from "../Public/Interaction";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handelShow = () => setIsShow(!isShow);
  const handelShow2 = () => setIsShow2(!isShow2);
  const handelShow3 = () => setIsShow3(!isShow3);

  const [fullScreen, setFullScreen] = useState(true);
  const handleScreen = () => {
    setFullScreen(false);
    document.body.requestFullscreen();
  };
  const handleScreen2 = () => {
    setFullScreen(true);
    document.exitFullscreen();
  };
  // const outlet=useOutlet();
  // declare function useOutlet(): React.ReactElement | null;
  return (
    <>
      {/* <AuthVerification /> */}
      <SetUser />
      <body
        className={`sidebar-mini ${
          isOpen ? " sidebar-closed sidebar-collapse  " : " sidebar-open "
        } ${isShow2 ? "control-sidebar-slide-open " : ""}`}
      >
        <MainSidebar
          logo={logo}
          dummy={dummy}
          isShow={isShow}
          handelShow={handelShow}
        />
        <div className="wrapper">
          <UserNavbar
            dummy1={dummy1}
            dummy2={dummy2}
            dummy3={dummy3}
            toggle={toggle}
            handelShow2={handelShow2}
            handelShow3={handelShow3}
            isShow3={isShow3}
            handleScreen={handleScreen}
            handleScreen2={handleScreen2}
            fullScreen={fullScreen}
          />

          {/* <!-- Content Wrapper. Contains page content --> */}

          <div className="content-wrapper">
            {/* <Home /> */}
            <Outlet/>
            {/* <NewCustomer/> */}
            <CreateTask/>
            <Interaction />
          </div>
        </div>


        {/* https://youtube.com/shorts/PM3qb0C7TJ8?feature=share */}

        <ControlSidebar />
        <UserFooter />
      </body>
    </>
  );
}
