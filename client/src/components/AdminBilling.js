import NavBar from './NavBar.js'
import React, { useState, useEffect, Fragment } from 'react';

import InputBill from './sqlComponents/InputBill.js';
import ListAdminBill from './sqlComponents/ListAdminBill.js';

export const AdminBilling = () => {

  const [subtotal, setSubtotal] = useState([]);

  const getSubtotal = async () => {
    try {
      const response = await fetch("http://localhost:4000/adminbilling");
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
      <h1>Bill Something</h1>
      <Fragment>
        <div className="container">
          <InputBill/>
          <ListAdminBill/>
        </div>
      </Fragment>
    </div>
  )
}


export default AdminBilling