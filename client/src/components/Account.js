import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Account = () => {
  const myContext = useContext(AppContext);

  const { logout } = UserAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
      try {
      await logout();
      navigate('/');
      console.log('You are logged out')
      } catch (e) {
      console.log(e.message);
      }
  };

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
        localStorage.setItem('id', users[7].first_name);
        console.log(users[7]);
        for (var i = 0; i < users.length; i++) {
          if (users[i].user_email == (localStorage.getItem('email'))) {
            console.log('index', i);
            setFirst_name(users[i].first_name);
            setLast_name(users[i].last_name);
            setAge(users[i].age);
            setGender(users[i].gender);
            setUser_address(users[i].user_address);
            setUser_email(users[i].user_email);
            setPhone_number(users[i].phone_number);
            localStorage.setItem('current_user_id', users[i].user_id);
            localStorage.setItem('current_fname', users[i].first_name);
            localStorage.setItem('current_lname', users[i].last_name);
          }
        } 

    } catch (err) {
        console.error(err.message);
    }
  };
  // console.log("users", users);

  useEffect(() => {
    getUser();
  }, []);

  console.log("users", users);

  return (
    <div>
      <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="account">My Account</Nav.Link>
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="pet">Pet Selection</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <Nav.Link href="mybookings">My Bookings</Nav.Link>
              <Nav.Link href="user_bill">User Billing</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


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
                <input type="text" onChange ={getUser()} value={fname} className="form-control" id="inputFName" readOnly/>
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

export default Account