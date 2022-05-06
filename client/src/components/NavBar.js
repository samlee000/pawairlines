import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
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
              <Nav.Link href="user_flights">Available Flights</Nav.Link>
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="pet">Pet Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <Nav.Link href="user_ticket">User Tickets</Nav.Link>
              <Nav.Link href="mybookings">User Bookings</Nav.Link>
              <Nav.Link href="user_bill">User Billing</Nav.Link>
              {/* <Nav.Link href="admin_flights">Enter Flights</Nav.Link> */}
              {/* <Nav.Link href="admin_bill">Edit Bills</Nav.Link> */}
              {/* <Nav.Link href="admin_ticket">Edit Tickets</Nav.Link> */}

              {/* <Nav.Link href="account">My Account</Nav.Link>
              <Nav.Link href="pet">Pet Selection</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <Nav.Link href="mybookings">My Bookings</Nav.Link>
              <Nav.Link href="user_bill">User Billing</Nav.Link> */}
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
    )
};

export default NavBar