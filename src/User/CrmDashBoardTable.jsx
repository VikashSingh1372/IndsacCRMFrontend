import React, { useState } from "react";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import data from "../Utils/table1.json";
import copy from "clipboard-copy";
import Papa from "papaparse";
import { AiFillCaretDown } from "react-icons/ai";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "../Style/CrmDashBoardTable.css";
import OutsideClickHandler from "react-outside-click-handler";

function CrmDashBoardTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [value, setValue] = useState("");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const totalEntries = data.length;
  const [sortColumn, setSortColumn] = useState(""); // Track sorting column
  const [sortDirection, setSortDirection] = useState("asc"); // Track sorting direction

  const handleSort = (column) => {
    // If the same column is clicked again, toggle the sort direction
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Filter and sort the data based on the selected column and direction
  const filterAndSortData = () => {
    return data
      .filter((ele) =>
        value === ""
          ? true
          : ele.renderingengine.toString().includes(value) ||
            ele.browser.includes(value) ||
            ele.platform.includes(value) ||
            ele.engineversion.includes(value) ||
            ele.cssgrade.includes(value)
      )
      .sort((a, b) => {
        if (sortDirection === "asc") {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
          return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
      });
  };

  const handleSearch = (e) => {
    // Set the search input value to the current input field value
    setValue(e.target.value);
  };

  // let dataarray =
  //   value === ""
  //     ? data.slice(startIndex, endIndex)
  //     : data.filter((ele) => {
  //         return (
  //           ele.renderingengine.toString().includes(value) ||
  //           ele.engineversion.includes(value) ||
  //           ele.cssgrade.includes(value) ||
  //           ele.platform.includes(value) ||
  //           ele.browser.includes(value)
  //         );
  //       });

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

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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

    const cell1 = headerRow.insertCell(0);
    const cell2 = headerRow.insertCell(1);
    const cell3 = headerRow.insertCell(2);
    const cell4 = headerRow.insertCell(3);
    const cell5 = headerRow.insertCell(4);
    const cell6 = headerRow.insertCell(5);

    cell1.innerHTML = "RenderingEngine";
    cell2.innerHTML = "Browser";
    cell3.innerHTML = "Platform";
    cell4.innerHTML = "EngineVersion";
    cell5.innerHTML = "CssGrade";

    // Set styles for header cells
    const headerCells = [
      cell1,
      cell2,
      cell3,
      cell4,
      cell5,
      cell6,
    ];
    headerCells.forEach((cell) => {
      cell.style.width = "100px";
      cell.style.height = "30px";
      cell.style.border = "1px solid gray";
    });

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);

        cell1.innerHTML = data[key].renderingengine;
        cell2.innerHTML = data[key].browser;
        cell3.innerHTML = data[key].platform;
        cell4.innerHTML = data[key].engineversion;
        cell5.innerHTML = data[key].cssgrade;

        // Set styles for data cells
        const dataCells = [
          cell1,
          cell2,
          cell3,
          cell4,
          cell5,
          cell6,
        ];
        dataCells.forEach((cell) => {
          cell.style.height = "30px";
          cell.style.border = "1px solid gray";
        });
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
  };
  const [visibile, setVisible] = useState(false);
  const handleDrop = () => {
    setVisible(!visibile);
  };
  const [Renderingengine, setRenderingengine] = useState(true);
  const [Browser, setBrowser] = useState(true);
  const [Platform, setPlatform] = useState(true);
  const [Engineversion, setEngineversion] = useState(true);
  const [Cssgrade, setCssgrade] = useState(true);

  const handleRenderingengine = () => {
    setRenderingengine(!Renderingengine);
    setVisible(true);
  };
  const handleBrowser = () => {
    setBrowser(!Browser);
    setVisible(true);
  };
  const handlePlatform = () => {
    setPlatform(!Platform);
    setVisible(true);
  };
  const handleCssgrade = () => {
    setCssgrade(!Cssgrade);
    setVisible(true);
  };
  const handleEngineversion = () => {
    setEngineversion(!Engineversion);
    setVisible(true);
  };

  return (
    <>
      <div
        className="d-flex justify-content-between my-3z"
        style={{
          "padding-bottom": "1rem",
        }}
      >
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
            <div className="dropdown">
              <label
                htmlFor=""
                className="px-2 py-1 m-0 item btn  dropdown-toggle"
                onClick={handleDrop}
                data-toggle="dropdown"
                style={{
                  color: "#fff",
                }}
              >
                Column Visibility
              </label>

              {/* Custom dropdown for column visibility */}
              <div
                className={`dropdown-menu ${
                  visibile ? "show" : ""
                } dropdown-menu-right`}
              >
                {/* Add your dropdown content here */}
                <div
                  className="menuItem"
                  onClick={handleRenderingengine}
                  style={{
                    width: "200px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    borderRadius: "1px",
                    backgroundColor: Renderingengine ? "#007bff" : "",
                    color: Renderingengine ? "white" : "",
                  }}
                >
                  Rendering engine
                </div>
                <div
                  className="menuItem"
                  onClick={handleBrowser}
                  style={{
                    width: "200px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    borderRadius: "1px",
                    backgroundColor: Browser ? "#007bff" : "",
                    color: Browser ? "white" : "",
                  }}
                >
                  Browser
                </div>
                <div
                  className="menuItem"
                  onClick={handlePlatform}
                  style={{
                    width: "200px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    borderRadius: "1px",
                    backgroundColor: Platform ? "#007bff" : "",
                    color: Platform ? "white" : "",
                  }}
                >
                  Platform(s)
                </div>
                <div
                  className="menuItem"
                  onClick={handleEngineversion}
                  style={{
                    width: "200px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    borderRadius: "1px",
                    backgroundColor: Engineversion ? "#007bff" : "",
                    color: Engineversion ? "white" : "",
                  }}
                >
                  Engine version
                </div>
                <div
                  className="menuItem"
                  onClick={handleCssgrade}
                  style={{
                    width: "200px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    borderRadius: "1px",
                    backgroundColor: Cssgrade ? "#007bff" : "",
                    color: Cssgrade ? "white" : "",
                  }}
                >
                  CSS grade
                </div>
                {/* Add more dropdown items as needed */}
              </div>
            </div>
          </OutsideClickHandler>
        </div>
        <div className="Next2">
          <label htmlFor="" className="p-0 mx-1 my-0">
            Search :
          </label>
          <input
            type="text"
            className="Next3"
            onChange={handleSearch} // Add onChange event to handle search
            value={value}
            style={{
              "border-radius": "unset",
              border: "1px solid ",
              borderRadius: "0",
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
            top: "810px",
            margin: 0,
            paddingTop: "7px",
            paddingBottom: "7px",
            borderRadius: "5px",
          }}
        >
          <div
            className="menuItem"
            onClick={handleRenderingengine}
            style={{
              width: "200px",
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              borderRadius: "1px",
              backgroundColor: Renderingengine ? "#007bff" : "",
              color: Renderingengine ? "white" : "",
            }}
          >
            Rendering engine
          </div>
          <div
            className="menuItem"
            onClick={handleBrowser}
            style={{
              width: "200px",
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              borderRadius: "1px",
              backgroundColor: Browser ? "#007bff" : "",
              color: Browser ? "white" : "",
            }}
          >
            Browser
          </div>
          <div
            className="menuItem"
            onClick={handlePlatform}
            style={{
              width: "200px",
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              borderRadius: "1px",
              backgroundColor: Platform ? "#007bff" : "",
              color: Platform ? "white" : "",
            }}
          >
            Platform(s)
          </div>
          <div
            className="menuItem"
            onClick={handleEngineversion}
            style={{
              width: "200px",
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              borderRadius: "1px",
              backgroundColor: Engineversion ? "#007bff" : "",
              color: Engineversion ? "white" : "",
            }}
          >
            Engine version
          </div>
          <div
            className="menuItem"
            onClick={handleCssgrade}
            style={{
              width: "200px",
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "5px",
              marginRight: "5px",
              borderRadius: "1px",
              backgroundColor: Cssgrade ? "#007bff" : "",
              color: Cssgrade ? "white" : "",
            }}
          >
            CSS grade
          </div>
        </div>
      </div>

      <div className="table-container">
        <table
          className="table table-hover table-striped"
          // style={{ marginBottom: "5rem" }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                style={{ display: Renderingengine ? "" : "none" }}
                onClick={() => handleSort("renderingengine")}
              >
                Rendering engine &nbsp; &nbsp;
                {sortColumn === "renderingengine" && (
                  <span>
                    {sortDirection === "asc" ? (
                      <FaArrowDownShortWide />
                    ) : (
                      <HiMiniArrowsUpDown />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                style={{ display: Browser ? "" : "none" }}
                onClick={() => handleSort("browser")}
              >
                Browser &nbsp; &nbsp;
                {sortColumn === "browser" && (
                  <span>
                    {sortDirection === "asc" ? (
                      <FaArrowDownShortWide />
                    ) : (
                      <HiMiniArrowsUpDown />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                style={{ display: Platform ? "" : "none" }}
                onClick={() => handleSort("platform")}
              >
                Platform(s) &nbsp; &nbsp;
                {sortColumn === "platform" && (
                  <span>
                    {sortDirection === "asc" ? (
                      <FaArrowDownShortWide />
                    ) : (
                      <HiMiniArrowsUpDown />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                style={{ display: Engineversion ? "" : "none" }}
                onClick={() => handleSort("engineversion")}
              >
                Engine version &nbsp; &nbsp;
                {sortColumn === "engineversion" && (
                  <span>
                    {sortDirection === "asc" ? (
                      <FaArrowDownShortWide />
                    ) : (
                      <HiMiniArrowsUpDown />
                    )}
                  </span>
                )}
              </th>
              <th
                scope="col"
                style={{ display: Cssgrade ? "" : "none" }}
                onClick={() => handleSort("cssgrade")}
              >
                CSS grade &nbsp; &nbsp;
                {sortColumn === "cssgrade" && (
                  <span>
                    {sortDirection === "asc" ? (
                      <FaArrowDownShortWide />
                    ) : (
                      <HiMiniArrowsUpDown />
                    )}
                  </span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filterAndSortData()
              .slice(startIndex, endIndex)
              .map((ele, i) => {
                return (
                  <tr className="" key={i}>
                    <td style={{ display: Renderingengine ? "" : "none" }}>{ele.renderingengine}</td>
                    <td
                      className="border"
                      style={{ display: Browser ? "" : "none" }}
                    >
                      {ele.browser}
                    </td>
                    <td
                      className="border"
                      style={{ display: Platform ? "" : "none" }}
                    >
                      {ele.platform}
                    </td>
                    <td
                      className="border"
                      style={{ display: Engineversion ? "" : "none" }}
                    >
                      {ele.engineversion}
                    </td>
                    <td
                      className="border"
                      style={{ display: Cssgrade ? "" : "none" }}
                    >
                      {ele.cssgrade}
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="col" style={{ display: Renderingengine ? "" : "none" }}>
              Rendering engine &nbsp; &nbsp;
              </th>
              <th scope="col" style={{ display: Browser ? "" : "none" }}>
              Browser &nbsp; &nbsp;
              </th>
              <th scope="col" style={{ display: Platform ? "" : "none" }}>
              Platform(s) &nbsp; &nbsp;
              </th>
              <th scope="col" style={{ display: Engineversion ? "" : "none" }}>
              Engine version &nbsp; &nbsp;
              </th>
              <th scope="col" style={{ display: Cssgrade ? "" : "none" }}>
              CSS grade &nbsp; &nbsp;
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="pagination">
        <div className="col-sm-12 col-md-5 pagi-1 pt-2">
          Showing {startIndex} to {endIndex} of {totalEntries} entries
        </div>
        <div className="col-sm-12 col-md-7 pagi-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-controls="example3"
            aria-disabled="true"
            role="link"
            data-dt-idx="next"
            tabindex="0"
            class="page-link"
            style={{ "border-radius": "unset" }}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (v, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`page-link ${
                i + 1 === currentPage ? "active" : "inactive"
              }`}
              style={{
                paddingRight: 15,
                paddingLeft: 15,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: "unset",
                borderColor: "#D3D3D3",
              }}
              aria-controls="example3"
              aria-disabled="true"
              role="link"
              data-dt-idx="next"
              tabindex="0"
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-controls="example3"
            aria-disabled="true"
            role="link"
            data-dt-idx="next"
            tabindex="0"
            class="page-link"
            style={{ "border-radius": "unset" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default CrmDashBoardTable;
