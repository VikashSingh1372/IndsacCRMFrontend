import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const customerSchema = Yup.object().shape({
  productname: Yup.string().required("Required"),
  productcode: Yup.string().required("Required"),
  quantity: Yup.string().required("Required"),
  limit: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
  cat1: Yup.string().required("Required"),
  cat2: Yup.string().required("Required"),
  cat3: Yup.string().required("Required"),
  cat4: Yup.string().required("Required"),
  cat5: Yup.string().required("Required"),
});

const EditStockDetails = () => {
  const options =[
    {value:"active", label:"Active"},
    {value:"option2", label:"Option 2"},
    {value:"option3", label:"Option 3"},
  ]
  return (
    <Formik
      initialValues={{
        productname:"",
        productcode:"",
        quantity:"",
        limit:"",
        price:"",
        status:"",
        cat1:"",
        cat2:"",
        cat3:"",
        cat4:"",
        cat5:"",
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
                <div className="col-11 d-flex justify-content-end text-blue">
                  <a href="">View Report</a>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="bg-warning col-11 m-1 mt-3 rounded shadow-sm elevation-2">
                    <p className="text-white p-1 m-0">Edit Stock Details</p>
                  </div>
                </div>
                <div className="border col-11 mt-1 ml-5 "></div>

                <div className="d-flex">
                  <div className="col-6">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label 
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Product Name</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="CRM"
                        name="productname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productname}
                        />
                        {formik.touched.productname && formik.errors.productname && (
                          <span style={{ color: "red" }}>
                            {formik.errors.productname}
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
                          <strong>Product Code</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="productcode"
                        name="productcode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productcode}
                        />
                        {formik.touched.productcode && formik.errors.productcode && (
                          <span style={{ color: "red" }}>
                            {formik.errors.productcode}
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
                          <strong>Quantity</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="395"
                        name="quantity"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.quantity}
                        />
                        {formik.touched.quantity && formik.errors.quantity && (
                          <span style={{ color: "red" }}>
                            {formik.errors.quantity}
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
                          <strong>Limit</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="Limit"
                        name="limit"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.limit}
                        />
                        {formik.touched.limit && formik.errors.limit && (
                          <span style={{ color: "red" }}>
                            {formik.errors.limit}
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
                          <strong>Price</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="2000"
                        name="price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                        />
                        {formik.touched.price && formik.errors.price && (
                          <span style={{ color: "red" }}>
                            {formik.errors.price}
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
                          <strong>Status</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="status"
                          className="border w-100 pl-2"
                        >
                          <option value="Status">Status</option>
                          {options.map((option) => (
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
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label 
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Category 1</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="category1"
                        name="cat1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cat1}
                        />
                        {formik.touched.cat1 && formik.errors.cat1 && (
                          <span style={{ color: "red" }}>
                            {formik.errors.cat1}
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
                          <strong>Category 2</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="category2"
                        name="cat2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cat2}
                        />
                        {formik.touched.cat2 && formik.errors.cat2 && (
                          <span style={{ color: "red" }}>
                            {formik.errors.cat2}
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
                          <strong>Category 3</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="category3"
                        name="cat3"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cat3}
                        />
                        {formik.touched.cat3 && formik.errors.cat3 && (
                          <span style={{ color: "red" }}>
                            {formik.errors.cat3}
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
                          <strong>Category 4</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="category4"
                        name="cat4"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cat4}
                        />
                        {formik.touched.cat4 && formik.errors.cat4 && (
                          <span style={{ color: "red" }}>
                            {formik.errors.cat4}
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
                          <strong>Category 5</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <input 
                        type="text" 
                        className="w-100 border pl-2"
                        placeholder="category5"
                        name="cat5"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cat5}
                        />
                        {formik.touched.cat5 && formik.errors.cat5 && (
                          <span style={{ color: "red" }}>
                            {formik.errors.cat5}
                          </span>
                        )}
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
};

export default EditStockDetails;
