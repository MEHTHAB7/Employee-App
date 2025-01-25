import React from 'react'
import EmployeeNavbar from './EmployeeNavbar'

const AddEmployee = () => {
    return (
        <div>
            <EmployeeNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className='row g-3'>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Employee Code</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Designation</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">Salary</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16">
                                <label htmlFor="" className="form-label">E-mail id</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-16"></div>
                            <button className="btn btn-danger">SUBMIT</button>


                        </div>

                    </div>
                </div>

            </div>  </div>
    )
}

export default AddEmployee