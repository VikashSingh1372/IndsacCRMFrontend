import React, { useState } from "react";
import ss4 from "../Images/ss4.PNG";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import CrmDashboardsub from "./CrmDashboardsub";
import CrmDashBoardTable from "./CrmDashBoardTable";
ChartJS.register(ArcElement, Tooltip, Legend);

function CrmDashboard() {
  let userData = [
    {
      id: 1,
      year: 2021,
      UserGain: 1210,
      UserLoss: 1300,
    },
    {
      id: 2,
      year: 2022,
      UserGain: 970,
      UserLoss: 1300,
    },
    {
      id: 3,
      year: 2023,
      UserGain: 640,
      UserLoss: 1300,
    },
    {
      id: 4,
      year: 2024,
      UserGain: 1203,
      UserLoss: 1300,
    },
    {
      id: 5,
      year: 2025,
      UserGain: 403,
      UserLoss: 1300,
    },
    {
      id: 6,
      year: 2026,
      UserGain: 620,
      UserLoss: 1300,
    },
  ];
  const [UserData, setUserData] = useState({
    labels: userData.map((ele) => {
      return ele.year;
    }),
    datasets: [
      {
        label: "User Gained",
        data: userData.map((ele) => {
          return ele.UserGain;
        }),
        backgroundColor: [
          "rgba(22, 144, 0, 0.50)",
          "rgba(7, 181, 249, 0.50)",
          "rgba(253, 2, 2, 0.50)",
          "rgba(104, 104, 104, 0.50)",
          "rgba(255, 0, 132, 0.50)",
          "rgba(255, 234, 0, 0.5)",
        ],
        borderColor: [
          "rgba(22, 144, 0, 0.80)",
          "rgba(7, 181, 249, 0.80)",
          "rgba(253, 2, 2, 0.80)",
          "rgba(104, 104, 104, 0.80)",
          "rgba(255, 0, 132, 0.80)",
          "rgba(255, 234, 0, 0.8)",
        ],
        borderWidth: 2,
        borderRadius: 5,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  });
  const greetings = ["Good Morning 🌄", "Good Afternoon 🌇", "Good Evening 🌃"];
  const currentHour = new Date().getHours();
  let index =
    currentHour >= 12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2 : 0;
  return (
    <>
      <div className="col-12">
        {/* Sales
        <br />
        <strong>DashBoard</strong> */}
      </div>
      <div className="greet">
        <div className=" bg-white rounded mt-2 d-flex align-items-center">
          <div className="col-4 mt-2 ml-2 mb-2">
            <strong>{greetings[index]} User Name !</strong>
            <div className=" mt-2">Welcome to the CRM Dashboard.</div>
          </div>
          <div className="col-8 d-flex justify-content-end pr-4">
            <img
              loading="lazy"
              src={ss4}
              alt="not load"
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-11 mt-2 d-flex ">
          <div className="w-100 col-7 mt-1 mb-1 elevation-2 rounded p-0">
            {/* <div className=" bg-success rounded d-flex justify-content-end">
              <button className="btn btn-sm btn-success">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <button className="btn btn-sm btn-success">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div> */}

            <div
              className="col-12 w-100  d-flex justify-content-center pt-5"
              style={{ paddingLeft: 10, paddingBottom: 10 }}
            >
              <Bar data={UserData} />
            </div>
          </div>

          <div className="m-1 p-0 col-5 elevation-2 w-100 rounded">
            {/* <div className=" bg-success rounded d-flex justify-content-end">
              <button className="btn btn-sm btn-success">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <button className="btn btn-sm btn-success">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div> */}
            <div
              className="col-12 w-100  d-flex justify-content-center align-items-center"
              style={{ paddingLeft: 10, paddingBottom: 10 }}
            >
              <Doughnut data={UserData} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <div className="col-11 mt-2 d-flex">
          <CrmDashboardsub
            name="New Order"
            value="150"
            icon="HiOutlineShoppingBag"
            class="bg-info"
          />
          <CrmDashboardsub
            name="Bounce rate"
            value="53%"
            icon="BiBarChart"
            class="bg-success"
          />
          <CrmDashboardsub
            name="User Registrations"
            value="44"
            icon="BiSolidUserPlus"
            class="bg-warning"
          />
          <CrmDashboardsub
            name="Unique Visitors"
            value="65"
            icon="IoMdPie"
            class="bg-danger"
          />
        </div>
      </div>
      <CrmDashBoardTable />
    </>
  );
}

export default CrmDashboard;
