import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

export const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/book')
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
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="membership">Membership</Nav.Link>
              <Nav.Link href="flight">Flight Status</Nav.Link>
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
                <input type="text" className="form-control" id="inputFName" placeholder="First Name"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputLName" className="h5">Last Name</label>
                <input type="text" className="form-control" id="inputLName" placeholder="Last Name"/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress" className="h5">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
              <label for="phonenumber" className="h5">Phone Number</label>
              <input type="text" className="form-control" id="phonenumber" placeholder="000-000-0000"/>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail4" className="h5">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4" className="h5">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="gender" className="h5">Gender</label>
                <select id="gender" className="form-control">
                  <option selected className="h5">Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputAge" className="h5">Age</label>
                <input type="text" className="form-control" id="inputAge"/>
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