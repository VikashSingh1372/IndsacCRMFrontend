import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const customerSchema = Yup.object().shape({
  product: Yup.string().required("Required"),
  priority: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
  notes: Yup.string().required("Required"),
  direction: Yup.string().required("Required"),
});

function Interaction() {
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

  return (
    <Formik
      initialValues={{
        priority:"Midium",
        product:"CRM",
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
            {
              alert("form submitted successfully");
            }
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
                  <div className="bg-info col-11 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                </div>

                <label className="ml-5 p-0 m-0">Interaction Record</label>

                <div className="border col-11 mt-1 ml-5 "></div>

                  <div className="col-12 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-2 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Direction</strong>
                        </label>
                      </div>
                      <div className="col-10">
                        <Field
                          as="select"
                          name="direction"
                          id="direction"
                          className="border w-100 pl-2"
                        >
                          <option value="Outbond" >Outbond</option>
                          {options3.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        {formik.touched.direction &&
                          formik.errors.direction && (
                            <span style={{ color: "red" }}>
                              {formik.errors.direction}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                        <div className="col-2 d-flex justify-content-end">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Status</strong>
                          </label>
                        </div>
                        <div className="col-3">
                          <Field
                            as="select"
                            name="status"
                            id="status"
                            className="border w-100 pl-2"
                          >
                            <option value="Close">Close</option>
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
            
                        <div className="col-4 d-flex justify-content-end">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Priority</strong>
                          </label>
                        </div>
                        <div className="col-3">
                          <Field
                            as="select"
                            name="priority"
                            id="priority"
                            className="border w-100 pl-2"
                          >
                            <option value="Midium">Midium</option>
                            {options1.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                          {formik.touched.priority &&
                            formik.errors.priority && (
                              <span style={{ color: "red" }}>
                                {formik.errors.priority}
                              </span>
                            )}
                        </div>
                    </div>

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-2 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Product</strong>
                        </label>
                      </div>
                      <div className="col-10">
                        <Field
                          as="select"
                          name="product"
                          id="product"
                          className="border w-100 pl-2"
                        >
                          <option value="CRM">CRM</option>
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        {formik.touched.product &&
                            formik.errors.product && (
                              <span style={{ color: "red" }}>
                                {formik.errors.product}
                              </span>
                            )}
                      </div>
                    </div>

                    <div className=" col-12 ml-1 mb-3 d-flex">
                      <div className="col-2 d-flex justify-content-end ">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Notes</strong>
                        </label>
                      </div>

                      <div className="col-10 ml-1">
                        <textarea
                          className="border w-100 pl-2"
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

                    <div className="col-12 d-flex m-2 mb-3">
                      
                      <div className="col-12 d-flex justify-content-end">
                        <button
                          className="btn btn-sm border btn-info "
                          style={{ backgroundColor: "" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>
              </div>
            </div>
          </fieldset>
        </form>
      )}
    </Formik>
  );
}

export default Interaction;
