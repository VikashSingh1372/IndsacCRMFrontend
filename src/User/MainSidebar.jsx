import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiGooglechat } from "react-icons/si";
import {
  BsFillBagFill,
  BsFillCalendar2DateFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaListUl, FaBook, FaUserGraduate } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import "../Styles/LandingPageSlideBar.css";

export default function MainSidebar(props) {
  const [searchBtn, setSearchBtn] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const handelShow = () => setIsShow(!isShow);

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 slidebarclass">
        <div className="flex-shrink-0  bg-dark">
          <a href="/" className="d-flex text-decoration-none bgcolor">
            <span className="fs-6 fw-semibold pl-2 m-1">
              <i class="fa fa-th mr-2" aria-hidden="true"></i>
              Dashboard{" "}
            </span>
          </a>
          <a href="/" className="d-flex pb-2 mb-2 text-decoration-none bgcolor">
            <span className="fs-6 fw-semibold pl-2 m-1">
              <i className="fa fa-cubes mr-2" aria-hidden="true"></i>
              Marketing{" "}
            </span>
          </a>

          <ul className="list-unstyled p-0  m-0">
            <li className="mb-1">
              <button
                className="btn   btnclass text-white  collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Customer
              </button>
              <div className="collapse" id="home-collapse" style={{}}>
                <ul className="bgcolor tcolor list-unstyled fw-normal  pb-1 small">
                  <li>
                    <a href="#" className="tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Customer Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tcolor">
                      <i
                        className="fa fa-user-plus pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      New Customer
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn   btnclass text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Lead
              </button>
              <div className="collapse" id="dashboard-collapse" style={{}}>
                <ul className=" bgcolor   list-unstyled fw-normal  pb-1 small">
                  <li>
                    <a href="#" className="tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Lead Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tcolor">
                      <i
                        className="fa fa-user-plus pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      New Lead
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn   btnclass text-white collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Vendor
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="  bgcolor  list-unstyled  fw-normal pb-1 small">
                  <li>
                    <a href="#" className="tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Vendor Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tcolor">
                      <i
                        className="fa fa-user-plus pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      New Vendor
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn align-items-center text-white btnclass collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#Email-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Email
              </button>
              <div className="collapse" id="Email-collapse">
                <ul className="list-unstyled bgcolor  fw-normal pb-1 small">
                  <li>
                    <a href="#" className=" tcolor rounded">
                      <i
                        className="fa fa-envelope-o pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Send Bulk Mail
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-envelope-o pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Send Mail
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mb-1 d-flex">
              <div className="col-5 align-items-left">
                <button
                  className="btn text-white p-0"
                  style={{ fontSize: 18, border: "none" }}
                >
                  <i className="fa fa-tasks mr-2" aria-hidden="true"></i>
                  Task
                </button>
              </div>
              <div className="col-7 text-right p-0">
                <button className="btn btn-primary btnclass1 p-0">open</button>
                <button className="btn btn-danger btnclass1 ">1</button>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn   align-items-center text-white btnclass collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#Interaction-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-sticky-note-o mr-2" aria-hidden="true"></i>
                Interaction
              </button>
              <div className="collapse" id="Interaction-collapse">
                <ul className="  bgcolor   list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-sticky-note-o pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Interaction Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-sticky-note-o pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Search Interaction
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mb-1 mr-0 d-flex">
              <div className="col-8 m-0 p-0">
                <button
                  className="btn text-white p-0 m-0 "
                  style={{ fontSize: 18, border: "none" }}
                >
                  <i className="fa fa-file-text mr-1 ml-1"></i>
                  Service Request
                </button>
              </div>
              <div className="col-4 p-0 text-right ">
                <button className="btn btn-primary btnclass1 p-0">open</button>
                <button className="btn btn-danger btnclass1 ">1</button>
              </div>
            </li>

            <li className="mb-1">
              <button
                className="btn   align-items-center text-white btnclass collapsed pl-2"
                data-bs-toggle="collapse"
                data-bs-target="#Stock-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-bars mr-2" aria-hidden="true"></i>
                Stock
              </button>
              <div className="collapse" id="Stock-collapse">
                <ul className="  bgcolor   list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-bars pl-3 m-1" aria-hidden="true"></i>
                      View Stock
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="mb-1">
              <button
                className="btn   align-items-center text-white btnclass collapsed pl-2"
                data-bs-toggle="collapse"
                data-bs-target="#Sale-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-indent mr-2" aria-hidden="true"></i>
                Sales
              </button>
              <div className="collapse" id="Sale-collapse">
                <ul className="   bgcolor  list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-th pl-3 m-1" aria-hidden="true"></i>
                      Invoice Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-file pl-3 m-1" aria-hidden="true"></i>
                      Create New Invoice
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-th pl-3 m-1" aria-hidden="true"></i>
                      Purchase Order Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-file pl-3 m-1" aria-hidden="true"></i>
                      Create New Purchase Order
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-th pl-3 m-1" aria-hidden="true"></i>
                      Proforma Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-file pl-3 m-1" aria-hidden="true"></i>
                      Create New Proforma Invoice
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-th pl-3 m-1" aria-hidden="true"></i>
                      Quotation Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-file pl-3 m-1" aria-hidden="true"></i>
                      Create New Quotation
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn   align-items-center text-white btnclass collapsed pl-2"
                data-bs-toggle="collapse"
                data-bs-target="#purchase-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-indent mr-2" aria-hidden="true"></i>
                Purchase
              </button>
              <div className="collapse" id="purchase-collapse">
                <ul className="   bgcolor  list-unstyled fw-normal pb-1 small">
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-th pl-3 m-1" aria-hidden="true"></i>
                      Expence Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-th pl-3 m-1" aria-hidden="true"></i>
                      New Expence
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn   align-items-center text-white btnclass collapsed pl-2"
                data-bs-toggle="collapse"
                data-bs-target="#setting-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-cog mr-2" aria-hidden="true"></i>
                Setting
              </button>
              <div className="collapse" id="setting-collapse">
                <ul className="list-unstyled bgcolor fw-normal pb-1 small">
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Manage User
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Invoice Setting
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      HRM
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" tcolor">
                      <i
                        className="fa fa-tachometer pl-3 m-1"
                        aria-hidden="true"
                      ></i>
                      Add Employee
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn   align-items-center text-white btnclass collapsed pl-2"
                data-bs-toggle="collapse"
                data-bs-target="#setting-collapse"
                aria-expanded="false"
              >
                <i className="fa fa-times-circle-o mr-2" aria-hidden="true"></i>
                Sign Out
              </button>
            </li>
            
            {/* <li className="border-top my-3" /> */}
          </ul>
        </div>
      </aside>
    </>
  );
}
