import React, { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import ListUserBooking from './sqlComponents/ListUserBooking';

export const MyBooking = () => {
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
              <Nav.Link href="account">My Account</Nav.Link>
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="pet">Pet Selection</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <Nav.Link href="mybookings">My Bookings</Nav.Link>
              <Nav.Link href="user_bill">User Billing</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Write Code Here */}
      <Fragment>
        <div className="container">
            <h1>My Bookings</h1>
          <ListUserBooking />
        </div>
      </Fragment>
    </div>
  )
}


export default MyBooking