import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AdminNavBar from "./AdminNavBar";

import EditUser from "./sqlComponents/EditUser";
import Admin from "./Admin";

const AdminUsers = () => {

    const [user, setUser] = useState([]);

    const deleteUser = async (id) => {
        try {
            const deleteUser = await fetch(`http://localhost:4000/user/${id}`, {
                method: "DELETE"
            });

            setUser(user.filter(users => users.user_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getUser = async () => {
        try {
            const response = await fetch("http://localhost:4000/user");
            const jsonData = await response.json();

            setUser(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log(user);

  return (
    <div>
        <AdminNavBar />

      {/* <h1>Look at Users</h1> */}
      <Fragment> 
        <div className="container">
            <h1 className="mt-3">Manage All Users</h1>
            <Fragment>
                <table class="table mt-4">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {user.map(users => (
                            <tr key={users.user_id}>
                                <td>{users.first_name}</td>
                                <td>{users.last_name}</td>
                                <td>{users.age}</td>
                                <td>{users.gender}</td>
                                <td>{users.user_address}</td>
                                <td>{users.user_email}</td>
                                <td>{users.phone_number}</td>
                                <td>
                                    <EditUser users={users} />
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteUser(users.user_id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>

        </div>
      </Fragment>
    </div>
  )
}

export default AdminUsers