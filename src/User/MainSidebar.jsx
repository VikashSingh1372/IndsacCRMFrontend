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

export default function MainSidebar(props) {
  const [searchBtn, setSearchBtn] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const handelShow = () => setIsShow(!isShow);

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="index3.html" className="brand-link">
          <img
            src={props.logo}
            alt="logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">CloudeNode</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={props.dummy}
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                Loged In User
              </Link>
            </div>
          </div>

          {/* <!-- SidebarSearch Form --> */}
          {searchBtn ? (
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sidebar"
                    onClick={() => setSearchBtn(false)}
                  >
                    <i className="fa fa-search fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="form-inline sidebar-search-open">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sidebar"
                    onClick={() => setSearchBtn(true)}
                  >
                    <i className="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="sidebar-search-results">
                <div className="list-group">
                  <Link to="/" className="list-group-item">
                    <div className="search-title">
                      <p>No data found</p>
                    </div>
                    <div className="search-path"></div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <li
                className={`${
                  props.isShow ? "nav-item" : "nav-item menu-open "
                }`}
              >
                <li to="/" className="nav-link active">
                  <i className="nav-icon fa fa-tachometer"></i>
                  <p>
                    Starter Pages
                    <i
                      onClick={props.handelShow}
                      className="right fa fa-angle-left"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </p>
                </li>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      <i className="fa fa-circle-o nav-icon"></i>
                      <p>Active Page</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="fa fa-circle-o nav-icon"></i>
                      <p>Inactive Page</p>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i className="nav-icon fa fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i className="nav-icon fa fa-th"></i>
                  <p>My Courses</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <BsPeopleFill className="nav-icon" />
                  <p>Discussion Forums</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <BsFillBagFill className="nav-icon" />
                  <p>Resources</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <FaListUl className="nav-icon" />
                  <p>Course Catalog</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 nav-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>

                  <p>Assignments</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 nav-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>

                  <p>Progress and Gardes</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <BsFillCalendar2DateFill className="nav-icon" />
                  <p>Calendar</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i className="nav-icon fa fa-bell-o"></i>
                  <p>Notifications</p>
                </Link>
              </li>
              <li
                className={`${
                  props.isShow ? "nav-item menu-open" : "nav-item  "
                }`}
              >
                <li to="/" className="nav-link">
                  <FaBook className="nav-icon" />
                  <p>
                    Course Management
                    <i
                      onClick={props.handelShow}
                      className="right fa fa-angle-left"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </p>
                </li>
                <ul className="nav nav-treeview">
                  <li
                    className={`${
                      isShow ? "nav-item menu-open" : "nav-item  "
                    }`}
                  >
                    <li to="" className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 nav-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        />
                      </svg>

                      <p>
                        Test Series
                        <i
                          onClick={handelShow}
                          className="fa fa-angle-left right"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </p>
                    </li>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/Test" className="nav-link">
                          <i className="fa fa-circle-o nav-icon"></i>
                          <p>Test 1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="nav-link">
                          <i className="fa fa-circle-o nav-icon"></i>
                          <p>Test 2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="nav-link">
                          <i className="fa fa-circle-o nav-icon"></i>
                          <p>Test 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <FaUserGraduate className="nav-icon" />
                  <p>Student Roster</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <SiGooglechat className="nav-icon" />
                  <p>Communications</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <MdGrade className="nav-icon" />
                  <p>Grading & Assessment</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <IoMdAnalytics className="nav-icon" />
                  <p>Analytics & Reports</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <i className="nav-icon fa fa-cog"></i>
                  <p>Account Settings</p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fa fa-th"></i>
                  <p>
                    Simple Link
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
