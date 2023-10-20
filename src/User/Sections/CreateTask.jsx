import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/CreateTask.css";
import MainSidebar from "../Mainsidebar";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";

const customerSchema = Yup.object().shape({
  date: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});

export default function CreateTask() {
  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const handleScreenEnter = () => {
    setFullScreen(false);
    document.body.requestFullscreen();
  };
  const handleScreenExit = () => {
    setFullScreen(true);
    document.exitFullscreen();
  };
  const handelShow = () => setIsSearchShow(!isSearchShow);
  const handelRightMenuShow = () => setisRightMenu(!isRightMenu);
  const handleclickonbutton = (hamburger) => {
    if (document.documentElement.clientWidth <= 800)
      return { width: "100%", left: "0rem" };
    else
      return {
        width: !hamburger && "-webkit-fill-available",
        left: !hamburger && "3.7rem",
      };
  };
  const handleclickonbutton1 = (hamburger) => {
    if (document.documentElement.clientWidth <= 800) {
      return { display: hamburger && "none" };
    }
  };
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
  return (
    <div className="con1 d-flex">
      <div className="subcon1" style={handleclickonbutton1(hamburger)}>
        <MainSidebar hamburger={hamburger} sethamburger={sethamburger} />
      </div>
      <div className="subcon2" style={handleclickonbutton(hamburger)}>
        <UserNavbar
          hamburger={hamburger}
          sethamburger={sethamburger}
          handelRightMenuShow={handelRightMenuShow}
          handelShow={handelShow}
          isSearchShow={isSearchShow}
          handleScreenEnter={handleScreenEnter}
          handleScreenExit={handleScreenExit}
          fullScreen={fullScreen}
        />
        <div className="mt-2">
          <Formik
            initialValues={{
              date: "",
              subject: "",
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
                  <div className="col-12 d-flex justify-content-center">
                    <div className="bg-white col-11">
                      <div className="d-flex justify-content-center">
                        <div className="bg-warning col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1">
                          <p className="text-white p-1 m-0">Create Task</p>
                        </div>
                      </div>
                      {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                      <div className="d-flex flex-wrap">
                        <div className="col-12 col-md-6 pl-0 pr-0">
                          <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Subject</strong>
                                <sup
                                  style={{
                                    color: "red",
                                    top: 0,
                                    fontSize: 15,
                                    lineHeight: 0,
                                    position: "relative",
                                    verticalAlign: "baseline",
                                  }}
                                >
                                  *
                                </sup>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                              <input
                                type="text"
                                className="w-100 border rounded border-gray pl-2"
                                placeholder="Subject"
                                name="subject"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                              />
                              {formik.touched.subject &&
                                formik.errors.subject && (
                                  <span style={{ color: "red" }}>
                                    {formik.errors.subject}
                                  </span>
                                )}
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Due Date:</strong>
                                <sup
                                  style={{
                                    color: "red",
                                    top: 0,
                                    fontSize: 15,
                                    lineHeight: 0,
                                    position: "relative",
                                    verticalAlign: "baseline",
                                  }}
                                >
                                  *
                                </sup>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8 d-flex px-2 m-0">
                              <div
                                className="col-12 m-0"
                                style={{
                                  paddingLeft: "2px",
                                  paddingRight: "0px",
                                }}
                              >
                                <div className="p-0 m-0 w-100 ">
                                  <input
                                    className="input-field date w-100 border rounded border-gray"
                                    type="date"
                                    placeholder=""
                                    name="date"
                                    value={formik.values.date}
                                    onChange={formik.handleChange}
                                  />
                                </div>
                                <div className="p-0 m-0 d-flex justify-content-center">
                                  {formik.touched.date &&
                                    formik.errors.date && (
                                      <span style={{ color: "red" }}>
                                        {formik.errors.date}
                                      </span>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Priority</strong>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                              <Field
                                as="select"
                                name="status"
                                id="status"
                                className="border rounded border-gray w-100 pl-2"
                              >
                                <option value="Active">Normal</option>
                                {options2.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Status</strong>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                              <Field
                                as="select"
                                name="leadsource"
                                id="leadsource"
                                className="border rounded border-gray w-100 pl-2"
                              >
                                <option value="Indiamart">Open</option>
                                {options1.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>
                          {/* <div className="border col-12 ml-1 mb-3"></div> */}
                        </div>

                        <div className="col-12 col-md-6 pl-0 pr-0">
                          <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg ">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Assigned To </strong>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                              <Field
                                as="select"
                                name="bestwaycontact"
                                id="bestwaycontact"
                                className="border rounded border-gray w-100 pl-2"
                              >
                                <option value="Mobile">Sachin Choudhary</option>
                                {options.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </Field>
                            </div>
                          </div>
                          <div className=" col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Notes</strong>
                              </label>
                            </div>

                            <div className="col-12 col-sm-8">
                              <textarea
                                className="border rounded border-gray w-100 pl-2"
                                id="notes"
                                name="notes"
                                rows={5}
                                placeholder="Notes"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.notes}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                            <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                              <button className="btn btn-sm btn-light border rounded border-gray">
                                Cancel
                              </button>
                            </div>
                            <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                              <button
                                className="btn btn-sm border rounded border-gray btn-info "
                                style={{ backgroundColor: "" }}
                              >
                                Save
                              </button>
                            </div>
                          </div>

                          {/* <div className="border col-12 ml-1 mb-3"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            )}
          </Formik>
        </div>
        <UserFooter />
      </div>
    </div>
  );
}
