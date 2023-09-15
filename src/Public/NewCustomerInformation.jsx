import React from "react";
import DataTable from "./Sections/DataTable";
const NewCustomerInformation = () => {
  return (
    <div className="col-12 justify-content-center">
      <div className="row justify-content-center" style={{ marginTop: "3.3rem" }}>
        <div className="col-12 bg-white mt-3">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3 className="text-primary">AdminLTE v3</h3>
                <p className="text-muted">
                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
                </p>
                <br />
              </div>
              <div className="text-muted">
                <p className="text-sm">
                  Client Company
                  <b className="d-block">Devient Inc</b>
                </p>
                <p className="text-sm">
                  Client Company
                  <b className="d-block">Devient Inc</b>
                </p>
              </div>
              <div>
                <h5 className="mt-5 text-muted">Project Files</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="btn-link text-secondary">
                      Functional-requirements.docx
                    </a>
                  </li>
                  <li>
                    <a href="/" className="btn-link text-secondary">
                      UAT.pdf
                    </a>
                  </li>
                  <li>
                    <a href="/" className="btn-link text-secondary">
                      Email-from-flatbal.mln
                    </a>
                  </li>
                  <li>
                    <a href="/" className="btn-link text-secondary">
                      Logo.png
                    </a>
                  </li>
                  <li>
                    <a href="/" className="btn-link text-secondary">
                      Contract-10_12_2014.docx
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button className="btn btn-md btn-primary m-2">Add Files</button>
                <button className="btn btn-md btn-warning">Report Contact</button>
              </div>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">
                        Estimated Budget
                      </span>
                      <span className="info-box-text text-center text-muted mb-0">
                        <b>2300</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">
                        Total Amount Spent
                      </span>
                      <span className="info-box-text text-center text-muted mb-0">
                        <b>2000</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-box bg-light">
                    <div className="info-box-content">
                      <span className="info-box-text text-center text-muted">
                        Estimated Project Duration
                      </span>
                      <span className="info-box-text text-center text-muted mb-0">
                        <b>20</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerInformation;





