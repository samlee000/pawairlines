import React, { Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AdminNavBar from "./AdminNavBar";
import NavBar from "./NavBar";
import AdminInputFlight from "./sqlComponents/AdminInputFlight";
import AdminListFlights from "./sqlComponents/AdminListFlights";
import AdminEditFlight from "./sqlComponents/AdminEditFlight";

const Flights = () => {
  return (
    <div>
      <AdminNavBar />

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