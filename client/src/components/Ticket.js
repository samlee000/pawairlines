import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form, Card } from 'react-bootstrap';
import AdminNavBar from "./AdminNavBar";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTicket from "./sqlComponents/InputTicket";
import ListTicket from "./sqlComponents/ListTicket";


const Ticket = () => {
    return (
        <div>
            <NavBar />
            {/* Code for inputting a new ticket */}
            <h1 className="mb-4">Edit Tickets Here </h1>
            <Fragment>
                <div className="container">
                    <InputTicket/>
                    <ListTicket/>
                </div>
            </Fragment>
        </div>
    )
};

export default Ticket;