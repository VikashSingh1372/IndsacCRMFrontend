import React from "react";
import { Link } from "react-router-dom";

export default function UserNavbar(props) {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <i
              onClick={props.toggle}
              className="fa fa-bars"
              style={{ cursor: "pointer" }}
            ></i>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <i
              onClick={props.handelShow3}
              style={{ cursor: "pointer" }}
              className="fa fa-search"
            ></i>
            <div
              className={`${
                props.isShow3
                  ? "navbar-search-block navbar-search-open"
                  : "navbar-search-block"
              }`}
            >
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i
                        onClick={props.handelShow3}
                        className="fa fa-times"
                      ></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* <!-- Messages Dropdown Menu --> */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="fa fa-comments"></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="/" className="dropdown-item">
                {/* <!-- Message Start --> */}
                <div className="media">
                  <img
                    src={props.dummy1}
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fa fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock-o mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* <!-- Message End --> */}
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                {/* <!-- Message Start --> */}
                <div className="media">
                  <img
                    src={props.dummy2}
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fa fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock-o mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* <!-- Message End --> */}
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                {/* <!-- Message Start --> */}
                <div className="media">
                  <img
                    src={props.dummy3}
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fa fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="fa fa-clock-o mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* <!-- Message End --> */}
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          {/* <!-- Notifications Dropdown Menu --> */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="fa fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-header">15 Notifications</span>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                <i className="fa fa-envelope mr-2"></i> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                <i className="fa fa-users mr-2"></i> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                <i className="fa fa-file mr-2"></i> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          {props.fullScreen ? (
            <li
              onClick={props.handleScreen}
              className="nav-item"
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-arrows-alt"></i>
            </li>
          ) : (
            <li
              onClick={props.handleScreen2}
              className="nav-item"
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-compress"></i>
            </li>
          )}

          <li className="nav-item">
            <i
              onClick={props.handelShow2}
              style={{ cursor: "pointer" }}
              className="fa fa-th-large"
            ></i>
          </li>
        </ul>
      </nav>
    </>
  );
}
