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
import SetUser from "../Components/SetUser"

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
  return (
    <>
     {/* <AuthVerification /> */}
     <SetUser/>
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
            {/* <!-- Content Header (Page header) --> */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Starter Page</h1>
                    {/* <h2>hello br</h2> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Starter Page</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.content-header --> */}

            {/* <!-- Main content --> */}
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>

                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>

                        <a href="/" className="card-link">
                          Card link
                        </a>
                        <a href="/" className="card-link">
                          Another link
                        </a>
                      </div>
                    </div>

                    <div className="card card-primary card-outline">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>

                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="/" className="card-link">
                          Card link
                        </a>
                        <a href="/" className="card-link">
                          Another link
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.col-md-6 --> */}
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="m-0">Featured</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>

                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>

                    <div className="card card-primary card-outline">
                      <div className="card-header">
                        <h5 className="m-0">Featured</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>

                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.col-md-6 --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ControlSidebar />
        <UserFooter />
      </body>
    </>
  );
}
