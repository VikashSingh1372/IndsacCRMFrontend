import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiBarChart } from "react-icons/bi";
import { BiSolidUserPlus } from "react-icons/bi";
import { IoMdPie } from "react-icons/io";


export default function CrmDashboardsub(props) {
  let [mouse, setmouse] = useState(false);

  const mouseout = () => {
    setmouse(false);
  };
  const mouseover = () => {
    setmouse(true);
  };
  const style = {
    fontSize: mouse ? 60 : 50,
    color: "rgba(108, 117, 125, 0.5)",
    transition: "font-size 0.5s",
  };

  const [mouse1, setmouse1] = useState(false);
  const mouseout1 = () => {
    setmouse1(false);
    setmouse(false);
  };
  const mouseover1 = () => {
    setmouse1(true);
    setmouse(true);
  };
  const style1 = {
    backgroundColor: mouse1 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    color: "white",
    border: "none",
  };

  return (
    <div className={props.class + " col-3 rounded p-0 me-1 mb-4"}>
      <div className="d-flex" onMouseEnter={mouseover} onMouseLeave={mouseout}>
        <div className="col-8 pt-3 pl-2">
          <h3>
            <strong>{props.value}</strong>
          </h3>
          <p>{props.name}</p>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center pe-2">
          {props.icon === "BiBarChart" ? (
            <BiBarChart style={style} />
          ) : props.icon === "HiOutlineShoppingBag" ? (
            <HiOutlineShoppingBag style={style} />
          ) : props.icon === "BiSolidUserPlus" ? (
            <BiSolidUserPlus style={style} />
          ) : (
            <IoMdPie style={style} />
          )}
        </div>
      </div>
      <div>
        <button
          className="btn btn-sm w-100 m-0  mybtn"
          onMouseEnter={mouseover1}
          onMouseLeave={mouseout1}
          style={style1}
        >
          <span className="fs-6">More info</span>
          <i
            className="fa fa-arrow-circle-right ml-2 fs-6"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
}
