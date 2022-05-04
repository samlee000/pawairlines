import React, { Fragment } from 'react';
import NavBar from './NavBar.js'

import InputFlight from "./sqlComponents/InputFlight";
import ListFlight from "./sqlComponents/ListFlight";
import EditFlight from "./sqlComponents/EditFlight";

const Flight = () => {

  return (
    <div>
      <NavBar />

      <h1>Look at Flights</h1>
      <Fragment> 
        <div className="container">
          <InputFlight/>
          <ListFlight/>
        </div>
      </Fragment>
      
    </div>
  )
}

export default Flight