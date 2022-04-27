import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Navbar, Container, Nav, NavDropdown, Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogIn.css';

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/book')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      alert('Incorrect username or password.')

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

        <h1 className="mb-4">Log In</h1>

        <Card style={{ color: "#000" }}>
          {/* <Card.Img src= {logo} /> */}
          <Card.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="h5">Email Address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} className="emailControl" type="email" placeholder="email@email.com" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="h5">Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
            <Button className="loginButton mt-3 btn-block  w-90" variant="primary" type="submit"> Login </Button>
          </div>
          </Form>
            <Card.Text>
              We fly your pets, not you.
            </Card.Text>
          </Card.Body>  
        </Card>
      </header>
    </div>

  )
}

export default LogIn