import NavBar from './NavBar.js'
import React, { useState, useEffect, Fragment } from 'react';
import ListUserBill from './sqlComponents/ListUserBill.js';

export const UserBilling = () => {
  const [subtotal, setSubtotal] = useState([]);

  const getSubtotal = async () => {
    try {
      const response = await fetch("http://localhost:4000/admin_bill");
      const jsonData = await response.json();

      setSubtotal(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSubtotal();
  }, [])

  return (
    <div>
      <NavBar />


      {/* Write Code Here */}
      <h1>User Bills</h1>
      <Fragment>
        <div className="container">
          <ListUserBill />
        </div>
      </Fragment>
    </div>
  )
}


export default UserBilling