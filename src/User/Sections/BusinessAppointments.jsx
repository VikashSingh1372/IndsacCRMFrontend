import React, { useState } from "react";
import MainSidebar from "../Mainsidebar";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";

export default function BusinessAppointments() {
  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const handleScreenEnter = () => {
    setFullScreen(false);
    document.body.requestFullscreen();
  };
  const handleScreenExit = () => {
    setFullScreen(true);
    document.exitFullscreen();
  };
  const handelShow = () => setIsSearchShow(!isSearchShow);
  const handelRightMenuShow = () => setisRightMenu(!isRightMenu);
  const handleclickonbutton = (hamburger) => {
    if (document.documentElement.clientWidth <= 800)
      return { width: "100%", left: "0rem" };
    else
      return {
        width: !hamburger && "-webkit-fill-available",
        left: !hamburger && "3.7rem",
      };
  };
  const handleclickonbutton1 = (hamburger) => {
    if (document.documentElement.clientWidth <= 800) {
      return { display: hamburger && "none" };
    }
  };
 
  return (
    <div className="con1 d-flex">
      <div className="subcon1" style={handleclickonbutton1(hamburger)}>
        <MainSidebar hamburger={hamburger} sethamburger={sethamburger} />
      </div>
      <div className="subcon2" style={handleclickonbutton(hamburger)}>
        <UserNavbar
          hamburger={hamburger}
          sethamburger={sethamburger}
          handelRightMenuShow={handelRightMenuShow}
          handelShow={handelShow}
          isSearchShow={isSearchShow}
          handleScreenEnter={handleScreenEnter}
          handleScreenExit={handleScreenExit}
          fullScreen={fullScreen}
        />
        <div>
            
        </div>
        <UserFooter />
      </div>
    </div>
  );
}
