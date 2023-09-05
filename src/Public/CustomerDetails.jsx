
import * as Yup from "yup";
import { Formik, Field, } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Table from 'react-bootstrap/Table';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FaTextWidth } from 'react-icons/fa'
import backgroundImage from '../Images/banner4.png';
import profileImageUrl from '../Images/user8-128x128.jpg';
import Avatar from '@mui/material/Avatar';
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-buttons-bs4';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import copy from "clipboard-copy";
import Papa from "papaparse";
import { AiFillCaretDown } from "react-icons/ai";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import OutsideClickHandler from "react-outside-click-handler";
import Task from "./Sections/Task";
import InteractionRecord from "./Sections/InteractionRecord";
import Service from "./Sections/Service";
import Purchase from "./Sections/Purchase";
import Quotation from "./Sections/Quotation";
import Invoice from "./Sections/Invoice";
import Status from "./Sections/Status";
import NewCustomerInformation from './NewCustomerInformation';





const customerSchema = Yup.object().shape({
  product: Yup.string().required("Required"),
  priority: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
  notes: Yup.string().required("Required"),
  direction: Yup.string().required("Required"),
});


function CustomerDetails() {


  // let [value, setValue] = useState(null);
  // let dataarray =
  //   value == null
  //     ? data
  //     : data.filter((ele) => {

  //       (
  //         ele.assigned.includes(value) ||
  //         ele.created.includes(value) ||
  //         ele.duedate.includes(value) ||
  //         ele.id.includes(value) ||
  //         ele.priority.includes(value) ||
  //         ele.status.includes(value) ||
  //         ele.subject.includes(value)
  //       );
  //     });

  




  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const options1 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const options2 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options3 = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];


  useEffect(() => {
    $(document).ready(function () {
      const table = $('#example1').DataTable({
        responsive: true,
        lengthChange: false,
        autoWidth: false,
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
        ]
      });

      new $.fn.dataTable.Buttons(table, {
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
        ]
      }).container().appendTo($('#example1_wrapper .col-md-6:eq(0)'));
    });

  }, []);
  return (

    <div>
      <div className="col-12 w-9 d-flex justify-content-center" style={{ paddingTop: 5, position: 'relative' }}>
        <img
          src={backgroundImage}
          alt=""
          style={{
            width: "100%",
            height: "5rem", // Adjust the image height as needed
            objectFit: "cover",
          }}
        />
        <Avatar
          src={profileImageUrl}
          className="my-5"
          style={{
            position: 'absolute',
            left: '51%',
            transform: 'translateX(-50%)',
            zIndex: 3, // Place the Avatar above the image
            width: '6rem', // Adjust the width as needed
            height: '6rem', // Adjust the height as needed
          }}
        >
          {/* Your Avatar content */}
        </Avatar>
      </div>


      <Formik
        initialValues={{
          priority: "Midium",
          product: "CRM",
          status: "Close",
          direction: "Outbond",
          notes: "",
        }}
        validationSchema={customerSchema}
        onSubmit={(values) => {
          try {
            const token = localStorage.getItem("accessToken");
            const response = axios.post(
              "http://localhost:8080/createtask",
              values,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (response.data.statusCodeValue === 200) {
              // navigate("");

              alert("form submitted successfully");

            } else {
              toast.error(response.data.body);
            }
          } catch (errors) {
            console.log(errors);
          }

          console.log(values);
        }}
      >
        {(formik) => (
          <form action="" onSubmit={formik.handleSubmit}>
            <fieldset>
              <NewCustomerInformation />

              <div className=" mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="bg-white rounded shadow-sm elevation-2 p-3">
                      <h4 className="text-center">Interaction Record</h4>
                      <hr className="border" />
           
                        <div className="row">
                          <div className="col-lg-2 col-md-4 col-sm-12">
                            <label htmlFor="direction" className="form-label">
                              <strong>Direction</strong>
                            </label>
                          </div>
                          <div className="col-lg-10 col-md-8 col-sm-12">
                            <select
                              className="form-select"
                              name="direction"
                              id="direction"
                              aria-label="Direction"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.direction}
                            >
                              <option value="Outbound">Outbound</option>
                              {options3.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            {formik.touched.direction && formik.errors.direction && (
                              <span className="text-danger">{formik.errors.direction}</span>
                            )}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-2 col-md-4 col-sm-12">
                            <label htmlFor="status" className="form-label">
                              <strong>Status</strong>
                            </label>
                          </div>
                          <div className="col-lg-3 col-md-8 col-sm-12">
                            <select
                              className="form-select"
                              name="status"
                              id="status"
                              aria-label="Status"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.status}
                            >
                              <option value="Close">Close</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            {formik.touched.status && formik.errors.status && (
                              <span className="text-danger">{formik.errors.status}</span>
                            )}
                          </div>
                          <div className="col-lg-4 col-md-12 col-sm-12">
                            <label htmlFor="priority" className="form-label">
                              <strong>Priority</strong>
                            </label>
                          </div>
                          <div className="col-lg-3 col-md-12 col-sm-12">
                            <select
                              className="form-select"
                              name="priority"
                              id="priority"
                              aria-label="Priority"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.priority}
                            >
                              <option value="Medium">Medium</option>
                              {options1.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            {formik.touched.priority && formik.errors.priority && (
                              <span className="text-danger">{formik.errors.priority}</span>
                            )}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-2 col-md-4 col-sm-12">
                            <label htmlFor="product" className="form-label">
                              <strong>Product</strong>
                            </label>
                          </div>
                          <div className="col-lg-10 col-md-8 col-sm-12">
                            <select
                              className="form-select"
                              name="product"
                              id="product"
                              aria-label="Product"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.product}
                            >
                              <option value="CRM">CRM</option>
                              {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            {formik.touched.product && formik.errors.product && (
                              <span className="text-danger">{formik.errors.product}</span>
                            )}
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-2 col-md-4 col-sm-12">
                            <label htmlFor="notes" className="form-label">
                              <strong>Notes</strong>
                            </label>
                          </div>
                          <div className="col-lg-10 col-md-8 col-sm-12">
                            <textarea
                              className="form-control"
                              id="notes"
                              name="notes"
                              rows={3}
                              placeholder="Notes"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.notes}
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-12 text-end">
                            <button
                              type="submit"
                              className="btn btn-info btn-sm"
                              style={{ backgroundColor: '' }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                 
                    </div>
                  </div>
                  {/* Notes component */}
                  <div className="col-lg-6">
                    <div className="bg-white rounded shadow-sm elevation-2 p-3">
                      <h4 className="text-center">
                        <FaTextWidth /> Notes
                      </h4>
                      <hr className="border" />
                      <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                          <label htmlFor="notes" className="form-label">
                            <strong>Notes</strong>
                          </label>
                        </div>
                        <div className="col-lg-10 col-md-8 col-sm-12">
                          <textarea
                            className="form-control"
                            id="notes"
                            name="notes"
                            rows={5}
                            placeholder="Notes"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.notes}
                            style={{ height: 260 }}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-12 text-end">
                          <button className="btn btn-info btn-sm" style={{ backgroundColor: '' }}>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* task component */}
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex ">
                    <div className="bg-warning col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>
                  <label className="ml-6 pt-2  m-0">
                    Task
                  </label>

                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>
                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>
                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>
                          </div>
                        </div>
                      </div>

                      <Task />


                      <div style={{
                        paddingBottom: 18,
                        paddingTop: 20
                      }}>
                        <button
                          className="btn btn-sm border btn-info "
                          style={{ backgroundColor: "", }}
                        >Create Task</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* interaction record */}
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex justify-content-right">
                    <div className="bg-info col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>
                  <label className="ml-6 pt-2  m-0">
                    Interaction Record
                  </label>

                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>
                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>
                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>
                          </div>
                        </div>
                      </div>
                      <InteractionRecord />


                    </div>
                  </div>
                </div>
              </div>

              {/* service request */}
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex justify-content-right">
                    <div className="bg-info col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>
                  <label className="ml-6 pt-2  m-0">
                    Service Request
                  </label>

                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>
                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>
                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>
                          </div>
                        </div>
                      </div>


                      <Service />


                    </div>
                  </div>
                </div>
              </div>
              {/* invoice */}
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex justify-content-end"> {/* 'justify-content-right' corrected to 'justify-content-end' */}
                    <div className="bg-danger col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div> {/* 'bg-info' changed to 'bg-danger' for red color */}
                  </div>
                  <label className="ml-6 pt-2  m-0">
                    Inovice
                  </label>

                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>
                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>
                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>
                          </div>
                        </div>
                      </div>


                      <Invoice />


                    </div>
                  </div>
                </div>
              </div>
              {/* PURCHASE ORDER */}
              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex justify-content-right">
                    <div className="bg-info col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>

                  <label className="ml-6 pt-2  m-0">
                    Purchase Order
                  </label>


                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>

                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>

                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>

                          </div>
                        </div>
                      </div>
                      < Purchase />

                    </div>
                  </div>
                </div>
              </div>


              {/* Performa Invoice */}


              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex ">
                    <div className="bg-warning col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>

                  <label className="ml-6 pt-2  m-0">
                    Proforma Invoice
                  </label>


                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>

                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>

                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>

                          </div>
                        </div>
                      </div>
                      <Invoice />
                    </div>
                  </div>
                </div>
              </div>


              {/* quatation  */}


              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex justify-content-right">
                    <div className="bg-info col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>

                  <label className="ml-6 pt-2  m-0">
                    Quotation
                  </label>


                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>

                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>

                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>

                          </div>
                        </div>
                      </div>
                      <Quotation />


                    </div>
                  </div>
                </div>
              </div>




              {/* Status History */}




              <div className="col-12 d-flex justify-content-center">
                <div className="bg-white col-12 mt-3">
                  <div className="d-flex ">
                    <div className="bg-warning col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                  </div>

                  <label className="ml-6 pt-2  m-0">
                    Status History
                  </label>


                  <div className="d-flex ">
                    <div className="col-12 ">
                      <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-4 d-flex justify-content-start">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Show</strong>
                          </label>

                          <div className="col-5">
                            <Field
                              as="select"
                              name="status"
                              id="status"
                              className="border w-100 pl-2"
                            >
                              <option value="number">10</option>
                              {options2.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            {formik.touched.status &&
                              formik.errors.status && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.status}
                                </span>
                              )}
                          </div>

                          <div className="col-4 d-flex justify-content-start">
                            <label
                              htmlFor=""
                              className="m-0 p-0"
                              style={{ fontSize: 15 }}
                            >
                              <strong>entries</strong>
                            </label>

                          </div>
                        </div>
                      </div>
                      <Status />


                    </div>
                  </div>
                </div>
              </div>
            
            </fieldset>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default CustomerDetails
