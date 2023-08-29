import React from 'react'

const NewCustomerInformation = () => {
  return (
    <div className="card">
    <div className="card-body">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-4 order-2 order-md-1">
                <h3 className="text-primary">AdminLTE v3</h3>
                <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
                <br />
                <div className="text-muted">
                    <p className="text-sm">Client Company
                        <b className="d-block">Devient Inc</b>
                    </p>
                    <p className="text-sm">Client Company
                        <b className="d-block">Devient Inc</b>
                    </p>
                </div>
                <h5 className="mt-5 text-muted">Project Files</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="" className="btn-link text-secondary"> Functional-requirements.docx</a>
                    </li>
                    <li>
                        <a href="" className="btn-link text-secondary"> UAT.pdf</a>
                    </li>
                    <li>
                        <a href="" className="btn-link text-secondary"> Email-from-flatbal.mln</a>
                    </li>
                    <li>
                        <a href="" className="btn-link text-secondary"> Logo.png</a>
                    </li>
                    <li>
                        <a href="" className="btn-link text-secondary"> Contract-10_12_2014.docx</a>
                    </li>
                </ul>
                <div className="text-center mt-5 mb-3">
                    <button className="btn btn-sm btn-primary m-2">Add Files</button>
                    <button className="btn btn-sm btn-warning">Report Contact</button>
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                            <div className="info-box-content">
                                <span className="info-box-text text-center text-muted">Estimated Budget</span>
                                <span className="info-box-text text-center text-muted mb-0"><b>2300</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                            <div className="info-box-content">
                                <span className="info-box-text text-center text-muted">Total Amount Spent</span>
                                <span className="info-box-text text-center text-muted mb-0"><b>2000</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                            <div className="info-box-content">
                                <span className="info-box-text text-center text-muted">Estimated Project Duration</span>
                                <span className="info-box-text text-center text-muted mb-0"><b>20</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewCustomerInformation