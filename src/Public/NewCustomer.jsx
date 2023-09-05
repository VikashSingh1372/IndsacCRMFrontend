import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const customerSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  companyname: Yup.string().required("Required"),
  mobile: Yup.number().required("Required"),
  altphone: Yup.number().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  department: Yup.string().required("Required"),
  designation: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  reportTo: Yup.string().required("Required"),
  gstnumber: Yup.string().required("Required"),
  website: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  pincode: Yup.number().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});



function NewCustomer() {
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
    <Formik
      initialValues={{
        // "readstatus":"...",
        // "product":"...",
        // "owner":"..."

        firstname: "",
        lastname: "",
        companyname: "",
        mobile: null,
        altphone: null,
        email: "",
        department: "",
        designation: "",
        category: "",
        reportTo: "",
        gstnumber: "",
        website: "",
        add1: "",
        add2: "",
        add3: "",
        city: "",
        pincode: null,
        state: "",
        country: "",
        notes: "",
        bestwaycontact: "",
        leadsource: "",
        status: "",
      }}
      validationSchema={customerSchema}
      onSubmit={(values) => {

      try
      {const token =localStorage.getItem("accessToken")
      const response=axios.post("http://localhost:8080/Customer",values,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.data.statusCodeValue === 200) {
        // navigate("");
        alert("form submitted successfully");
      } else {
        toast.error(response.data.body);
      }
    }
      catch(errors)
      {
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
                  <div className="bg-warning col-11 m-1 mt-3 rounded shadow-sm elevation-2">
                    <p className="text-white p-1 m-0">New Customer</p>
                  </div>
                </div>
                <div className="border col-11 mt-1 ml-5 "></div>

                <div className="d-flex">
                  <div className="col-6 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Company Name</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Company Name"
                          name="companyname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.companyname}
                        />
                        {formik.touched.companyname &&
                          formik.errors.companyname && (
                            <span style={{ color: "red" }}>
                              {formik.errors.companyname}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Contact</strong>
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
                      <div className="col-8 d-flex p-0">
                        <div className="col-5 m-0">
                          <input
                            type="text"
                            className="w-100 border pl-2"
                            placeholder="First Name"
                            name="firstname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                          />
                          {formik.touched.firstname &&
                            formik.errors.firstname && (
                              <span style={{ color: "red" }}>
                                {formik.errors.firstname}
                              </span>
                            )}
                        </div>

                        <div className="col-7">
                          <div className="p-0 m-0  d-flex justify-content-end">
                            <input
                              type="text"
                              className="w-75 border pl-2"
                              placeholder="Last Name"
                              name="lastname"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.lastname}
                            />
                          </div>
                          <div className="p-0 m-0 d-flex justify-content-center">
                            {formik.touched.lastname &&
                              formik.errors.lastname && (
                                <span style={{ color: "red" }}>
                                  {formik.errors.lastname}
                                </span>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Status</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="status"
                          id="status"
                          className="border w-100 pl-2"
                        >
                          <option value="Active">Active</option>
                          {options2.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>
                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Source</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="leadsource"
                          id="leadsource"
                          className="border w-100 pl-2"
                        >
                          <option value="Indiamart">Indiamart</option>
                          {options1.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>
                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>

                  <div className="col-6 pl-1">
                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0 text-right"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Best Way to Contact</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="bestwaycontact"
                          id="bestwaycontact"
                          className="border w-100 pl-2"
                        >
                          <option value="Mobile">Mobile</option>
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Mobile</strong>
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
                      <div className="col-8">
                        <input
                          type="number"
                          className="w-100 border pl-2"
                          placeholder="Mobile"
                          name="mobile"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobile}
                        />
                        {formik.touched.mobile && formik.errors.mobile && (
                          <span style={{ color: "red" }}>
                            {formik.errors.mobile}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Phone</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="number"
                          className="w-100 border pl-2"
                          placeholder="Phone"
                          name="altphone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.altphone}
                        />
                        {formik.touched.altphone && formik.errors.altphone && (
                          <span style={{ color: "red" }}>
                            {formik.errors.altphone}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Email</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="email"
                          className="w-100 border pl-2"
                          placeholder="Email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <span style={{ color: "red" }}>
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <div className="bg-white col-11 mt-3">
                <div>
                  <label className="ml-5 pt-3 p-0 m-0">
                    Other Informations
                  </label>
                </div>
                <div className="border col-11 mt-1 ml-5 "></div>

                <div className="d-flex ">
                  <div className="col-6 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Department</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Department"
                          name="department"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.department}
                        />
                        {formik.touched.department &&
                          formik.errors.department && (
                            <span style={{ color: "red" }}>
                              {formik.errors.department}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Designation</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Designation"
                          name="designation"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.designation}
                        />
                        {formik.touched.designation &&
                          formik.errors.designation && (
                            <span style={{ color: "red" }}>
                              {formik.errors.designation}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Category</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Category"
                          name="category"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.category}
                        />
                        {formik.touched.category && formik.errors.category && (
                          <span style={{ color: "red" }}>
                            {formik.errors.category}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>

                  <div className="col-6 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>ReportTo</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="ReportTo"
                          name="reportTo"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.reportTo}
                        />
                        {formik.touched.reportTo && formik.errors.reportTo && (
                          <span style={{ color: "red" }}>
                            {formik.errors.reportTo}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>GSTIN</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="GST Number"
                          name="gstnumber"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.gstnumber}
                        />
                        {formik.touched.gstnumber &&
                          formik.errors.gstnumber && (
                            <span style={{ color: "red" }}>
                              {formik.errors.gstnumber}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Website</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="https://abc.com/"
                          name="website"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.website}
                        />
                        {formik.touched.website && formik.errors.website && (
                          <span style={{ color: "red" }}>
                            {formik.errors.website}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <div className="bg-white col-11 mt-3">
                <div>
                  <label className="ml-5 pt-3 p-0 m-0">Address</label>
                </div>
                <div className="border col-11 mt-1 ml-5 "></div>

                <div className="d-flex ">
                  <div className="col-6 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Address1</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="add1"
                          name="Address1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.add1}
                        />
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Address2</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Address2"
                          name="add2"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.add2}
                        />
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Address3</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Address3"
                          name="add3"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.add3}
                        />
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-6 d-flex">
                        <div className="col-8 d-flex justify-content-end">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>City</strong>
                          </label>
                        </div>
                        <div className="col-4">
                          <input
                            type="text"
                            className="w-100 border ml-1 px-2"
                            placeholder="City"
                            name="city"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                          />
                          {formik.touched.city && formik.errors.city && (
                            <span style={{ color: "red" }}>
                              {formik.errors.city}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-6 d-flex">
                        <div className="col-6 d-flex justify-content-end">
                          <label
                            htmlFor=""
                            className="m-0 p-0"
                            style={{ fontSize: 15 }}
                          >
                            <strong>Pincode</strong>
                          </label>
                        </div>
                        <div className="col-6">
                          <input
                            type="number"
                            className="w-100 border pl-2"
                            placeholder="Pincode"
                            name="pincode"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.pincode}
                          />
                          {formik.touched.pincode && formik.errors.pincode && (
                            <span style={{ color: "red" }}>
                              {formik.errors.pincode}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>State</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="State"
                          name="state"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.state}
                        />
                        {formik.touched.state && formik.errors.state && (
                          <span style={{ color: "red" }}>
                            {formik.errors.state}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Country</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Country"
                          name="country"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.country}
                        />
                        {formik.touched.country && formik.errors.country && (
                          <span style={{ color: "red" }}>
                            {formik.errors.country}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>

                  <div className="col-6 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Notes</strong>
                        </label>
                      </div>

                      <div className="col-8">
                        <textarea
                          className="border w-100 pl-2"
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

                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <button className="btn btn-sm btn-light border">
                          Cancel
                        </button>
                      </div>
                      <div className="col-8 d-flex justify-content-end">
                        <button
                          className="btn btn-sm border btn-info "
                          style={{ backgroundColor: "" }}
                        >
                          Save
                        </button>
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      )}
    </Formik>
  );
}

export default NewCustomer;
