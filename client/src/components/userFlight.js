import React, { Fragment } from 'react';
import NavBar from './NavBar.js'

import InputFlight from "./sqlComponents/InputFlight";
import UserListFlight from "./sqlComponents/ListUserFlight";
import EditFlight from "./sqlComponents/EditFlight";

const UserFlight = () => {

  return (
    <div>
      <NavBar />

      <h1>Look at Flights</h1>
      <Fragment> 
        <div className="container">
          <UserListFlight/>
        </div>
      </Fragment>
      
    </div>
  )
}

export default UserFlight