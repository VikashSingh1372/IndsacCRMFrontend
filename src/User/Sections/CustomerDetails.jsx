import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTextWidth } from "react-icons/fa";

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

  return (
    <div>
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
            <fieldset
              style={{ paddingLeft: "5px", width: "98%", marginBottom: "5rem" }}
            >
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
                          {formik.touched.direction &&
                            formik.errors.direction && (
                              <span className="text-danger">
                                {formik.errors.direction}
                              </span>
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
                            <span className="text-danger">
                              {formik.errors.status}
                            </span>
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
                          {formik.touched.priority &&
                            formik.errors.priority && (
                              <span className="text-danger">
                                {formik.errors.priority}
                              </span>
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
                            <span className="text-danger">
                              {formik.errors.product}
                            </span>
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
                            style={{ backgroundColor: "" }}
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
                          <button
                            className="btn btn-info btn-sm"
                            style={{ backgroundColor: "" }}
                          >
                            Edit
                          </button>
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
    </div>
  );
}

export default CustomerDetails;
