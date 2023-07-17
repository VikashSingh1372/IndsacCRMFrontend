import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiGooglechat } from "react-icons/si";
import "../Styles/LandingPageSlideBar.css";
import {
  BsFillBagFill,
  BsFillCalendar2DateFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaListUl, FaBook, FaUserGraduate } from "react-icons/fa";
import { MdGrade, MdHeight } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";

export default function MainSidebar(props) {
  const [searchBtn, setSearchBtn] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const handelShow = () => setIsShow(!isShow);

  return (
    <>
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4 "
        style={{ position: "fixed", overflow: "scrollY", height: 1 }}
      >
        <Link to="index3.html" className="brand-link">
          <i class="fa fa-th mr-2 text-white" aria-hidden="true"></i>
          <span className="brand-text font-weight-light text-white">Dahsboard</span>
        </Link>
        <div className="sidebar ">
          <div className="user-panel mt-2 mb-3 d-flex">
              <i className="fa fa-cubes pl-1 mr-2 pt-2 pb-2 text-white" aria-hidden="true"></i>
              <Link to="/" className="d-block fs-5 pb-2 text-white">
                Markrting
              </Link>
        
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2 ">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
            <input type="checkbox" id="showItemsCheckbox1" />
              <label htmlFor="showItemsCheckbox1" id="showItemsBtn1" className="p-0 m-0" >
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Customer
                <span className="arrow"  />
              </label>
              <div id="itemContainer1">
                <ul>
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

              <input type="checkbox" id="showItemsCheckbox2" />
              <label htmlFor="showItemsCheckbox2" id="showItemsBtn2">
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Lead
                <span className="arrow" />
              </label>
              <div id="itemContainer2">
                <ul>
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

              <input type="checkbox" id="showItemsCheckbox3" />
              <label htmlFor="showItemsCheckbox3" id="showItemsBtn3">
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Vendor
                <span className="arrow" />
              </label>
              <div id="itemContainer3">
                <ul>
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

              <input type="checkbox" id="showItemsCheckbox4" />
              <label htmlFor="showItemsCheckbox4" id="showItemsBtn4">
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Email
                <span className="arrow" />
              </label>
              <div id="itemContainer4">
                <ul>
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

              <li className="mb-1 mr-1 d-flex">
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
                  <button className="btn btn-primary btnclass1 p-0">
                    open
                  </button>
                  <button className="btn btn-danger btnclass1 ">1</button>
                </div>
              </li>

              <input type="checkbox" id="showItemsCheckbox5" />
              <label htmlFor="showItemsCheckbox5" id="showItemsBtn5">
                <i className="fa fa-sticky-note-o mr-2" aria-hidden="true"></i>
                Interaction
                <span className="arrow" />
              </label>
              <div id="itemContainer5">
                <ul>
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

              <li className="mb-1 mr-1 d-flex">
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
                  <button className="btn btn-primary btnclass1 p-0">
                    open
                  </button>
                  <button className="btn btn-danger btnclass1 ">1</button>
                </div>
              </li>

              <input type="checkbox" id="showItemsCheckbox6" />
              <label htmlFor="showItemsCheckbox6" id="showItemsBtn6">
                <i className="fa fa-bars mr-2" aria-hidden="true"></i>
                Stock
                <span className="arrow" />
              </label>
              <div id="itemContainer6">
                <ul>
                  <li>
                    <a href="#" className=" tcolor">
                      <i className="fa fa-bars pl-3 m-1" aria-hidden="true"></i>
                      View Stock
                    </a>
                  </li>
                </ul>
              </div>

              <input type="checkbox" id="showItemsCheckbox7" />
              <label htmlFor="showItemsCheckbox7" id="showItemsBtn7">
                <i className="fa fa-indent mr-2" aria-hidden="true"></i>
                Sales
                <span className="arrow" />
              </label>
              <div id="itemContainer7">
                <ul>
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

              <input type="checkbox" id="showItemsCheckbox8" />
              <label htmlFor="showItemsCheckbox8" id="showItemsBtn8">
                <i className="fa fa-indent mr-2" aria-hidden="true"></i>
                Purchase
                <span className="arrow" />
              </label>
              <div id="itemContainer8">
                <ul>
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

              <input type="checkbox" id="showItemsCheckbox9" />
              <label htmlFor="showItemsCheckbox9" id="showItemsBtn9">
                <i className="fa fa-cog mr-2" aria-hidden="true"></i>
                Setting
                <span className="arrow" />
              </label>
              <div id="itemContainer9">
                <ul>
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

              <li className="mb-1">
                <button
                  className="btn btn-toggle align-items-center text-white btnclass collapsed p-1"
                >
                  <i
                    className="fa fa-times-circle-o mr-2"
                    aria-hidden="true"
                  ></i>
                  Sign Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
