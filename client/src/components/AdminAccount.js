import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from "./AdminNavBar";

const AdminAccount = () => {
  const myContext = useContext(AppContext);

  const [fname, setFirst_name] = useState("");
  const [lname, setLast_name] = useState("");
  const [age_, setAge] = useState("");
  const [gender_, setGender] = useState("");
  const [user_address_, setUser_address] = useState("");
  const [user_email_, setUser_email] = useState("");
  const [phone_number_, setPhone_number] = useState("");


  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
        const response = await fetch(`http://localhost:4000/user`);
        const jsonData = await response.json();

        setUser(jsonData);
        console.log(jsonData);
        // localStorage.setItem('id', users[7].first_name);
        // console.log(users[7]);
        console.log('current email', localStorage.getItem('email'));
        console.log('users.length', users.length);
        console.log('jsonData.length', jsonData.length);
        for (var i = 0; i < jsonData.length; i++) {
          console.log(jsonData[i].user_email);
          if (jsonData[i].user_email == (localStorage.getItem('email'))) {
            console.log('index', i);
            setFirst_name(jsonData[i].first_name);
            setLast_name(jsonData[i].last_name);
            setAge(jsonData[i].age);
            setGender(jsonData[i].gender);
            setUser_address(jsonData[i].user_address);
            setUser_email(jsonData[i].user_email);
            setPhone_number(jsonData[i].phone_number);
            localStorage.setItem('current_user_id', jsonData[i].user_id);
            localStorage.setItem('current_fname', jsonData[i].first_name);
            localStorage.setItem('current_lname', jsonData[i].last_name);
            // console.log('current_user_id', localStorage.getItem('current_user_id'));
            console.log('users.length', users.length);
          }
        } 

    } catch (err) {
        console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <AdminNavBar />

      <header className="App-header">

        <h1 className="mb-4">My Account</h1>

        <Card style={{ color: "#000" }}>
          {/* <Card.Imgs src= {logo} /> */}
          <Card.Body>
          <Form>
            {/* <h1>{localStorage.getItem('email')}</h1> */}
            {/* <select className="form-select form-select-lg mb-3 mt-3" aria-label=".form-select-lg example" required="true">
                  <option value="null"></option>
                  {optionUsers}
                </select> */}
            {/* <p>{user}</p> */}
          <div className="row">
              <div className="form-group col-md-6">
                <label for="inputFName" className="h5">First Name</label>
                <input type="text" value={fname} className="form-control" id="inputFName" readOnly/>
                {/* <input type="text" onChange ={getUser()} value={fname} className="form-control" id="inputFName" readOnly/> */}
              </div>
              <div className="form-group col-md-6">
                <label for="inputLName" className="h5">Last Name</label>
                <input type="text" value={lname} className="form-control" id="inputLName" readOnly/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress" className="h5">Address</label>
              <input type="text" value={user_address_} className="form-control" id="inputAddress" readOnly/>
            </div>
            <div className="form-group">
              <label for="phonenumber" className="h5">Phone Number</label>
              <input type="text" value={phone_number_} className="form-control" id="phonenumber" readOnly/>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail4" className="h5">Email</label>
                <input type="email" value={user_email_} className="form-control" id="inputEmail4" readOnly/>
              </div>
              {/* <div className="form-group col-md-6">
                <label for="inputPassword4" className="h5">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword4" placeholder="Password" required="true"/>
              </div> */}
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="gender" className="h5">Gender</label>
                  <input type="text" value={gender_} className="form-control" id="inputGender" readOnly/>
                {/* <select id="gender" className="form-control" onChange={(e) => setGender(e.target.value)} required="true">
                  <option selected className="h5">Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select> */}
              </div>
              <div className="form-group col-md-2">
                <label for="inputAge" className="h5">Age</label>
                <input type="text" value={age_} className="form-control" id="inputAge" readOnly/>
              </div>
            </div>
          </Form>
          </Card.Body>  
        </Card>
      </header>

    </div>
  )
}

export default AdminAccount