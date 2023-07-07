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

export default function AccountSettings({ preview }) {
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
          <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Ticket Description</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Ticket Description
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
              {/* <!-- Default box --> */}
              <div className="card">
                <div className="card-header">
                  <h3 className="ticket-head">Ticket Description</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                      <div className="row">
                        <div className="col-12 col-sm-4">
                          <div className="info-box bg-light">
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Ticket ID
                              </span>
                              <span className="info-box-number text-center text-muted mb-0">
                                2300
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="info-box bg-light">
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Date Created
                              </span>
                              <span className="info-box-number text-center text-muted mb-0">
                                2000
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="info-box bg-light">
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Status
                              </span>
                              <span className="info-box-number text-center text-muted mb-0">
                                20
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h4>Recent Activity</h4>
                          <div className="post">
                            <div className="user-block">
                              <img
                                className="img-circle img-bordered-sm"
                                src={dummy}
                                alt="user "
                              />
                              <span className="username">
                                <a href="#">User name</a>
                              </span>
                              <span className="description">
                                Shared publicly - 7:45 PM today
                              </span>
                            </div>
                            {/* <!-- /.user-block --> */}
                            <p>
                              Lorem ipsum represents a long-held tradition for
                              designers, typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore.
                            </p>
                          </div>

                          <div className="post clearfix">
                            <div className="user-block">
                              <img
                                className="img-circle img-bordered-sm"
                                src={dummy1}
                                alt="User Image"
                              />
                              <span className="username">
                                <a href="#">Responder</a>
                              </span>
                              <span className="description">
                                Sent you a message - 3 days ago
                              </span>
                            </div>
                            {/* <!-- /.user-block --> */}
                            <p>
                              Lorem ipsum represents a long-held tradition for
                              designers, typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore.
                            </p>
                          </div>

                          <div className="post">
                            <div className="user-block">
                              <img
                                className="img-circle img-bordered-sm"
                                src={dummy}
                                alt="user image"
                              />
                              <span className="username">
                                <a href="#">User Name</a>
                              </span>
                              <span className="description">
                                Shared publicly - 5 days ago
                              </span>
                            </div>
                            {/* <!-- /.user-block --> */}
                            <p>
                              Lorem ipsum represents a long-held tradition for
                              designers, typographers and the like. Some people
                              hate it and argue for its demise, but others
                              ignore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h4>Response Message</h4>
                      <form action="">
                        <div className="form-group row">
                          <label
                            for="inputMessage"
                            className="col-sm-2 col-form-label"
                          >
                            Message
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              className="form-control"
                              id="inputMessage"
                              placeholder="Type your Message here"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            for="inputMyFile"
                            className="col-sm-2 col-form-label"
                          >
                            Upload File
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="file"
                              id="inputMyFile"
                              name="filename"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-danger">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                      <h3 className="text-primary">
                        <i className="fa fa-paint-brush"></i> Ticket ID
                      </h3>
                      <p className="text-muted">Title will be here.</p>
                      <br />
                      <div className="text-muted">
                        <p className="text-sm">
                          Created By
                          <b className="d-block">User Name</b>
                        </p>
                      </div>

                      <h5 className="mt-5 text-muted">Project files</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="" className="btn-link text-secondary">
                            <i className="fa  fa-file-word-o"></i>{" "}
                            Functional-requirements.docx
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn-link text-secondary">
                            <i className="fa  fa-file-pdf-o"></i> UAT.pdf
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn-link text-secondary">
                            <i className="fa fa-fw fa-envelope"></i>{" "}
                            Email-from-flatbal.mln
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn-link text-secondary">
                            <i className="fa fa-fw fa-image "></i> Logo.png
                          </a>
                        </li>
                        <li>
                          <a href="" className="btn-link text-secondary">
                            <i className="fa fa-file-word-o"></i>{" "}
                            Contract-10_12_2014.docx
                          </a>
                        </li>
                      </ul>
                      <div className="text-center mt-5 mb-3 ">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary"
                          style={{ marginRight: "5px" }}
                        >
                          Add files
                        </a>
                        <a href="#" className="btn btn-sm btn-warning">
                          Close Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </section>
            {/* <!-- /.content --> */}
          </div>
        </div>

        <ControlSidebar />
        <UserFooter />
      </body>
    </>
  );
}
