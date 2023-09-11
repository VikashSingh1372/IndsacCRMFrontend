import React, { useState } from "react";
import icon from "../Images/icon.png";
import ss4 from "../Images/ss4.PNG";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import CrmDashboardsub from "./CrmDashboardsub";
import CrmDashBoardTable from "./CrmDashBoardTable";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

function CrmDashboard() {
  let userData = [
    {
      id: 1,
      month: "Jan",
      UserGain: 6,
    },
    {
      id: 2,
      month: "Feb",
      UserGain: 5,
    },
    {
      id: 3,
      month: "Mar",
      UserGain: 4,
    },
    {
      id: 4,
      month: "Apr",
      UserGain: 2,
    },
    {
      id: 5,
      month: "May",
      UserGain: 8,
    },
    {
      id: 6,
      month: "June",
      UserGain: 1,
    },
    {
      id: 7,
      month: "July",
      UserGain: 9,
    },
    {
      id: 8,
      month: "Aug",
      UserGain: 10,
    },
    {
      id: 9,
      month: "Sept",
      UserGain: 11,
    },
    {
      id: 10,
      month: "Oct",
      UserGain: 13,
    },
    {
      id: 11,
      month: "Nov",
      UserGain: 15,
    },
    {
      id: 12,
      month: "Dec",
      UserGain: 16,
    },
  ];

  let userData1 = [
    {
      id: 1,
      label: "Open",
      UserGain: 9,
    },
    {
      id: 2,
      label: "Attempted Contact",
      UserGain: 7,
    },
    {
      id: 3,
      label: "Not Engaged",
      UserGain: 3,
    },
    {
      id: 4,
      label: "Needs Follow Up",
      UserGain: 1,
    },
    {
      id: 5,
      label: "Working",
      UserGain: 5,
    }
  ];

  let userData2 = [
    {
      id: 1,
      month: "Day1",
      UserGain: 15,
    },
    {
      id: 2,
      month: "Day2",
      UserGain: 2,
    },
    {
      id: 3,
      month: "Day3",
      UserGain: 3,
    },
    {
      id: 4,
      month: "Day4",
      UserGain: 4,
    },
    {
      id: 5,
      month: "Day5",
      UserGain: 11,
    },
    {
      id: 6,
      month: "Day6",
      UserGain: 6,
    },
    {
      id: 7,
      month: "Day7",
      UserGain: 8,
    },
    {
      id: 8,
      month: "Day8",
      UserGain: 7,
    },
    {
      id: 9,
      month: "Day9",
      UserGain: 9,
    },
    {
      id: 10,
      month: "Day10",
      UserGain: 17,
    },
    {
      id: 11,
      month: "Day11",
      UserGain: 4,
    },
    {
      id: 12,
      month: "Day12",
      UserGain: 6,
    },
    {
      id: 13,
      month: "Day13",
      UserGain: 11,
    },
    {
      id: 14,
      month: "Day14",
      UserGain: 14,
    },
    {
      id: 15,
      month: "Day15",
      UserGain: 13,
    },{
      id: 16,
      month: "Day16",
      UserGain: 15,
    },{
      id: 17,
      month: "Day17",
      UserGain: 12,
    },{
      id: 18,
      month: "Day18",
      UserGain: 15,
    },{
      id: 19,
      month: "Day19",
      UserGain: 7,
    },{
      id: 20,
      month: "Day20",
      UserGain: 5,
    },{
      id: 21,
      month: "Day21",
      UserGain: 9,
    },{
      id: 22,
      month: "Day22",
      UserGain: 17,
    },{
      id: 23,
      month: "Day23",
      UserGain: 13,
    },{
      id: 24,
      month: "Day24",
      UserGain: 15,
    },{
      id: 25,
      month: "Day25",
      UserGain: 10,
    },{
      id: 26,
      month: "Day26",
      UserGain: 12,
    },{
      id: 27,
      month: "Day27",
      UserGain: 11,
    },{
      id: 28,
      month: "Day28",
      UserGain: 16,
    },
    {
      id: 29,
      month: "Day29",
      UserGain: 14,
    },
    {
      id: 30,
      month: "Day30",
      UserGain: 13,
    },
    {
      id: 31,
      month: "Day31",
      UserGain: 12,
    },    

  ];

  const [UserData, setUserData] = useState({
    labels: userData.map((ele) => {
      return ele.month;
    }),
    datasets: [
      {
        label:"Customer",
        data: userData.map((ele) => {
          return ele.UserGain;
        }),
        backgroundColor: ["rgba(244, 194, 194, 0.50)", "rgba(7, 181, 249, 0.50)", "rgba(253, 2, 2, 0.50)", "rgba(104, 104, 104, 0.50)", "rgba(255, 0, 132, 0.50)", "rgba(255, 234, 0, 0.5)"],
        borderColor: ["rgba(0, 0, 0, 0.80)"],
        borderWidth: 1,
        borderRadius:5,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  });
  const [UserData2, setUserData2] = useState({
    labels: userData2.map((ele) => {
      return ele.month;
    }),
    datasets: [
      {
        label:"Customer",
        data: userData2.map((ele) => {
          return ele.UserGain;
        }),
        backgroundColor: ["rgba(244, 194, 194, 0.50)", "rgba(7, 181, 249, 0.50)", "rgba(253, 2, 2, 0.50)", "rgba(104, 104, 104, 0.50)", "rgba(255, 0, 132, 0.50)", "rgba(255, 234, 0, 0.5)","rgba(0, 0, 134, 0.50)"],
        borderColor: ["#0b0f54"],
        borderWidth: 1,
        borderRadius:5,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  });



  const [UserData1, setUserData1] = useState({
    labels: userData1.map((ele) => {
      return ele.label;
    }),
    datasets: [
      {
        label:"Customer",
        data: userData1.map((ele) => {
          return ele.UserGain;
        }),
        backgroundColor: ["#FF6384", "#6AA0FB", "#FFCD56", "#19E51D", "#F3A4FD"],
        borderColor: ["rgba(11, 15, 84, 0.3)"],
        borderWidth: 1,
        // borderRadius:5,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        // hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  });


  // const token =localStorage.getItem("accessToken")
  // const userId =localStorage.getItem("userId")


  //    const response= axios.get(`http://localhost:8080/lead/dashboard/${userId}`,
  //     {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(response => {
  //       if (response && response.data) {
  //         // console.log(response.data.body);
  //         const activeLead = response.data.body.activeLead;

  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });  



  return (
    <>
      <div className="col-12">
        Sales
        <br />
        <strong>DashBoard</strong>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-11 bg-white rounded mt-2  d-flex">
          <div className="col-4 mt-2 mb-2">
            <strong>
              <img
                className="me-3"
                src={icon}
                alt="not load"
                style={{ width: 22 }}
              />
              Good Morning
            </strong>
            <div className="pl-4 ml-3">Welcome to your Sales Dashboard</div>
          </div>
          <div className="col-8 d-flex justify-content-end">
            <img src={ss4} alt="not load" style={{width:200}}/>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-11 mt-2 d-flex">
          <div className="w-100 col-7 mt-1 mb-1 elevation-2 rounded p-0" style={{backgroundColor:"white"}}>
            {/* <div className=" bg-success rounded d-flex justify-content-end">
              <button className="btn btn-sm btn-success">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <button className="btn btn-sm btn-success">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div> */}

            <div
              className="col-12 w-100  d-flex justify-content-center pt-5 rounded"
              style={{ paddingLeft: 10, paddingBottom: 10,backgroundColor:"white" }}
            >
              <Bar data={UserData} style={{backgroundColor:"white",paddingLeft:"5px",paddingRight:"5px",margin:"5px",borderRadius:"10px"}}/>
            </div>
          </div>

          <div className="m-1 p-0 col-5 elevation-2 w-100 rounded" style={{backgroundColor:"white"}}>
            {/* <div className=" bg-success rounded d-flex justify-content-end">
              <button className="btn btn-sm btn-success">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <button className="btn btn-sm btn-success">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div> */}
            <div
              className="col-12 w-100  d-flex justify-content-center rounded align-items-center"
              style={{ paddingLeft: 10, paddingBottom: 10,backgroundColor:"white" }}
            >
              <Doughnut data={UserData1} style={{backgroundColor:"white",margin:"5px",borderRadius:"10px"}}/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-11 mt-2 d-flex">
          <CrmDashboardsub
            name="Total Contacts"
            value="52"
            icon="HiOutlineShoppingBag"
            class="bg-info elevation-2"
          />
          <CrmDashboardsub
            name="Invoice Created"
            value="60%"
            icon="BiBarChart"
            class="bg-success elevation-2"
          />
          <CrmDashboardsub
            name="Active Lead"
            value="77"
            icon="BiSolidUserPlus"
            class="bg-warning elevation-2"
          />
          <CrmDashboardsub
            name="InActive Lead"
            value="84%"
            icon="IoMdPie"
            class="bg-danger elevation-2"
          />


        </div>
      </div>
          <CrmDashBoardTable />
          <Bar className="elevation-2" data={UserData2} style={{backgroundColor:"white",paddingLeft:"15px",paddingRight:"15px",margin:"10px",borderRadius:"10px"}} />

    </>
  );
}

export default CrmDashboard;
