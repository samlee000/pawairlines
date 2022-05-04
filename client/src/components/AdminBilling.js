import React, { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
// import NavBar from './NavBar.js'
import InputBill from './sqlComponents/InputBillAdmin.js'
import EditBill from './sqlComponents/EditBill.js'
import ListAdminBill from './sqlComponents/ListAdminBill.js'


export const AdminBilling = () => {
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

  const [subtotal, setSubtotal] = useState([]);

  const getSubtotal = async () => {
    try {
      const response = await fetch("http://localhost:4000/admin_bill");
      const jsonData = await response.json();

      setSubtotal(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSubtotal();
  }, [])

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


      {/* Write Code Here */}
      <h1>Bill Something</h1>
      <Fragment>
        <div className="container">
          <InputBill />
          <ListAdminBill />
        </div>
      </Fragment>
    </div>
  )
}


export default AdminBilling