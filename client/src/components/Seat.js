import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Seat.css";
import { MdOutlineChair, MdChair } from 'react-icons/md';


const Seat = () => {

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
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="membership">Membership</Nav.Link>
              <Nav.Link href="flight">Flight Status</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



        <div className="row1 flex flex-col flex-row items-center justify-center min-h-screen py-2">
            <MdOutlineChair size={70} onClick={()=>{alert('clicked')}}/>
            <MdOutlineChair size={70}/>
            <MdOutlineChair size={70}/>
        </div>
        {/* <div className="row2 flex flex-col flex-row items-center justify-center min-h-screen py-2">
            <MdOutlineChair size={70}/>
            <MdOutlineChair size={70}/>
            <MdOutlineChair size={70}/>
        </div> */}


    </div>
  )
}

export default Seat