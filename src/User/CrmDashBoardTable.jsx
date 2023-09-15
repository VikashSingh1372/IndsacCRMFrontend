import React, { useState } from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import data from "../Utils/table1.json";
import copy from "clipboard-copy";
import Papa from "papaparse";
import { AiFillCaretDown } from "react-icons/ai";
// import XLSX from 'xlsx';
import * as XLSX from "xlsx";
import jsPDF from "jspdf";

import OutsideClickHandler from "react-outside-click-handler";

function CrmDashBoardTable() {
  let [value, setValue] = useState(null);
  let dataarray =
    value === null
      ? data
      : data.filter((ele) => {
          return (
            ele.assigned.includes(value) ||
            ele.created.includes(value) ||
            ele.duedate.includes(value) ||
            ele.id.includes(value) ||
            ele.priority.includes(value) ||
            ele.status.includes(value) ||
            ele.subject.includes(value)
          );
        });

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const formattedData = JSON.stringify(data, null, 2);
    copy(formattedData);
    setCopied(true);

    // Reset the copied status after a brief period
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const convertToJson = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `data.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const convertToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `data.xlsx`);
  };

  const convertToPdf = () => {
    const doc = new jsPDF();

    // Convert JSON data to a string and position it on the PDF
    const jsonString = JSON.stringify(data, null, 2);
    doc.text(jsonString, 10, 10);

    // Save the PDF
    doc.save(`data.pdf`);
  };

  const handlePrint = () => {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse"; // Adding border-collapse

    const tableBody = document.createElement("tbody");
    const headerRow = tableBody.insertRow();

    // Adding style to the header row
    headerRow.style.backgroundColor = "#f2f2f2"; // Light gray background
    headerRow.style.fontWeight = "bold";
    headerRow.style.margin = "10px";
    headerRow.style.padding = "10px";
    // headerRow.style.border = '5px solid black';

    // const cell1 = headerRow.insertCell(0);
    const cell2 = headerRow.insertCell(1);
    const cell3 = headerRow.insertCell(2);
    const cell4 = headerRow.insertCell(3);
    const cell5 = headerRow.insertCell(4);
    const cell6 = headerRow.insertCell(5);
    const cell7 = headerRow.insertCell(6);
    const cell8 = headerRow.insertCell(7);

    // cell1.innerHTML = key;
    cell2.innerHTML = "Id";
    cell3.innerHTML = "Subject";
    cell4.innerHTML = "Status";
    cell5.innerHTML = "DueDate";
    cell6.innerHTML = "Priority";
    cell7.innerHTML = "Assigned";
    cell8.innerHTML = "Created";

    cell2.style.width = "100px";
    cell3.style.width = "100px";
    cell4.style.width = "100px";
    cell5.style.width = "100px";
    cell6.style.width = "100px";
    cell7.style.width = "100px";
    cell8.style.width = "100px";

    cell2.style.height = "30px";
    cell3.style.height = "30px";
    cell4.style.height = "30px";
    cell5.style.height = "30px";
    cell6.style.height = "30px";
    cell7.style.height = "30px";
    cell8.style.height = "30px";

    cell2.style.border = "1px solid gray";
    cell3.style.border = "1px solid gray";
    cell4.style.border = "1px solid gray";
    cell5.style.border = "1px solid gray";
    cell6.style.border = "1px solid gray";
    cell7.style.border = "1px solid gray";
    cell8.style.border = "1px solid gray";

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const row = tableBody.insertRow();
        // const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);

        // cell1.innerHTML = key;
        cell2.innerHTML = data[key].id;
        cell3.innerHTML = data[key].subject;
        cell4.innerHTML = data[key].status;
        cell5.innerHTML = data[key].duedate;
        cell6.innerHTML = data[key].priority;
        cell7.innerHTML = data[key].assigned;
        cell8.innerHTML = data[key].created;

        cell2.style.height = "30px";
        cell3.style.height = "30px";
        cell4.style.height = "30px";
        cell5.style.height = "30px";
        cell6.style.height = "30px";
        cell7.style.height = "30px";
        cell8.style.height = "30px";

        cell2.style.border = "1px solid gray";
        cell3.style.border = "1px solid gray";
        cell4.style.border = "1px solid gray";
        cell5.style.border = "1px solid gray";
        cell6.style.border = "1px solid gray";
        cell7.style.border = "1px solid gray";
        cell8.style.border = "1px solid gray";
      }
    }

    table.appendChild(tableBody);

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
      <head>
        <title>Print Table</title>
      </head>
      <body>
        ${table.outerHTML}
      </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
    // printWindow.close();
  };
  const [visibile, setVisible] = useState(false);
  const handleDrop = () => {
    setVisible(!visibile);
  };
  const [Id, setId] = useState(true);
  const [Subject, setSubject] = useState(true);
  const [Status, setStatus] = useState(true);
  const [Duedate, setDuedate] = useState(true);
  const [Assigned, setAssigned] = useState(true);
  const [Priority, setPriority] = useState(true);
  const [Created, setCreated] = useState(true);

  const handleID = () => {
    setId(!Id);
    setVisible(true);
  };
  const handleSubject = () => {
    setSubject(!Subject);
    setVisible(true);
  };
  const handleStatus = () => {
    setStatus(!Status);
    setVisible(true);
  };
  const handlePriority = () => {
    setPriority(!Priority);
    setVisible(true);
  };
  const handleAssigned = () => {
    setAssigned(!Assigned);
    setVisible(true);
  };
  const handleCreated = () => {
    setCreated(!Created);
    setVisible(true);
  };
  const handleDuedate = () => {
    setDuedate(!Duedate);
    setVisible(true);
  };

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <div className="bg-secondary mx-2 rounded Action d-flex">
          <label
            htmlFor=""
            className="px-2 py-1 m-0 item"
            onClick={handleCopyClick}
          >
            {copied ? "Copied!" : "Copy"}
          </label>
          <label
            htmlFor=""
            className="px-2 py-1 m-0 item"
            onClick={convertToJson}
          >
            CSV
          </label>
          <label
            htmlFor=""
            className="px-2 py-1 m-0 item"
            onClick={convertToExcel}
          >
            Excel
          </label>
          <label
            htmlFor=""
            className="px-2 py-1 m-0 item"
            onClick={convertToPdf}
          >
            PDF
          </label>
          <label
            htmlFor=""
            className="px-2 py-1 m-0 item"
            onClick={handlePrint}
          >
            Print
          </label>
          <OutsideClickHandler
            onOutsideClick={() => {
              setVisible(false);
            }}
          >
            <label
              htmlFor=""
              className="px-2 py-1 m-0 item"
              onClick={handleDrop}
            >
              Column Visibility <AiFillCaretDown />
            </label>
          </OutsideClickHandler>
        </div>
        <div>
          <label htmlFor="" className="p-0 mx-1 my-0">
            Search :
          </label>
          <input
            type="text"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
        </div>
        <div
        className="openmenu "
        style={{
          backgroundColor: "white",
          display: visibile === true ? "block" : "none",
          position: "absolute",
          right: "560px",
          top:"810px",
          margin: 0,
          paddingTop: '7px',
          paddingBottom:'7px',
          borderRadius: "5px",
        }}
      >
        <div
          className="menuItem"
          onClick={handleID}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Id ? "#007bff" : "",
            color: Id ? "white" : "",
          }}
        >
          ID
        </div>
        <div
          className="menuItem"
          onClick={handleSubject}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Subject ? "#007bff" : "",
            color: Subject ? "white" : "",
          }}
        >
          Subject
        </div>
        <div
          className="menuItem"
          onClick={handleStatus}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Status ? "#007bff" : "",
            color: Status ? "white" : "",
          }}
        >
          Status
        </div>
        <div
          className="menuItem"
          onClick={handleDuedate}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Duedate ? "#007bff" : "",
            color: Duedate ? "white" : "",
          }}
        >
          Due Date
        </div>
        <div
          className="menuItem"
          onClick={handlePriority}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Priority ? "#007bff" : "",
            color: Priority ? "white" : "",
          }}
        >
          Priority
        </div>
        <div
          className="menuItem"
          onClick={handleAssigned}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Assigned ? "#007bff" : "",
            color: Assigned ? "white" : "",
          }}
        >
          Assigned
        </div>
        <div
          className="menuItem"
          onClick={handleCreated}
          style={{
            width: "200px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            borderRadius: "1px",
            backgroundColor: Created ? "#007bff" : "",
            color: Created ? "white" : "",
          }}
        >
          Created
        </div>
      </div>
      </div>
      
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ display: Id ? "" : "none" }}
              onClick={() => {
                console.log("ID");
              }}
            >
              ID &nbsp; &nbsp; <FaArrowDownShortWide />
            </th>
            <th
              scope="col"
              style={{ display: Subject ? "" : "none" }}
              onClick={() => {
                console.log("Subject");
              }}
            >
              Subject &nbsp; &nbsp; <HiMiniArrowsUpDown />
            </th>
            <th
              scope="col"
              style={{ display: Status ? "" : "none" }}
              onClick={() => {
                console.log("Status");
              }}
            >
              Status &nbsp; &nbsp; <HiMiniArrowsUpDown />
            </th>
            <th
              scope="col"
              style={{ display: Duedate ? "" : "none" }}
              onClick={() => {
                console.log("Due Date");
              }}
            >
              Due Date &nbsp; &nbsp; <HiMiniArrowsUpDown />
            </th>
            <th
              scope="col"
              style={{ display: Priority ? "" : "none" }}
              onClick={() => {
                console.log("Priority");
              }}
            >
              Priority &nbsp; &nbsp; <HiMiniArrowsUpDown />
            </th>
            <th
              scope="col"
              style={{ display: Assigned ? "" : "none" }}
              onClick={() => {
                console.log("Assigned");
              }}
            >
              Assigned &nbsp; &nbsp; <HiMiniArrowsUpDown />
            </th>
            <th
              scope="col"
              style={{ display: Created ? "" : "none" }}
              onClick={() => {
                console.log("Created");
              }}
            >
              Created &nbsp; &nbsp; <HiMiniArrowsUpDown />
            </th>
          </tr>
        </thead>
        <tbody>
          {dataarray.map((ele, i) => {
            return (
              <tr className="" key={i}>
                <td scope="row" style={{ display: Id ? "" : "none" }}>
                  {ele.id}
                </td>
                <td
                  className="border"
                  style={{ display: Subject ? "" : "none" }}
                >
                  {ele.subject}
                </td>
                <td
                  className="border"
                  style={{ display: Status ? "" : "none" }}
                >
                  {ele.status}
                </td>
                <td
                  className="border"
                  style={{ display: Duedate ? "" : "none" }}
                >
                  {ele.duedate}
                </td>
                <td
                  className="border"
                  style={{ display: Priority ? "" : "none" }}
                >
                  {ele.priority}
                </td>
                <td
                  className="border"
                  style={{ display: Assigned ? "" : "none" }}
                >
                  {ele.assigned}
                </td>
                <td
                  className="border"
                  style={{ display: Created ? "" : "none" }}
                >
                  {ele.created}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CrmDashBoardTable;
