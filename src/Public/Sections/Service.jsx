import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-buttons-bs4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import copy from "clipboard-copy";
import data from "../../utils/table2.json";
import Table from 'react-bootstrap/Table';
import { Formik, Field, } from "formik";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";


function Service() {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false); // New state for dropdown visibility

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
    table.style.borderCollapse = "collapse";

    const tableBody = document.createElement("tbody");
    const headerRow = tableBody.insertRow();

    headerRow.style.backgroundColor = "#f2f2f2";
    headerRow.style.fontWeight = "bold";
    headerRow.style.margin = "10px";
    headerRow.style.padding = "10px";

    const headerLabels = ["Request ID", "Subject", "Status", "Due Date", "Priority", "Approval", "Assign", "Created By"];
    headerLabels.forEach((label) => {
      const cell = headerRow.insertCell();
      cell.textContent = label;
      cell.style.width = "100px";
      cell.style.height = "30px";
      cell.style.border = "1px solid gray";
    });

    data.forEach((item) => {
      const row = tableBody.insertRow();
      headerLabels.forEach((label) => {
        const cell = row.insertCell();
        cell.textContent = item[label];
        cell.style.height = "30px";
        cell.style.border = "1px solid gray";
      });
    });

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


  useEffect(() => {
    $(document).ready(function () {
      // Initialize DataTable on the table with the ID 'example2' if it hasn't already been initialized
      if (!$.fn.DataTable.isDataTable('#example4')) {
        const table2 = $('#example4').DataTable({
          responsive: true,
          lengthChange: false,
          autoWidth: false,
          buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
          ]
        });
  
        // Create a new instance of DataTable.Buttons with the same buttons configuration
        const buttons2 = new $.fn.dataTable.Buttons(table2, {
          buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
          ]
        });
  
        // Append the buttons container to the DataTable wrapper
        buttons2.container().appendTo($('#example4_wrapper .col-md-6:eq(0)'));
      }
  
      // Repeat the above process for 'example3' and 'example4' if needed
      // ...
    });
  }, []);
  
  // useEffect(() => {
  //   $(document).ready(function () {
  //     const table = $('#example4').DataTable({
  //       responsive: true,
  //       lengthChange: false,
  //       autoWidth: false,
  //       buttons: [
  //         'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
  //       ]
  //     });

  //     new $.fn.dataTable.Buttons(table, {
  //       buttons: [
  //         'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
  //       ]
  //     }).container().appendTo($('#example4_wrapper .col-md-6:eq(0)'));
  //   });

  // }, []);

  const handleDrop = () => {
    setVisible(!visible); // Toggle dropdown visibility
  };
  return (
    <div>
      <Formik>
        {(formik) => (

          <section className="col-12 d-flex justify-content-center">
            <div className="col-12 mt-3">
              <div className="row">
                <div className="col-12">

                  <div id="example4_wrapper" className="dataTables_wrapper dt-bootstrap4" style={{
                    paddingBottom: 15
                  }}>
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="dt-buttons btn-group flex-wrap">

                          <label
                            htmlFor=""
                            className="px-2 py-1 m-0 item btn btn-secondary"
                            onClick={handleCopyClick}
                          >
                            {copied ? "Copied!" : "Copy"}
                          </label>

                          <label
                            htmlFor=""
                            className="px-2 py-1 m-0 item btn btn-secondary"
                            onClick={convertToJson}
                          >
                            CSV
                          </label>

                          <label
                            htmlFor=""
                            className="px-2 py-1 m-0 item btn btn-secondary"
                            onClick={convertToExcel}
                          >
                            Excel
                          </label>

                          <label
                            htmlFor=""
                            className="px-2 py-1 m-0 item btn btn-secondary"
                            onClick={convertToPdf}
                          >
                            PDF
                          </label>

                          <label
                            htmlFor=""
                            className="px-2 py-1 m-0 item btn btn-secondary"
                            onClick={handlePrint}
                          >
                            Print
                          </label>


                          <div className="dropdown">
                            <label
                              htmlFor=""
                              className="px-2 py-1 m-0 item btn btn-secondary dropdown-toggle"
                              onClick={handleDrop}
                              data-toggle="dropdown"
                            >
                              Column Visibility 
                            </label>

                            {/* Custom dropdown for column visibility */}
                            <div className={`dropdown-menu ${visible ? 'show' : ''} dropdown-menu-right`}>
                              {/* Add your dropdown content here */}
                              <label htmlFor="" className="dropdown-item">
                                Column 1
                              </label>
                              <label htmlFor="" className="dropdown-item">
                                Column 2
                              </label>
                              {/* Add more dropdown items as needed */}
                            </div>

                          </div>






                        </div>
                      </div>

                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <Table id="example4" bordered striped hover responsive>
                          <thead>
                            <tr role="row">
                              <th className="sorting sorting_desc" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column ascending" aria-sort="descending">
                                Request Id
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">
                                Subject
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending">
                                Status
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">
                                Due Date
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">
                                Priority
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">
                                Approval
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">
                                Assign
                              </th>
                              <th className="sorting" tabIndex="0" aria-controls="example4" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">
                                Created By
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td className="dtr-control sorting_1" tabIndex="0">Gecko</td>
                              <td>Firefox 1.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.7</td>
                              <td>1.7</td>
                              <td>A</td>
                              <td>A</td>
                              <td>A</td>
                            </tr><tr className="even">
                              <td className="dtr-control sorting_1" tabIndex="0">Gecko</td>
                              <td>Firefox 1.5</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>1.8</td>
                              <td>A</td>
                              <td>A</td>
                              <td>A</td>
                            </tr><tr className="odd">
                              <td className="dtr-control sorting_1" tabIndex="0">Gecko</td>
                              <td>Firefox 2.0</td>
                              <td>Win 98+ / OSX.2+</td>
                              <td>1.8</td>
                              <td>1.8</td>
                              <td>A</td>
                              <td>A</td>
                              <td>A</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th rowSpan="1" colSpan="1">
                                Request Id
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Subject
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Status
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Due Date
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Priority
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Approval
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Assign
                              </th>
                              <th rowSpan="1" colSpan="1">
                                Created By
                              </th>
                            </tr>
                          </tfoot>

                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        )}
      </Formik>
    </div>
  )
}

export default Service;
