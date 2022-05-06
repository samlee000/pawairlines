import React, { Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import NavBar from "./NavBar";

import UserInputPet from "./sqlComponents/UserInputPet";
import UserListPets from "./sqlComponents/UserListPets";
import UserEditPet from "./sqlComponents/UserEditPet";

const Pet = () => {
  return (
    <div>
      <NavBar />



      <Fragment> 
        <div className="container" color='#222c3c'>
          <UserInputPet/>
          <UserListPets/>
        </div>
      </Fragment>

    </div>
  )
}


export default Pet