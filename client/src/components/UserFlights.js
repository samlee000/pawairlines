import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import ListFlight from "./sqlComponents/ListFlight";

const UserFlights = () => {
  return (
    <div>
      <NavBar />

      <Fragment> 
        <div className="container">
          <ListFlight/>
        </div>
      </Fragment>

    </div>
  )
}


export default UserFlights