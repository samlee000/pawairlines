import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AdminNavBar from './AdminNavBar';

const AdminAccount = () => {

  return (
    <div>
        <AdminNavBar />
        <h1> Admin Account</h1>
    </div>
  )
}

export default AdminAccount