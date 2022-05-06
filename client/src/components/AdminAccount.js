import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from "./AdminNavBar";

const AdminAccount = () => {
  const myContext = useContext(AppContext);

  const [user_email_, setUser_email] = useState("");


  const [users, setUser] = useState([]);

  const getUser = async () => {
    try {
        // const response = await fetch(`http://localhost:4000/user`);
        // const jsonData = await response.json();

        // setUser(jsonData);
        // console.log(jsonData);
        // localStorage.setItem('id', users[7].first_name);
        // console.log(users[7]);
        // console.log('current email', localStorage.getItem('email'));
        // console.log('users.length', users.length);
        // console.log('jsonData.length', jsonData.length);
        setUser_email(localStorage.getItem('email'))
        // for (var i = 0; i < jsonData.length; i++) {
        //   console.log(jsonData[i].user_email);
        //   if (jsonData[i].user_email == (localStorage.getItem('email'))) {
        //     console.log('index', i);
        //     setFirst_name(jsonData[i].first_name);
        //     setLast_name(jsonData[i].last_name);
        //     setAge(jsonData[i].age);
        //     setGender(jsonData[i].gender);
        //     setUser_address(jsonData[i].user_address);
        //     setUser_email(jsonData[i].user_email);
        //     setPhone_number(jsonData[i].phone_number);
        //     // localStorage.setItem('current_user_id', jsonData[i].user_id);
        //     localStorage.setItem('current_fname', jsonData[i].first_name);
        //     localStorage.setItem('current_lname', jsonData[i].last_name);
        //     // console.log('current_user_id', localStorage.getItem('current_user_id'));
        //     console.log('users.length', users.length);
        //   }
        // } 

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
              <div className="form-group md-6">
                <label for="inputEmail4" className="h5">Email</label>
                <input type="email" value={user_email_} className="form-control" id="inputEmail4" readOnly/>
              {/* <div className="form-group col-md-6">
                <label for="inputPassword4" className="h5">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword4" placeholder="Password" required="true"/>
              </div> */}
            </div>

          </Form>
          </Card.Body>  
        </Card>
      </header>

    </div>
  )
}

export default AdminAccount