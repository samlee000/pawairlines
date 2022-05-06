import React, { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import ListUserBooking from './sqlComponents/ListUserBooking';
import NavBar from "./NavBar";

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
      <NavBar />


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