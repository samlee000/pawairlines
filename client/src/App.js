import logo from './nyancat.gif';
import React, { Fragment } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button, Form, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//components
import InputFlight from "./components/InputFlight";
import ListFlight from "./components/ListFlight";


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#book">Book A Flight</Nav.Link>
              <Nav.Link href="#membership">Membership</Nav.Link>
              <Nav.Link href="#flight">Flight Status</Nav.Link>
              <NavDropdown title="Register/Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="App-header">

        <Card style={{ color: "#000" }}>
          <Card.Img src= {logo} />
          <Card.Body>
            <Card.Text>
              We fly your pets, not you.
            </Card.Text>
          </Card.Body>  
        </Card>

        <Fragment> 
          <div className="container">
            <InputFlight/>
            <ListFlight/>
          </div>
        </Fragment>

        {/* <button class="btn btn-outline-primary mt-4"> Register New User </button>

        <button class="btn btn-outline-primary mt-4"> Login </button> */}


        {/* <Form>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit"> Login </Button>
        </Form> */}
      </header>
    </div>
  );
}

export default App;
