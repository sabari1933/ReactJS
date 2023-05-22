import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

export function UserList() {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/auth/getAll')
            .then((res) => {
                console.log(res);
                setDetails(res.data.jData);
            })
    }, [])

    // const handelupdate = async (event) => {
    //     event.preventDefault();
    //     await axios.post("http://192.168.1.15:8080/signup/deleteUser")
    // }

    return (
        <>
            <div className="container-fluid userlist-bg">
                <div className="col-lg-10 userlist-box">
                    <div className="title">User List</div><hr className="userlist-hr" />
                    <table className="w-100 table-border">
                        <thead>
                            <th>S No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Phone no</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>isActive</th>
                            <th>Updated Date</th>
                            <th>Created Date</th>
                            {/* <th>Edit User</th> */}
                            {/* <th>Delete User</th> */}
                        </thead>
                        <tbody>
                            {
                                details.map((value, index) => (
                                    <>
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.firstName}</td>
                                            <td>{value.lastName}</td>
                                            <td>{value.emailId}</td>
                                            <td>{value.phoneNumber}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.isActive}</td>
                                            <td>{value.updatedDate}</td>
                                            <td>{value.createdDate}</td>
                                           
                                            {/* <td><button type="button" class="btn btn-primary">Edit</button></td> */}
                                            {/* <td><button type="button" class="btn btn-danger">Delete</button></td> */}
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}