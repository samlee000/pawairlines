/*

Created by: Nick Robert
Edited  by: 

Description: 

This file fulfills the admin-functions related to the tickets table. 
It allows admins to insert, edit, and delete tickets.

*/

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
            <AdminNavBar />
            <h1 className="mb-4">Edit Tickets </h1>
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