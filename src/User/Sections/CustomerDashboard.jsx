import React from "react";
import { useState } from "react";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import MainSidebar from "../Mainsidebar";
import "../../Style/LandingPage.css";
import { Avatar } from "@mui/material";
import DataTable from "./DataTable";
import { CustomerDetails } from "./CustomerDetails";

export default function CustomerDashboard() {
  const [showComponent, setShowComponent] = useState(false);
  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const handleToggle = () => {
    setShowComponent(!showComponent);
  };
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
    <>
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
            <div
              className="col-12 w-9 d-flex justify-content-center"
              style={{ paddingTop: 5, position: "relative" }}
            >
              <img
                src={null}
                alt=""
                style={{
                  width: "100%",
                  height: "5rem",
                  objectFit: "cover",
                }}
              />
              <Avatar
                src={null}
                className="my-5"
                style={{
                  position: "absolute",
                  left: "51%",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                  width: "6rem",
                  height: "6rem",
                }}
              ></Avatar>
            </div>
            <div className="col-12 justify-content-center">
              <div
                className="row justify-content-center"
                style={{ marginTop: "3.3rem" }}
              >
                <div className="col-12 bg-white mt-3">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <h3 className="text-primary">AdminLTE v3</h3>
                        <p className="text-muted">
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua butcher
                          retro keffiyeh dreamcatcher synth. Cosby sweater eu
                          banh mi, qui irure terr.
                        </p>
                        <br />
                      </div>
                      <div className="text-muted">
                        <p className="text-sm">
                          Client Company
                          <b className="d-block">Devient Inc</b>
                        </p>
                        <p className="text-sm">
                          Client Company
                          <b className="d-block">Devient Inc</b>
                        </p>
                      </div>
                      <div>
                        <h5 className="mt-5 text-muted font-weight-bold">
                          Project Files
                        </h5>
                        <ul className="list-unstyled">
                          <li>
                            <a href="/" className="btn-link text-secondary">
                              Functional-requirements.docx
                            </a>
                          </li>
                          <li>
                            <a href="/" className="btn-link text-secondary">
                              UAT.pdf
                            </a>
                          </li>
                          <li>
                            <a href="/" className="btn-link text-secondary">
                              Email-from-flatbal.mln
                            </a>
                          </li>
                          <li>
                            <a href="/" className="btn-link text-secondary">
                              Logo.png
                            </a>
                          </li>
                          <li>
                            <a href="/" className="btn-link text-secondary">
                              Contract-10_12_2014.docx
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button className="btn btn-md btn-primary m-2">
                          Add Files
                        </button>
                        <button className="btn btn-md btn-warning">
                          Report Contact
                        </button>
                        <button
                        className="btn btn-success m-2"
                        onClick={handleToggle}>
                          {showComponent ? "Close Details" : "Open Details"}
                        </button>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="info-box bg-light">
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Estimated Budget
                              </span>
                              <span className="info-box-text text-center text-muted mb-0">
                                <b style={{color:'black'}}>2300</b>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="info-box bg-light">
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Total Amount Spent
                              </span>
                              <span className="info-box-text text-center text-muted mb-0">
                                <b style={{color:'black'}}>2000</b>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="info-box bg-light">
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Estimated Project Duration
                              </span>
                              <span className="info-box-text text-center text-muted mb-0 ">
                                <b style={{color:'black'}}>20</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DataTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showComponent ? <CustomerDetails /> : null}
          <UserFooter />
        </div>
      </div>
    </>
  );
}
