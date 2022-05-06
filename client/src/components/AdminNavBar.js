/*
Created by: Sam Lee
Edited  by: Nick Robert

Description:

The content in this file was first made by Sam. Originally, the code was copy/pasted through all the files that needed it, 
but Nick created this file that every other file that needs this NavBar version could import so that any changes that needed
to be made only had to be made in one place instead of several.

*/

import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const AdminNavBar = () => {
    const { logout } = UserAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
        await logout();
        navigate('/');
        console.log('You are logged out')
        } catch (e) {
        console.log(e.message);
        }
    };
    
    return (
        <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="admin_account">Account</Nav.Link>
              <Nav.Link href="admin_flights">Edit Flights</Nav.Link>
              <Nav.Link href="admin_ticket">Edit Tickets</Nav.Link>
              <Nav.Link href="admin_users">Edit Users</Nav.Link>
              {/* <Nav.Link href="admin_planes">All Planes</Nav.Link> */}
              <Nav.Link href="admin_bill">Edit Bills</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default AdminNavBar