import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";

const customerSchema = Yup.object().shape({
    productdetails: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    companyname: Yup.string().required("Required"),
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



function NewProduct() {
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

        >
            {(formik) => (
                <form action="" onSubmit={formik.handleSubmit}>
                    <fieldset>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="bg-white col-11">
                                <div className="d-flex justify-content-center">
                                    <div className="bg-warning col-11 m-1 mt-3 rounded shadow-sm elevation-2">
                                        <p className="text-white p-1 m-0">Add Product Details
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
                                            </sup></p>

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
                                                    <strong>Bill <br /> Number</strong>

                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <input
                                                    type="text"
                                                    className="w-100 border pl-2"
                                                    placeholder="Bill number"
                                                    name="billnumber"
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
                                                    <strong>Product Name</strong>

                                                </label>
                                            </div>
                                            <div className="col-8 d-flex p-0">
                                                <div className="col-5 m-0">
                                                    <select
                                                        className="w-100 border pl-2"
                                                        name="select product"
                                                    >
                                                        <option value="">Select a Product</option>
                                                        <option value="product1">Product 1</option>
                                                        <option value="product2">Product 2</option>
                                                        <option value="product3">Product 3</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>
                                                <button
                                                        className="btn btn-sm border btn-info "
                                                        style={{ backgroundColor: "" }}
                                                    >
                                                        New Product
                                                    </button>
                                            </div>

                                        </div>
                                        <div className="col-12 d-flex m-2  mb-3">
                                            <div className="col-4 d-flex justify-content-end">
                                                <label
                                                    htmlFor=""
                                                    className="m-0 p-0"
                                                    style={{ fontSize: 15 }}
                                                >
                                                    <strong>Product Category</strong>

                                                </label>
                                            </div>
                                            <div className="col-8 d-flex p-0">
                                                <div className="col-5 m-0">
                                                    <select
                                                        className="w-100 border pl-2"
                                                        name="select product"

                                                    >
                                                        <option value="">Select a Product</option>
                                                        <option value="product1">Product 1</option>
                                                        <option value="product2">Product 2</option>
                                                        <option value="product3">Product 3</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>

                                                <button
                                                        className="btn btn-sm border btn-info "
                                                        style={{ backgroundColor: "" }}
                                                    >
                                                        New Category
                                                    </button>
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
                                                    <strong>Product <br /> Status</strong>
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
                                                <Field
                                                    as="select"
                                                    name="bestwaycontact"
                                                    id="bestwaycontact"
                                                    className="border w-100 pl-2"
                                                >
                                                    <option value="active">Active</option>
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
                                                    <strong>Buying <br /> Price</strong>

                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <input
                                                    type="number"
                                                    className="w-100 border pl-2"
                                                    placeholder="Price"
                                                    name="altphone"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.altphone}
                                                />
                                                {formik.touched.altphone && formik.errors.altphone && (
                                                    <span style={{ color: "red" }}>
                                                        {formik.errors.buyingprice}
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
                                                    <strong>Quantity <br />
                                                        Ordered</strong>

                                                </label>
                                            </div>
                                            <div className="col-8">
                                                <input
                                                    type="email"
                                                    className="w-100 border pl-2"
                                                    placeholder="Quantity"
                                                    name="quantity"
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
                                        Notes                                    </label>
                                </div>
                                <div className="border col-11 mt-1 ml-5 "></div>

                                <div className="d-flex ">
                                    <div className="col-6 ">
                                        <div className="col-12 d-flex m-2 mb-3">
                                            <label
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{ fontSize: 15 }}
                                            >
                                                <strong>Notes</strong>
                                            </label>
                                            <textarea
                                                className="border w-100 pl-2 ml-5"
                                                id="notes"
                                                name="notes"
                                                rows={5}
                                                placeholder="Notes"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.notes}
                                            />
                                        </div>
                                        <div className="col-12 d-flex m-2 mb-3">

                                        </div>
                                        <div className="border col-12 ml-1 mb-3"></div>

                                    </div>
                                    <div className="col-6 ">
                                        <div className="col-12 d-flex m-2 mb-3">

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
                                        </div>
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

export default NewProduct;
