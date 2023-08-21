import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SiGooglechat } from "react-icons/si";
import "../Styles/LandingPageSlideBar.css";
import {
  BsFillBagFill,
  BsFillCalendar2DateFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaListUl, FaBook, FaUserGraduate } from "react-icons/fa";
import { MdGrade, MdHeight } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegStickyNote } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaIndent } from "react-icons/fa";
import { RiFile3Fill } from "react-icons/ri";
import { PiGridNineFill } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import  '../Styles/LandingPageSlideBar.css';
export default function MainSidebar(props) {
  const [searchBtn, setSearchBtn] = useState(true);

  const [isComShow, setIsComShow] = useState(false);
  const handelComShow = () => {
    setIsComShow(!isComShow);
  };

  const [isShow, setIsShow] = useState(false);
  const handelShow = () => {
    setIsShow(!isShow);
  };

  const [isShowVen, setIsShowVen] = useState(false);
  const handelShowVen = () => {
    setIsShowVen(!isShowVen);
  };

  const [isShowEmail, setIsShowEmail] = useState(false);
  const handelShowEmail = () => {
    setIsShowEmail(!isShowEmail);
  };

  const [isShowInt, setIsShowInt] = useState(false);
  const handelShowInt = () => {
    setIsShowInt(!isShowInt);
  };
  const [isShowStock, setIsShowStock] = useState(false);
  const handelShowStock = () => {
    setIsShowStock(!isShowStock);
  };
  const [isShowSale, setIsShowSale] = useState(false);
  const handelShowSale = () => {
    setIsShowSale(!isShowSale);
  };
  const [isShowPur, setIsShowPur] = useState(false);
  const handelShowPur = () => {
    setIsShowPur(!isShowPur);
  };
  const [isShowSet, setIsShowSet] = useState(false);
  const handelShowSet = () => {
    setIsShowSet(!isShowSet);
  };

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ position: "fixed", overflow: "scrollY", height: 1 }}
      >
        <Link to="index3.html" className="brand-link">
          <PiGridNineFill className="nav-icon mx-2  fs-3" />
          <span className="brand-text font-weight-light">Dashboard</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <i
                className="fa fa-cubes pl-2 fs-5 pt-2 m-0 text-white"
                aria-hidden="true"
              ></i>
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                Marketing
              </Link>
            </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item ">
                <Link to="/" className="nav-link ">
                  <FaUserAlt className="nav-icon" />
                  <p>Customer
                  <i
                    onClick={handelComShow}
                    className={`${
                      isComShow
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isComShow ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link ">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                    Customer Dashboard
                  </p>
                </Link>
              </li>

              <li
                className={`${
                  isComShow ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="newcustomer" className="nav-link">
                  <FaUserPlus className="nav-icon" />
                  <p
                    // className={props.activeButton === "groups" ? "active" : ""}
                    // onClick={() => props.onButtonClick("groups")}
                  >
                    New Customer
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaUserAlt className="nav-icon" />
                  <p>Lead
                  <i
                    
                    onClick={handelShow}
                    className={`${
                      isShow
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShow ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                    Lead Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShow ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="newlead" className="nav-link">
                  <FaUserPlus className="nav-icon" />
                  <p
                    className={props.activeButton === "groups" ? "active" : ""}
                    onClick={() => props.onButtonClick("groups")}
                  >
                    New Lead
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaUserAlt className="nav-icon" />
                  <p>Vendor
                  <i
                    onClick={handelShowVen}
                    className={`${
                      isShowVen
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowVen ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                    Vendor Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowVen ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="newvendor" className="nav-link">
                  <FaUserPlus className="nav-icon" />
                  <p
                    className={props.activeButton === "groups" ? "active" : ""}
                    onClick={() => props.onButtonClick("groups")}
                  >
                    New Vendor
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaUserAlt className="nav-icon" />
                  <p>Email

                  <i
                    onClick={handelShowEmail}
                    className={`${
                      isShowEmail
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowEmail ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <HiOutlineMail className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                    Send Bulk Email
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowEmail ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <HiOutlineMail className="nav-icon" />

                  <p
                    className={props.activeButton === "groups" ? "active" : ""}
                    onClick={() => props.onButtonClick("groups")}
                  >
                    Sent Mail
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                <i className="fa fa-tasks nav-icon" aria-hidden="true"></i>
                  <p className="w-100">Task
                  <div className="d-flex right">
                  <button className="btn btn-primary btn-sm btnclass1 p-0 ">
                    open
                  </button>
                  <button className="btn btn-danger btn-sm btnclass1">1</button>
                  </div>
                  </p>
                </Link>
              
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaRegStickyNote className="nav-icon" />
                  <p>Interaction
                  <i
                    onClick={handelShowInt}
                    className={`${
                      isShowInt
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowInt ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaRegStickyNote className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                   Interaction Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowInt ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaRegStickyNote className="nav-icon" />
                  <p
                    className={props.activeButton === "groups" ? "active" : ""}
                    onClick={() => props.onButtonClick("groups")}
                  >
                    Search Interaction
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link">
                <i className="fa fa-file-text nav-icon" aria-hidden="true"></i>
                  <p className="w-100">Service Request
                  <div className="d-flex right">
                  <button className="btn btn-primary btn-sm btnclass1 p-0 ">
                    open
                  </button>
                  <button className="btn btn-danger btn-sm btnclass1">1</button>
                  </div>
                  </p>
                </Link>
              
              </li>
              <li className="nav-item">
                <Link to="/editstockdetails" className="nav-link">
                  <FaBars className="nav-icon" />
                  <p>Stock
                  <i
                    onClick={handelShowStock}
                    className={`${
                      isShowStock
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowStock ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaBars className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                   View Stock
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaIndent className="nav-icon" />
                  <p>Sales
                  <i
                    onClick={handelShowSale}
                    className={`${
                      isShowSale
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <PiGridNineFill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                 Invoice Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <RiFile3Fill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                   Create New Invoice
                  </p>
                </Link>
              </li>
              
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <PiGridNineFill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                 Purchase Order Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <RiFile3Fill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                   Create New Purchase Order
                  </p>
                </Link>
              </li>
              
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <PiGridNineFill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                 Proforma Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <RiFile3Fill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                  Create New Proforma Invoice
                  </p>
                </Link>
              </li>
              
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <PiGridNineFill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                 Quotation Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSale ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <RiFile3Fill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                  Create New Quotation
                  </p>
                </Link>
              </li>
              


              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FaIndent className="nav-icon" />
                  <p>Purchase
                  <i
                    onClick={handelShowPur}
                    className={`${
                      isShowPur
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowPur ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <PiGridNineFill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                  Expence Dashboard
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowPur ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <PiGridNineFill className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                  New Expence
                  </p>
                </Link>
              </li>





              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FiSettings className="nav-icon" />
                  <p>Setting
                  <i
                    onClick={handelShowSet}
                    className={`${
                      isShowSet
                      ? "fa fa-angle-down right"
                      : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                    ></i>
                    </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSet ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                  User Profile
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSet ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                   Manage User
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSet ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                 Invoice Setting
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSet ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                  HRM
                  </p>
                </Link>
              </li>
              <li
                className={`${
                  isShowSet ? "nav-item menu-open" : "nav-item d-none"
                }`}
              >
                <Link to="" className="nav-link">
                  <FaTachometerAlt className="nav-icon" />
                  <p
                    className={props.activeButton === "chats" ? "active" : ""}
                    onClick={() => props.onButtonClick("chats")}
                  >
                 Add Employee
                  </p>
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/" className="nav-link">
                <RiCloseCircleLine className="nav-icon" />
                
                  <p className="w-100">Sign Out
                  </p>
                </Link>
              
              </li>

                {/* <Outlet/> */}



            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
