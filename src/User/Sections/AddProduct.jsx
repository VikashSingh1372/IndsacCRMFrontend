import React from "react";
import { useState } from "react";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import MainSidebar from "../Mainsidebar";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import axios from "axios";
import "../../Style/NewCustomer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkbox } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const AddProduct = () => {

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
      const options3 = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ];
  return (

    <>
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
      <br></br>
    <div>
        <Formik
              initialValues={{
                // "readstatus":"...",
                // "product":"...",
                // "owner":"..."

                name: "",
                description: "",
                retailprice: "",
                tax1: null,
                tax2: null,
                supplier:"",
                brand:"",
                tag:"",
                category:"",
                buyPrice: "",
                productCode: "",
                barCode: "",
                description: "",
                internalNotes: "",
              
              }}
              validationSchema={customerSchema}
              onSubmit={(values) => {
                try {
                  const token = localStorage.getItem("accessToken");
                  console.log(token)
                  
                  const response = axios.post(
                    "http://localhost:8080/customer",
                    values);
                  if (response!== null) {
                    // navigate("");
                    alert("form submitted successfully");
                  } else {
                    toast.error(response.data.body);
                  }
                } catch (errors){
                  console.log(errors);
                }

                console.log(values);
              }} >
          {(formik) => (
         <form action="" onSubmit={formik.handleSubmit}>
                  <fieldset style={{ marginBottom: "5rem" }}>
                    <div className="col-12 d-flex justify-content-center ">
                      <div className="bg-white col-11 cont">
                        <div style={{boxShadow:"0 1px 1px lightgray"}} className="d-flex justify-content-center">
                          <div   className=" col-12 mt-3  border   rounded shadow-sm elevation-2">
                            <p style={{fontSize:"20px",color:"gray"}} className=" text-start p-1 m-0 "><strong>Add Product</strong></p>
                          </div>
                        </div>
<br></br>
                        <div className=' mt-2 justify-content-center'>
        < div className='d-flex flex-wrap'> 
         <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex  mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong> Name</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8  forms">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.name}
                                />
                                {formik.touched.name &&
                                  formik.errors.name && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.name}
                                    </span>
                                  )}
                              </div>
                            </div>
                            </div>
                            
                            <div className='col-md-6'>
                          <div className="col-12 col-sm-12 d-flex  mb-1">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Description</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input style={{minWidth:"100%"}}
                                  type="text"
                                  placeholder="Enter Here"
                                  name="description"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.description}
                                />
                                {formik.touched.description &&
                                  formik.errors.description && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.description}
                                    </span>
                                  )}
                              </div>
                            </div>
            </div>
      
        <div className='d-flex flex-wrap'> 
        <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex mb-2 ">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Retail Price</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Enter here"
                                  name="retailprice"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.retailprice}
                                />
                                {formik.touched.retailprice &&
                                  formik.errors.retailprice && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.retailprice}
                                    </span>
                                  )}
                              </div>
                            </div>
                            </div>
        <div className='col-md-3'>
         <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-3 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Tax1</strong>
                                </label>
                              </div>
                             
                              <div className="col-12 col-sm-9 forms">
                                <input
                                  type="text"
                                  placeholder="tax"
                                  name="tax1"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.tax1}
                                />
                                {formik.touched.tax1 &&
                                  formik.errors.tax1 && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.tax1}
                                    </span>
                                  )}
                              </div>
                            </div>
        </div> <div className='col-md-3'>
         <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-3 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Tax2</strong>
                                </label>
                              </div>
                             
                              <div className="col-12 col-sm-9 forms">
                                <input
                                  type="text"
                                  placeholder="tax"
                                  name="tax2"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.tax2}
                                />
                                {formik.touched.tax2 &&
                                  formik.errors.tax2 && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.tax2}
                                    </span>
                                  )}
                              </div>
                            </div>
        </div>
        <div className='d-flex flex-wrap'> 
         <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex mb-2 ">
         <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong >Supplier</strong>
                                </label>
                              </div>
                              <div  className="col-12 col-sm-8  " >
                                <Field 
                                className="selectBox custom-select "
                                  as="select"
                                  name="supplier"
                                  id="status"
                                >
                                  <option  value="supplier" >Select Supplier</option>
                                  {options.map((option) => (
                                    <option 
                                    style={{color:"black"}}
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>        </div>
        <div className='col-md-6'>
        <div className="col-12 col-sm-12 d-flex  mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Buy Price</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Enter Price"
                                  name="buyPrice"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.buyPrice}
                                />
                                {formik.touched.buyPrice &&
                                  formik.errors.buyPrice && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.buyPrice}
                                    </span>
                                  )}
                              </div>
                            </div>

        </div>
        
        <div className='d-flex flex-wrap'> 
         <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex  mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Product Code</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 justify-content-end forms">
                                <input
                                  type="text"
                                  placeholder="Enter Here"
                                  name="productCode"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.productCode}
                                />
                                {formik.touched.productCode &&
                                  formik.errors.productCode && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.productCode}
                                    </span>
                                  )}
                              </div>
                            </div>
        </div>
        <div className='col-md-6'>
        <div className="col-12 col-sm-12 d-flex  mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Bar Code</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Enter Here"
                                  name="barCode"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.barCode}
                                />
                                {formik.touched.barCode &&
                                  formik.errors.barCode && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.barCode}
                                    </span>
                                  )}
                              </div>
                            </div>

            </div>
            <div className='d-flex flex-wrap'> 
         <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex  mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Brand</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8">
                                <Field
                                  as="select"
                                  name="brand"
                                  id="status"
                                  className="selectBox custom-select "

                                >
                                  <option value="brand">  Select Brand</option>
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
                            </div>        </div>
                            <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex  mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Category</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8">
                                <Field
                                 className="selectBox custom-select "

                                  as="select"
                                  name="category"
                                  id="status"

                                >
                                  <option value="category">Select Category</option>
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
                            </div>        </div>


       
         <div className='col-md-6'>
         <div className="col-12 col-sm-12 d-flex  ">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Tags</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8">
                                <Field
                                  className="selectBox custom-select "

                                  as="select"
                                  name="tag"
                                  id="status"

                                >
                                  <option value="tag">Select Tag</option>
                                  {options3.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>        </div>

                            <div className='col-md-6'>
                          <div className="col-12 col-sm-12 d-flex  ">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Internal Notes</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8  forms">
                                <input style={{minWidth:"100%"}}
                                  type="text"
                                  placeholder="Enter Here"
                                  name="internalNotes"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.internalNotes}
                                />
                                {formik.touched.internalNotes &&
                                  formik.errors.internalNotes && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.internalNotes}
                                    </span>
                                  )}
                              </div>
                            </div>
            </div>
            <div className='col-md-6'>
                          <div className="col-12 col-sm-12 d-flex   ">
                              <div className="col-12 col-sm-1 justify-content-end text-right-lg">
                              <Checkbox
          
          />
                              </div>
                              <div className="col-12 col-sm-8 mt-2">
                          <strong> Temporarily Deactive</strong>   

                              </div>
                            </div>
            </div>
            
            
            <div className="col-12 col-sm-12 d-flex justify-content-center  p-2 mb-2">
                                <button type="submit"
                                  className="btn  border rounded border-gray btn-info "
                                  style={{ backgroundColor: "rgba(52, 58, 64, 255)" }}
                                >
                                  Save
                                </button>
                              </div></div>
      

        </div>

                          </div></div>
                        </div>
                      </div>
                    </div>
                    </div>

                  </fieldset>
                </form> )}
                </Formik>
    </div>
    <UserFooter/>
    </div>
    </div></>
  )
}

export default AddProduct