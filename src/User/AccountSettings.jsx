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
import { Button, Form, Modal, ModalFooter } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import { Link } from "react-router-dom";
import Avatar from "react-avatar-edit";

export default function AccountSettings() {
  const [src, setSrc] = useState(null)
  const [preview, setPreview] = useState(null)
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
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
  const onCrop=(view)=>{
    setPreview(view)
  }
  const onClose=()=>{
    setPreview(null)
  }
  console.log(preview)
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
                    <h1>Account Settings</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Account Settings
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    {/* <!-- Profile Image --> */}
                    <div className="card card-primary card-outline">
                      <div className="card-body box-profile">
                        <div className="text-center">
                          <img
                            className="profile-user-img img-fluid img-circle"
                            src={preview?preview:dummy}
                            alt="Upload New"
                            onClick={() => setModalShow(true)}
                          />
                          <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Upload Image</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="upload-img">
                              <Avatar
                              width={400}
                              height={300}
                              onCrop={onCrop}
                              onClose={onClose}
                              src={src}
                              />
                              </div>
                            </Modal.Body>
                            <ModalFooter>
                              <button className="btn btn-primary">Upload</button>
                            </ModalFooter>
                          </Modal>
                        </div>

                        <h3 className="profile-username text-center">
                          User Name
                        </h3>
                        <ul className="list-group list-group-unbordered mb-3">
                          <li className="list-group-item">
                            <b>Followers</b>{" "}
                            <a className="float-right">1,322</a>
                          </li>
                          <li className="list-group-item">
                            <b>Following</b> <a className="float-right">543</a>
                          </li>
                          <li className="list-group-item">
                            <b>Friends</b> <a className="float-right">13,287</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}

                    {/* <!-- About Me Box --> */}

                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-md-9">
                    <div className="card">
                      <div className="card-header p-2">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#profile"
                              data-toggle="tab"
                            >
                              Profile
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#about-me"
                              data-toggle="tab"
                            >
                              About Me
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#password"
                              data-toggle="tab"
                            >
                              Password
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#notifications"
                              data-toggle="tab"
                            >
                              Notifications
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#tickets"
                              data-toggle="tab"
                            >
                              Tickets
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#payment"
                              data-toggle="tab"
                            >
                              Payment
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content">
                          <div className="active tab-pane" id="profile">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label
                                  for="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  Name
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputName"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputEmail"
                                  className="col-sm-2 col-form-label"
                                >
                                  Email
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button
                                    type="submit"
                                    className="btn btn-danger"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>

                          <div className="tab-pane" id="about-me">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label
                                  for="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  Skills
                                </label>
                                <div className="col-sm-10">
                                  <Multiselect
                                    isObject={false}
                                    onKeyPressFn={function noRefCheck() {}}
                                    onRemove={function noRefCheck() {}}
                                    onSearch={function noRefCheck() {}}
                                    onSelect={function noRefCheck() {}}
                                    options={[
                                      "Html",
                                      "Css",
                                      "Java Script",
                                      "React",
                                      "Bootstrap",
                                    ]}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputState"
                                  className="col-sm-2 col-form-label"
                                >
                                  State
                                </label>
                                <div className="col-sm-10">
                                <input
                                    style={{ marginBottom: "5px" }}
                                    type="text"
                                    className="form-control"
                                    id="inputState"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputCountry"
                                  className="col-sm-2 col-form-label"
                                >
                                  Country
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    style={{ marginBottom: "5px" }}
                                    type="text"
                                    className="form-control"
                                    id="inputCountry"
                                    placeholder="Country"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputNote"
                                  className="col-sm-2 col-form-label"
                                >
                                  Notes
                                </label>
                                <div className="col-sm-10">
                                <textarea
                                    className="form-control"
                                    id="inputLocation"
                                    placeholder="Type your Notes here"
                                    required=""
                                  ></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button
                                    type="submit"
                                    className="btn btn-secondary"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                            <div className="form-group row">
                                <label
                                  for="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  Education
                                </label>
                                <div className="col-sm-10">
                                  <Form.Select
                                    aria-label="Default select example"
                                    className="form-control"
                                  >
                                    <option>Select One</option>
                                    <option value="1">
                                      Elementary School Certificate
                                    </option>
                                    <option value="2">
                                      Primary School Leaving Certificate
                                    </option>
                                    <option value="3">
                                      General Certificate of Secondary Education
                                      (GCSE)
                                    </option>
                                    <option value="4">
                                      High School Diploma
                                    </option>
                                    <option value="5">
                                      Secondary School Certificate
                                    </option>
                                    <option value="6">
                                      Advanced Level (A-Level)
                                    </option>
                                    <option value="7">
                                      International Baccalaureate (IB)
                                    </option>
                                    <option value="8">
                                      General Certificate of Secondary Education
                                      (GCSE)
                                    </option>
                                    <option value="9">
                                      Bachelor's Degree (e.g., Bachelor of Arts,
                                      Bachelor of Science)
                                    </option>
                                    <option value="10">
                                      Bachelor of Technology
                                    </option>
                                    <option value="11">
                                      Bachelor of Engineering
                                    </option>
                                    <option value="12">
                                      Bachelor of Education
                                    </option>
                                    <option value="13">
                                      Master's Degree (e.g., Master of Arts,
                                      Master of Science)
                                    </option>
                                    <option value="14">
                                      Master of Business Administration (MBA)
                                    </option>
                                    <option value="15">
                                      Master of Engineering
                                    </option>
                                    <option value="16">
                                      Master of Education
                                    </option>
                                    <option value="17">
                                      Doctor of Philosophy (Ph.D.)
                                    </option>
                                    <option value="18">
                                      Doctor of Medicine (M.D.)
                                    </option>
                                    <option value="19">
                                      Doctor of Education (Ed.D.)
                                    </option>
                                    <option value="20">
                                      Doctor of Engineering (Eng.D.)
                                    </option>
                                    <option value="21">
                                      Juris Doctor (J.D.) - for lawyers
                                    </option>
                                    <option value="22">
                                      Doctor of Medicine (M.D.) - for physicians
                                    </option>
                                    <option value="23">
                                      Doctor of Pharmacy (Pharm.D.) - for
                                      pharmacists
                                    </option>
                                    <option value="24">
                                      Certificate/Diploma in a specific trade or
                                      skill
                                    </option>
                                    <option value="25">
                                      National Vocational Qualifications (NVQ)
                                    </option>
                                    <option value="26">
                                      City and Guilds Qualifications
                                    </option>
                                    <option value="27">
                                      Certified Public Accountant (CPA)
                                    </option>
                                    <option value="28">
                                      Project Management Professional (PMP)
                                    </option>
                                    <option value="29">
                                      Cisco Certified Network Associate (CCNA)
                                    </option>
                                    <option value="30">
                                      Microsoft Certified Professional (MCP)
                                    </option>
                                  </Form.Select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputUname"
                                  className="col-sm-2 col-form-label"
                                >
                                  University/School Name
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputUname"
                                    placeholder="University/School Name"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputLocation"
                                  className="col-sm-2 col-form-label"
                                >
                                  University Location
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    style={{ marginBottom: "5px" }}
                                    type="text"
                                    className="form-control"
                                    id="inputLocation"
                                    placeholder="Location"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button
                                    type="submit"
                                    className="btn btn-success"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <!-- /.tab-pane --> */}

                          <div className="tab-pane" id="password">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label
                                  for="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  Old Password
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputName"
                                    placeholder="Old Password"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  New Password
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputName"
                                    placeholder="New Password"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  for="inputName"
                                  className="col-sm-2 col-form-label"
                                >
                                  Confirm Password
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="inputName"
                                    placeholder="Confirm Password"
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button
                                    type="submit"
                                    className="btn btn-info"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* <!-- /.tab-pane --> */}

                          <div className="tab-pane" id="notifications">
                            <div className="card card-secondary">
                              {/* <!-- /.card-header --> */}
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-sm-6">
                                    {/* <!-- checkbox --> */}
                                    <div className="form-group">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          className="custom-control-input"
                                          type="checkbox"
                                          id="customCheckbox1"
                                          value="option1"
                                        />
                                        <label
                                          for="customCheckbox1"
                                          className="custom-control-label"
                                        >
                                          Emails
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          className="custom-control-input"
                                          type="checkbox"
                                          id="customCheckbox2"
                                          value="option2"
                                        />
                                        <label
                                          for="customCheckbox2"
                                          className="custom-control-label"
                                        >
                                          Subscribes
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="tickets">
                            <div className="row">
                              <div className="col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <button
                                      className="btn btn-success"
                                      onClick={() => setModalShow2(true)}
                                    >
                                      Create Ticket
                                    </button>
                                    <Modal
                                      show={modalShow2}
                                      onHide={() => setModalShow2(false)}
                                      size="lg"
                                      aria-labelledby="contained-modal-title-vcenter"
                                      centered
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title>Ticket Create</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <div className="tab-pane">
                                          <form className="form-horizontal">
                                            <div className="form-group row">
                                              <label
                                                for="inputTo"
                                                className="col-sm-2 col-form-label"
                                              >
                                                To
                                              </label>
                                              <div className="col-sm-10">
                                                <Form.Select
                                                  aria-label="Default select example"
                                                  className="form-control"
                                                >
                                                  <option>Select One</option>
                                                  <option value="1">
                                                    CloudeNode
                                                  </option>
                                                  <option value="2">
                                                    Institute
                                                  </option>
                                                </Form.Select>
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label
                                                for="inputTitle"
                                                className="col-sm-2 col-form-label"
                                              >
                                                Title
                                              </label>
                                              <div className="col-sm-10">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="inputTitle"
                                                  placeholder="Input Title"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label
                                                for="inputPriority"
                                                className="col-sm-2 col-form-label"
                                              >
                                                Priority
                                              </label>
                                              <div className="col-sm-10">
                                                <Multiselect
                                                  displayValue="key"
                                                  onKeyPressFn={function noRefCheck() {}}
                                                  onRemove={function noRefCheck() {}}
                                                  onSearch={function noRefCheck() {}}
                                                  onSelect={function noRefCheck() {}}
                                                  options={[
                                                    {
                                                      cat: "Group 1",
                                                      key: "Option 1",
                                                    },
                                                    {
                                                      cat: "Group 1",
                                                      key: "Option 2",
                                                    },
                                                    {
                                                      cat: "Group 1",
                                                      key: "Option 3",
                                                    },
                                                  ]}
                                                  singleSelect
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label
                                                for="inputDescription"
                                                className="col-sm-2 col-form-label"
                                              >
                                                Description
                                              </label>
                                              <div className="col-sm-10">
                                                <textarea
                                                  className="form-control"
                                                  id="inputDescription"
                                                  placeholder="Type your Description here"
                                                  required=""
                                                ></textarea>
                                              </div>
                                            </div>
                                            <div className="form-group row">
                                              <label
                                                for="inputFile"
                                                className="col-sm-2 col-form-label"
                                              >
                                                File Upload
                                              </label>
                                              <div className="col-sm-10">
                                                <input
                                                  type="file"
                                                  id="inputFile"
                                                  name="filename"
                                                  className="form-control"
                                                />
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button>Submit</Button>
                                      </Modal.Footer>
                                    </Modal>
                                    <div className="card-tools">
                                      <div
                                        className="input-group input-group-sm"
                                        style={{ width: "150px" }}
                                      >
                                        <input
                                          type="text"
                                          name="table_search"
                                          className="form-control float-right"
                                          placeholder="Search"
                                        />

                                        <div className="input-group-append">
                                          <button
                                            type="submit"
                                            className="btn btn-default"
                                          >
                                            <i className="fa fa-search"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- /.card-header --> */}
                                  <div
                                    className="card-body table-responsive p-0"
                                    style={{ height: "300px" }}
                                  >
                                    <table className="table table-head-fixed text-nowrap">
                                      <thead>
                                        <tr>
                                          <th>Ticket ID</th>
                                          <th>Date</th>
                                          <th>Status</th>
                                          <th>Title</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <Link to="/ticket-description">
                                              183
                                            </Link>
                                          </td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-success">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>219</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-warning">
                                              Pending
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>657</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-primary">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>175</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-danger">
                                              Denied
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>134</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-success">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>494</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-warning">
                                              Pending
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>832</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-primary">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>982</a>
                                          </td>

                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-danger">
                                              Denied
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <!-- /.card-body --> */}
                                </div>
                                {/* <!-- /.card --> */}
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="payment">
                            <div className="row">
                              <div className="col-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h5 className="payment-head">
                                      Payment Status
                                    </h5>
                                    <div className="card-tools">
                                      <div
                                        className="input-group input-group-sm"
                                        style={{ width: "150px" }}
                                      >
                                        <input
                                          type="text"
                                          name="table_search"
                                          className="form-control float-right"
                                          placeholder="Search"
                                        />

                                        <div className="input-group-append">
                                          <button
                                            type="submit"
                                            className="btn btn-default"
                                          >
                                            <i className="fa fa-search"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- /.card-header --> */}
                                  <div
                                    className="card-body table-responsive p-0"
                                    style={{ height: "300px" }}
                                  >
                                    <table className="table table-head-fixed text-nowrap">
                                      <thead>
                                        <tr>
                                          <th>ID</th>
                                          <th>User</th>
                                          <th>Date</th>
                                          <th>Status</th>
                                          <th>Reason</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <a>183</a>
                                          </td>
                                          <td>John Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-success">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>219</a>
                                          </td>
                                          <td>Alexander Pierce</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-warning">
                                              Pending
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>657</a>
                                          </td>
                                          <td>Bob Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-primary">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>175</a>
                                          </td>
                                          <td>Mike Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-danger">
                                              Denied
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>134</a>
                                          </td>
                                          <td>Jim Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-success">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>494</a>
                                          </td>
                                          <td>Victoria Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-warning">
                                              Pending
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>832</a>
                                          </td>
                                          <td>Michael Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-primary">
                                              Approved
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <a>982</a>
                                          </td>
                                          <td>Rocky Doe</td>
                                          <td>11-7-2014</td>
                                          <td>
                                            <span className="tag tag-danger">
                                              Denied
                                            </span>
                                          </td>
                                          <td>
                                            Bacon ipsum dolor sit amet salami
                                            venison chicken flank fatback doner.
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <!-- /.card-body --> */}
                                </div>
                                {/* <!-- /.card --> */}
                              </div>
                            </div>
                          </div>
                          {/* <!-- /.tab-pane --> */}
                        </div>
                        {/* <!-- /.tab-content --> */}
                      </div>
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
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
