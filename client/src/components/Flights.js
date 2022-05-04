import React, { Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import AdminInputFlight from "./sqlComponents/AdminInputFlight";
import AdminListFlights from "./sqlComponents/AdminListFlights";
import AdminEditFlight from "./sqlComponents/AdminEditFlight";

const Flights = () => {
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
    <div>
      <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="admin_account">Account</Nav.Link> */}
              <Nav.Link href="admin_flights">All Flights</Nav.Link>
              <Nav.Link href="admin_users">All Users</Nav.Link>
              {/* <Nav.Link href="admin_planes">All Planes</Nav.Link> */}
              <Nav.Link href="admin_bill">All Bills</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="register">Register</NavDropdown.Item>
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Fragment> 
        <div className="container">
          <AdminInputFlight/>
          <AdminListFlights/>
        </div>
      </Fragment>

    </div>
  )
}


export default Flights