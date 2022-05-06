// import NavBar from './NavBar.js'
import React, { useState, useEffect, Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import ListUserBill from './sqlComponents/ListUserBill.js';
import NavBar from "./NavBar";


export const UserBilling = () => {

  return (
    <div>
      <NavBar />


      {/* Write Code Here */}
      <Fragment>
        <div className="container">
            <h1>My Bills</h1>
          <ListUserBill />
        </div>
      </Fragment>
    </div>
  )
}


export default UserBilling