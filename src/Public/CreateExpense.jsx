import React from 'react'
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const customerSchema = Yup.object().shape({
    billnumber: Yup.number().required("Required"),
    subject: Yup.date().required("Required"),
    expensedate: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
    status: Yup.string().required("Required"),
    reportto: Yup.string().required("Required"),
    notes: Yup.string().required("Required"),
});

const CreateExpense = () => {
    const options = [
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
        billnumber:"",
        subject:"",
        expensedate:"",
        category:"",
        amount:"",
        status:"",
        reportto:"",
        notes:"",
    }}
    validationSchema={customerSchema}
      onSubmit={(values) => {
        try {
          
        } catch (error) {
          
        }
      }}
    >
        {(formik) => (
            <form action="">
                <fieldset>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="bg-white col-11">
                            <div className="d-flex justify-content-center">
                                <div className="bg-warning col-11 m-1 mt-3 rounded shadow-sm elevation-1">
                                    <p className="text-white p-1 m-0">Create Expense</p>
                                </div>
                            </div>
                            <div className="border col-11 m-1 ml-5"></div>

                            <div className="d-flex">
                                <div className="col-6">
                                    <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Bill <br/> Number</strong>
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
                                                value={formik.values.billnumber} 
                                            />
                                            {formik.touched.billnumber &&
                                                formik.errors.billnumber && (
                                                    <span style={{ color: "red" }}>
                                                        {formik.errors.billnumber}
                                                    </span>
                                                )}
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Subject</strong>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <input 
                                                type="text"
                                                className="w-100 border pl-2"
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

                                    <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Expense <br/> Date:</strong>
                                                <sup
                                                    style={{
                                                        color: "red",
                                                        fontSize: 15,
                                                        lineHeight: 0,
                                                        position: "center",
                                                        verticalAlign: "baseline",
                                                        top: 0,
                                                    }}
                                                >
                                                    *
                                                </sup>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <input 
                                                type="text"
                                                className="w-100 border pl-2"
                                                placeholder="Bill number"
                                                name="expensedate"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.expensedate} 
                                            />
                                            {formik.touched.expensedate &&
                                                formik.errors.expensedate && (
                                                    <span style={{ color: "red" }}>
                                                        {formik.errors.expensedate}
                                                    </span>
                                                )}
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Category</strong>
                                                <sup
                                                    style={{
                                                        top: 0,
                                                        fontSize: 15,
                                                        lineHeight: 0,
                                                        position: "relative",
                                                        verticalAlign: "baseline",
                                                        color: "red",
                                                    }}
                                                >
                                                    *
                                                </sup>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                as="select"
                                                name="category"
                                                id="bestwaycontact"
                                                className="border w-100 pl-2"
                                            >
                                                <option value="active">Select</option>
                                                {options.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center">
                                        <button
                                            className="btn btn-sm border btn-info "
                                            style={{ backgroundColor: "" }}
                                        >
                                            New Category +
                                        </button>
                                    </div>
                                    <div className="border col-12 ml-1 mb-3 mt-2"></div>
                                </div>

                                <div className="col-6 pl-1">
                                <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Amount</strong>
                                                <sup
                                                    style={{
                                                        top: 0,
                                                        fontSize: 15,
                                                        lineHeight: 0,
                                                        position: "relative",
                                                        verticalAlign: "baseline",
                                                        color: "red",
                                                    }}
                                                >
                                                    *
                                                </sup>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <input 
                                                type="text"
                                                className="w-100 border pl-2"
                                                placeholder="Amount"
                                                name="amount"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.amount} 
                                            />
                                            {formik.touched.amount &&
                                                formik.errors.amount && (
                                                    <span style={{ color: "red" }}>
                                                        {formik.errors.amount}
                                                    </span>
                                                )}
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Status</strong>
                                                <sup
                                                    style={{
                                                        top: 0,
                                                        fontSize: 15,
                                                        lineHeight: 0,
                                                        position: "relative",
                                                        verticalAlign: "baseline",
                                                        color: "red",
                                                    }}
                                                >
                                                    *
                                                </sup>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                as="select"
                                                name="status"
                                                id="bestwaycontact"
                                                className="border w-100 pl-2"
                                            >
                                                <option value="active">Unsettled</option>
                                                {options2.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex m-2 mb-3">
                                        <div className="col-4 d-flex justify-content-end">
                                            <label 
                                                htmlFor=""
                                                className="m-0 p-0"
                                                style={{fontSize: 15}}
                                            >
                                                <strong>Report <br /> To</strong>
                                            </label>
                                        </div>
                                        <div className="col-8">
                                            <Field
                                                as="select"
                                                name="reportto"
                                                id="bestwaycontact"
                                                className="border w-100 pl-2"
                                            >
                                                <option value="reportto">Sachin Choudhary</option>
                                                {options3.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </Field>
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
                                    Notes
                                </label>
                            </div>
                            <div className="border col-11 mt-1 ml-5 "></div>

                            <div className="d-flex ">
                                <div className="col-6 ">
                                    <div className="col-12 d-flex m-2 mb-3">
                                        <label
                                            htmlFor=""
                                            className="m-0 p-0"
                                            style={{ fontSize: 15}}
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
                                            <div className="col-4 d-flex justify-content-start">
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
  )
}

export default CreateExpense