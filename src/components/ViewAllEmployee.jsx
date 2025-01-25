import React, { useState } from 'react'
import EmployeeNavbar from './EmployeeNavbar'

const ViewAllEmployee = () => {

    const [employees, changeEmployees] = useState(

        [
            { "Name": "Mehthab", "Employeecode": "1001", "Designation": "CIO", "Salary": "$247,000" },
            { "Name": "Shafrin", "Employeecode": "1002", "Designation": "COO", "Salary": "$109,864" },
            { "Name": "Meharin", "Employeecode": "1003", "Designation": "CFO", "Salary": "$120,355" },
            { "Name": "Amrin", "Employeecode": "1004", "Designation": "CCO", "Salary": "$75,062" },
            { "Name": "Farooq", "Employeecode": "1005", "Designation": "CMO", "Salary": "$84,821" },
            { "Name": "Mubhashir", "Employeecode": "1006", "Designation": "CLO", "Salary": "$121,400" },
            { "Name": "Yaseen", "Employeecode": "1007", "Designation": "MCO", "Salary": "$96,756" },
            { "Name": "Ismail", "Employeecode": "1008", "Designation": "CSO", "Salary": "$129,642" },
            { "Name": "Asna", "Employeecode": "1009", "Designation": "CEO", "Salary": "$73,878" },
            { "Name": "Shameema", "Employeecode": "1010", "Designation": "CTO", "Salary": "$85,000" }
        ]
    );


    return (
        <div>
            <EmployeeNavbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">

                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Employeecode</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Salary</th>

                                </tr>
                            </thead>
                            <tbody>

                                {employees.map(
                                    (value, index) => {
                                        return (<tr key={index}>
                                            <th scope="row">{value.Name}</th>
                                            <td>{value.Employeecode}</td>
                                            <td>{value.Designation}</td>
                                            <td>{value.Salary}</td>
                                        </tr>
                                        );
                                    }
                                )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>s
        </div>
    );
}

export default ViewAllEmployee