import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

export const Register = () => {
  // const toAccount = () => {

  // }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [user_address, setUser_address] = useState("");
  const [user_email, setUser_email] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const body = { first_name, last_name, age, gender, user_address, user_email, phone_number };
      const response = await fetch("http://localhost:4000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
      });

      await createUser(email, password);
      navigate('/account', {state:{current_user_email:{user_email}}})
      // window.location = "/account";
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>

      <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand href="/"> Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="membership">Membership</Nav.Link>
              <Nav.Link href="flight">Flight Status</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link> */}
              <Nav.Link href="admin">Admin</Nav.Link>
              <NavDropdown title="Register/Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="register">Register</NavDropdown.Item>
                <NavDropdown.Item href="login">Login</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="login">Log Out</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <header className="App-header">

        <h1 className="mb-4">Register</h1>

        <Card style={{ color: "#000" }}>
          {/* <Card.Img src= {logo} /> */}
          <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputFName" className="h5">First Name</label>
                <input onChange={(e) => setFirst_name(e.target.value)} type="text" className="form-control" id="inputFName" placeholder="First Name" required="true"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputLName" className="h5">Last Name</label>
                <input onChange={(e) => setLast_name(e.target.value)} type="text" className="form-control" id="inputLName" placeholder="Last Name" required="true"/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress" className="h5">Address</label>
              <input onChange={(e) => setUser_address(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required="true"/>
            </div>
            <div className="form-group">
              <label for="phonenumber" className="h5">Phone Number</label>
              <input onChange={(e) => setPhone_number(e.target.value)} type="text" className="form-control" id="phonenumber" placeholder="000-000-0000" required="true"/>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail4" className="h5">Email</label>
                <input onChange={(e) => setEmail(e.target.value) & setUser_email(e.target.value)} type="email" className="form-control" id="inputEmail4" placeholder="Email" required="true"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4" className="h5">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword4" placeholder="Password" required="true"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="gender" className="h5">Gender</label>
                <select id="gender" className="form-control" onChange={(e) => setGender(e.target.value)} required="true">
                  <option selected className="h5">Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputAge" className="h5">Age</label>
                <input onChange={(e) => setAge(e.target.value)} type="text" className="form-control" id="inputAge" required="true"/>
              </div>
            </div>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
              <Button className="loginButton mt-3 btn-block  w-90" variant="success" type="submit"> Register </Button>
            </div>
          </form>
            <Card.Text>
              We fly your pets, not you.
            </Card.Text>
          </Card.Body>  
        </Card>
      </header>
    </div>
  )
}

export default Register