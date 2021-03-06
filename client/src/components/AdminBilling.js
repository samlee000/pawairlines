/*
Created by: Nick Robert
Edited  by: 

Description:

The following file and the files it imports from sqlComponents handle the admin-side functionality related to billing. 
It allows admins to insert, edit, and delete all open bills.

Fulfills the admin-side of the finance and refunds feature set.

*/
import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './NavBar.js'
import InputBill from './sqlComponents/InputBillAdmin.js'
import ListAdminBill from './sqlComponents/ListAdminBill.js'
import AdminNavBar from "./AdminNavBar";

export const AdminBilling = () => {

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
      <AdminNavBar />


      {/* Write Code Here */}
      {/* <h1>Bill Something</h1> */}
      <Fragment>
        <div className="container">
          <InputBill />
          <ListAdminBill />
        </div>
      </Fragment>
    </div>
  )
}


export default AdminBilling