/*

Programmed by: Nick Robert

Description:

This file lists all the tickets currently owned by a user account.
It fulfills the user-side for the ticket pricing feature set and the ticket table.

*/

import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Form, Card } from 'react-bootstrap';
import AdminNavBar from "./AdminNavBar";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTicket from "./sqlComponents/InputTicket";
import ListUserTicket from "./sqlComponents/ListUserTicket";


const UserTicket = () => {
    return (
        <div>
            <NavBar />
            <Fragment>
                <div className="container">
                    <ListUserTicket/>
                </div>
            </Fragment>
        </div>
    )
};

export default UserTicket;