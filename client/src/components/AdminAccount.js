/*
Created by: Nick Robert
Edited  by: 

Description:

This file's purpose is essentially the same as the Account.js except it's just for the admin accounts.
Since the admin accounts are manually put in, their information isn't available from the database, so the only readily available information to display is the email associated with the account.


*/

import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from "./AdminNavBar";

const AdminAccount = () => {
  const myContext = useContext(AppContext);

  const [user_email_, setUser_email] = useState("");


  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
        setUser_email(localStorage.getItem('email'))

    } catch (err) {
        console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <AdminNavBar />

      <header className="App-header">

        <h1 className="mb-4">My Account</h1>

        <Card style={{ color: "#000" }}>
          <Card.Body>
          <Form>
              <div className="form-group md-6">
                <label for="inputEmail4" className="h5">Email</label>
                <input type="email" value={user_email_} className="form-control" id="inputEmail4" readOnly/>
            </div>

          </Form>
          </Card.Body>  
        </Card>
      </header>

    </div>
  )
}

export default AdminAccount