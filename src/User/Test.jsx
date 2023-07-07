import React, { useState } from "react";
import "../Styles/LandingPage.css";
import logo from "../Images/Logo.png";
import dummy from "../Images/user-dummy-160x160.jpg";
import dummy1 from "../Images/user1-128x128.jpg";
import dummy2 from "../Images/user8-128x128.jpg";
import dummy3 from "../Images/user3-128x128.jpg";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import ControlSidebar from "./ControlSidebar";
import MainSidebar from "./MainSidebar";
import AuthVerification from "../Components/AuthVerify";
import TestSeries from "../Course/TestSeries/TestSeries"
import TSCategory from "../Course/TestSeries/TSCategory";
import QuestionCategory from "../Course/TestSeries/QuestionCategory"; 

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
  const [showQuestioncategory, setShowQuestionCategory] = useState(false);
  const [showTsCategory, setShowTsCategory] = useState(false);
  const handleScreen = () => {
    setFullScreen(false);
    document.body.requestFullscreen();
  };
  const handleScreen2 = () => {
    setFullScreen(true);
    document.exitFullscreen();
  };
  return (
    <>
     <AuthVerification />
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
         
            {/* <!-- Content Header (Page header) --> */}
            {!showQuestioncategory && !showTsCategory &&<TestSeries setShowQuestionCategory={setShowQuestionCategory}
                        setShowTsCategory = {setShowTsCategory}
             />}
             {showQuestioncategory && <QuestionCategory />}
             {showTsCategory && <TSCategory />}
            {/* <!-- /.content-header --> */}
             
           
           
          
        </div>
       
        <ControlSidebar />
        <UserFooter />
      </body>
    </>
  );
}
