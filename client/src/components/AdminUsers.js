import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import EditUser from "./sqlComponents/EditUser";

const AdminUsers = () => {

    const { logoutAdmin } = UserAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
        await logoutAdmin();
        navigate('/admin');
        console.log('You are logged out')
        } catch (e) {
        console.log(e.message);
        }
    };


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
        <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="admin_account">Account</Nav.Link>
              <Nav.Link href="admin_flights">All Flights</Nav.Link>
              <Nav.Link href="admin_users">All Users</Nav.Link>
              <Nav.Link href="admin_planes">All Planes</Nav.Link>
              <Nav.Link href="admin_bills">All Bills</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <h1>Look at Users</h1> */}
      <Fragment> 
        <div className="container">
            <Fragment>
                <table class="table">
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