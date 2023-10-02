import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
import "../Style/MainSideBar.css";

export default function MainSidebar({ hamburger, sethamburger }) {
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
  const handleclickonbutton = (hamburger) => {
    return { display: !hamburger && "none" };
  };
  const handleclickonbutton1 = (hamburger) => {
    return { width: !hamburger && "3.7rem" };
  };
  const handleclickonbutton2 = (hamburger) => {
    return { fontSize: !hamburger && "1.2rem" };
  };

  // const [menuopened,setmenuopened]=useState(false);

  return (
    <>
      <div className="main-sidebar" style={handleclickonbutton1(hamburger)}>
        <div className=" py-2" style={{ borderBottom: "1px solid #4b545c" }}>
          <Link to="index3.html" className="d-flex brand-link">
            <PiGridNineFill className="nav-icon fs-3" />
            <div
              className="navhead font-weight-light fs-5"
              style={handleclickonbutton(hamburger)}
            >
              Dashboard
            </div>
          </Link>
        </div>
        {/* <div style={{ border: "1px solid gray" }}></div> */}

        <div
          className="mt-3 mb-2 d-flex pb-2"
          style={{ borderBottom: "1px solid #4b545c" }}
        >
          <div className="nav-icon">
            <i className="fa fa-cubes fs-5" aria-hidden="true"></i>
          </div>
          <div className="">
            <Link
              to=""
              className="brand-link  fs-6"
              style={handleclickonbutton(hamburger)}
            >
              <div className="navhead">Marketing</div>
            </Link>
          </div>
        </div>
        {/* <div style={{ border: "0.5px solid gray" }}></div> */}

        <nav className="mt-2 sidebar">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="" className="nav-link">
                <FaUserAlt
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Customer</p>
                  <i
                    onClick={handelComShow}
                    className={`${
                      isComShow
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isComShow ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub">
                <FaTachometerAlt className="nav-icon" />
                <p onClick={{}}>Customer Dashboard</p>
              </Link>
            </li>

            <li
              className={`${
                isComShow ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="/new-customer" className="nav-link-sub  ">
                <FaUserPlus className="nav-icon" />
                <p>New Customer</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaUserAlt
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />

                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Lead</p>
                  <i
                    onClick={handelShow}
                    className={`${
                      isShow
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${isShow ? "nav-item menu-open" : "nav-item d-none"}`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub">
                <FaTachometerAlt className="nav-icon" />
                <p>Lead Dashboard</p>
              </Link>
            </li>
            <li
              className={`${isShow ? "nav-item menu-open" : "nav-item d-none"}`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="/new-lead" className="nav-link-sub  ">
                <FaUserPlus className="nav-icon" />
                <p>New Lead</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaUserAlt
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Vendor</p>
                  <i
                    onClick={handelShowVen}
                    className={`${
                      isShowVen
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowVen ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaTachometerAlt className="nav-icon" />
                <p>Vendor Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowVen ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="/new-vendor" className="nav-link-sub  ">
                <FaUserPlus className="nav-icon" />
                <p>New Vendor</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaUserAlt
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Email</p>
                  <i
                    onClick={handelShowEmail}
                    className={`${
                      isShowEmail
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowEmail ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <HiOutlineMail className="nav-icon" />
                <p>Send Bulk Email</p>
              </Link>
            </li>
            <li
              className={`${
                isShowEmail ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <HiOutlineMail className="nav-icon" />

                <p>Sent Mail</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-task" className="nav-link  ">
                <i
                  className="fa fa-tasks nav-icon"
                  aria-hidden="true"
                  style={handleclickonbutton2(hamburger)}
                ></i>

                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p className="w-100">Task</p>
                  <div className="d-flex">
                    <button className="btn btn-primary btn-sm btnclass1 p-0 ">
                      open
                    </button>
                    <button className="btn btn-danger btn-sm btnclass2">
                      1
                    </button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaRegStickyNote
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Interaction</p>
                  <i
                    onClick={handelShowInt}
                    className={`${
                      isShowInt
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowInt ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaRegStickyNote className="nav-icon" />
                <p>Interaction Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowInt ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaRegStickyNote className="nav-icon" />
                <p>Search Interaction</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <i
                  className="fa fa-file-text nav-icon"
                  aria-hidden="true"
                  style={handleclickonbutton2(hamburger)}
                ></i>
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p className="w-100">Service Request</p>
                  <div className="d-flex">
                    <button className="btn btn-primary btn-sm btnclass1 p-0 ">
                      open
                    </button>
                    <button className="btn btn-danger btn-sm btnclass2">
                      1
                    </button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaBars
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Stock</p>
                  <i
                    onClick={handelShowStock}
                    className={`${
                      isShowStock
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowStock ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaBars className="nav-icon" />
                <p>View Stock</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaIndent
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Sales</p>
                  <i
                    onClick={handelShowSale}
                    className={`${
                      isShowSale
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <PiGridNineFill className="nav-icon" />
                <p>Invoice Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <RiFile3Fill className="nav-icon" />
                <p>Create New Invoice</p>
              </Link>
            </li>

            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <PiGridNineFill className="nav-icon" />
                <p>Purchase Order Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub ">
                <RiFile3Fill className="nav-icon" />
                <p>Create New Purchase Order</p>
              </Link>
            </li>

            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <PiGridNineFill className="nav-icon" />
                <p>Proforma Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <RiFile3Fill className="nav-icon" />
                <p>Create New Proforma Invoice</p>
              </Link>
            </li>

            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <PiGridNineFill className="nav-icon" />
                <p>Quotation Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSale ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <RiFile3Fill className="nav-icon" />
                <p>Create New Quotation</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FaIndent
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Purchase</p>
                  <i
                    onClick={handelShowPur}
                    className={`${
                      isShowPur
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowPur ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <PiGridNineFill className="nav-icon" />
                <p>Expence Dashboard</p>
              </Link>
            </li>
            <li
              className={`${
                isShowPur ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <PiGridNineFill className="nav-icon" />
                <p>New Expence</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <FiSettings
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />
                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p>Setting</p>
                  <i
                    onClick={handelShowSet}
                    className={`${
                      isShowSet
                        ? "fa fa-angle-down right"
                        : "fa fa-angle-left right"
                    }`}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </Link>
            </li>
            <li
              className={`${
                isShowSet ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaTachometerAlt className="nav-icon" />
                <p>User Profile</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSet ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaTachometerAlt className="nav-icon" />
                <p>Manage User</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSet ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaTachometerAlt className="nav-icon" />
                <p>Invoice Setting</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSet ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaTachometerAlt className="nav-icon" />
                <p>HRM</p>
              </Link>
            </li>
            <li
              className={`${
                isShowSet ? "nav-item menu-open" : "nav-item d-none"
              }`}
              style={handleclickonbutton(hamburger)}
            >
              <Link to="" className="nav-link-sub  ">
                <FaTachometerAlt className="nav-icon" />
                <p>Add Employee</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link  ">
                <RiCloseCircleLine
                  className="nav-icon"
                  style={handleclickonbutton2(hamburger)}
                />

                <div className="navhead" style={handleclickonbutton(hamburger)}>
                  <p className="w-100">Sign Out</p>
                </div>
              </Link>
            </li>

            <Outlet />
          </ul>
        </nav>
      </div>
    </>
  );
}
