import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Seat.css";
import { MdOutlineChair, MdChair } from 'react-icons/md';
// import EditSeat from "./sqlComponents/EditSeat";


const Seat = ( ticket ) => {
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

    const False = MdChair
    //<MdOutlineChair  size={70}/>
    const [ outline1, setOutline1 ] = useState(true);
    const [ outline2, setOutline2 ] = useState(true);
    const [ outline3, setOutline3 ] = useState(true);
    const [ outline4, setOutline4 ] = useState(true);
    const [ outline5, setOutline5 ] = useState(true);
    const [ outline6, setOutline6 ] = useState(true);
    const [ outline7, setOutline7 ] = useState(true);
    const [ outline8, setOutline8 ] = useState(true);
    const [ outline9, setOutline9 ] = useState(true);
    const [ outline10, setOutline10 ] = useState(true);
    const [ outline11, setOutline11 ] = useState(true);
    const [ outline12, setOutline12 ] = useState(true);
    const [ outline13, setOutline13 ] = useState(true);
    const [ outline14, setOutline14 ] = useState(true);
    const [ outline15, setOutline15 ] = useState(true);
    const [ outline16, setOutline16 ] = useState(true);

    const handleChangeActive1 = () => { setOutline1((previousState) => { return !previousState }) };
    const handleChangeActive2 = () => { setOutline2((previousState) => { return !previousState }) };
    const handleChangeActive3 = () => { setOutline3((previousState) => { return !previousState }) };
    const handleChangeActive4 = () => { setOutline4((previousState) => { return !previousState }) };
    const handleChangeActive5 = () => { setOutline5((previousState) => { return !previousState }) };
    const handleChangeActive6 = () => { setOutline6((previousState) => { return !previousState }) };
    const handleChangeActive7 = () => { setOutline7((previousState) => { return !previousState }) };
    const handleChangeActive8 = () => { setOutline8((previousState) => { return !previousState }) };
    const handleChangeActive9 = () => { setOutline9((previousState) => { return !previousState }) };
    const handleChangeActive10 = () => { setOutline10((previousState) => { return !previousState }) };
    const handleChangeActive11 = () => { setOutline11((previousState) => { return !previousState }) };
    const handleChangeActive12 = () => { setOutline12((previousState) => { return !previousState }) };
    const handleChangeActive13 = () => { setOutline13((previousState) => { return !previousState }) };
    const handleChangeActive14 = () => { setOutline14((previousState) => { return !previousState }) };
    const handleChangeActive15 = () => { setOutline15((previousState) => { return !previousState }) };
    const handleChangeActive16 = () => { setOutline16((previousState) => { return !previousState }) };
    
    const [ seat_number, set_seat_number ] = useState(ticket.seat_number);

    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
      try {
          const response = await fetch("http://localhost:4000/seat");
          const jsonData = await response.json();

          setTickets(jsonData);
      } catch (err) {
          console.error(err.message);
      }
  };

  useEffect(() => {
      getTickets();
  }, []);

  console.log(tickets);

  const [ ticket_id, setticket_id ] = useState(null);

    const updateSeat = async e => {
        e.preventDefault();
        try {
          console.log({ticket_id})
            const body = { seat_number };
            const response = await fetch(`http://localhost:4000/seat/${ticket_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/seat";
            // console.log(body);
        } catch (err) {
            console.error(err.message);
        }
    }

    let optionTickets = tickets.map(ticket => (
      <option key={ticket.ticket_id} value={ticket.ticket_id}>{ticket.ticket_id}</option>
    ));

    const createBaggage = async e => {
        e.preventDefault();
        try {
            // console.log(ticket_id);
            const body = { ticket_id };
            const response = await fetch("http://localhost:4000/baggage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/baggage";
        } catch (err) {
            console.error(err.message);
        }
    };

  return (
    <div>
      <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
        <Container >
          <Navbar.Brand > Paw Airlines </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="book">Book A Flight</Nav.Link>
              <Nav.Link href="pet">Pet Selection</Nav.Link>
              <Nav.Link href="seat">Seat Selection</Nav.Link>
              <Nav.Link href="baggage">Baggage</Nav.Link>
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="App-header">

        <h1 className="mb-4">Select Your Seat</h1>

        <Card style={{ color: "#000" }}>
          
          <Card.Body>
            <Form>
              <h2>Select Flight: 
                <select className="form-select form-select-lg mb-3 mt-3" aria-label=".form-select-lg example" onChange={e => { const ticket_id = e.target.value; setticket_id(ticket_id);}}>
                  <option value="null"></option>
                  {optionTickets}
                </select>
              </h2>

            <div className="row1 flex flex-col flex-row items-center justify-center py-2">
              <h1 className="">A</h1>
              <button className="btn" type="button" onClick={() => set_seat_number("A1")}> {outline1 ? <MdOutlineChair size={70} onClick={() => handleChangeActive1() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive1() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
              <button className="btn" type="button" onClick={() => set_seat_number("A2")}> {outline2 ? <MdOutlineChair size={70} onClick={() => handleChangeActive2() & setOutline1(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive2() & setOutline1(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
              <button className="btn" type="button" onClick={() => set_seat_number("A3")}> {outline3 ? <MdOutlineChair size={70} onClick={() => handleChangeActive3() & setOutline2(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive3() & setOutline2(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
              <button className="btn" type="button" onClick={() => set_seat_number("A4")}> {outline4 ? <MdOutlineChair size={70} onClick={() => handleChangeActive4() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive4() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
            </div>
            <div className="row2 flex flex-col flex-row items-center justify-center py-2">
                <h1 className="">B</h1>
                <button className="btn" type="button" onClick={() => set_seat_number("B1")}> {outline5 ? <MdOutlineChair size={70} onClick={() => handleChangeActive5() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive5() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("B2")}> {outline6 ? <MdOutlineChair size={70} onClick={() => handleChangeActive6() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive6() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("B3")}> {outline7 ? <MdOutlineChair size={70} onClick={() => handleChangeActive7() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive7() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("B4")}> {outline8 ? <MdOutlineChair size={70} onClick={() => handleChangeActive8() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive8() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
            </div>
            <div className="row3 flex flex-col flex-row items-center justify-center py-2">
                <h1 className="">C</h1>
                <button className="btn" type="button" onClick={() => set_seat_number("C1")}> {outline9 ? <MdOutlineChair size={70} onClick={() => handleChangeActive9() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive9() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("C2")}> {outline10 ? <MdOutlineChair size={70} onClick={() => handleChangeActive10() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive10() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("C3")}> {outline11 ? <MdOutlineChair size={70} onClick={() => handleChangeActive11() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive11() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("C4")}> {outline12 ? <MdOutlineChair size={70} onClick={() => handleChangeActive12() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive12() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
            </div>
            <div className="row4 flex flex-col flex-row items-center justify-center py-2">
                <h1 className="">D</h1>
                <button className="btn" type="button" onClick={() => set_seat_number("D1")}> {outline13 ? <MdOutlineChair size={70} onClick={() => handleChangeActive13() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive13() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("D2")}> {outline14 ? <MdOutlineChair size={70} onClick={() => handleChangeActive14() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive14() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("D3")}> {outline15 ? <MdOutlineChair size={70} onClick={() => handleChangeActive15() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive15() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>) & setOutline16(<MdOutlineChair size={70}/>)}/> } </button>
                <button className="btn" type="button" onClick={() => set_seat_number("D4")}> {outline16 ? <MdOutlineChair size={70} onClick={() => handleChangeActive16() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>)}/> : <MdChair size={70} onClick={() => handleChangeActive16() & setOutline2(<MdOutlineChair size={70}/>) & setOutline3(<MdOutlineChair size={70}/>) & setOutline4(<MdOutlineChair size={70}/>) & setOutline5(<MdOutlineChair size={70}/>) & setOutline6(<MdOutlineChair size={70}/>) & setOutline7(<MdOutlineChair size={70}/>) & setOutline8(<MdOutlineChair size={70}/>) & setOutline9(<MdOutlineChair size={70}/>) & setOutline10(<MdOutlineChair size={70}/>) & setOutline11(<MdOutlineChair size={70}/>) & setOutline12(<MdOutlineChair size={70}/>) & setOutline13(<MdOutlineChair size={70}/>) & setOutline14(<MdOutlineChair size={70}/>) & setOutline15(<MdOutlineChair size={70}/>) & setOutline1(<MdOutlineChair size={70}/>)}/> } </button>
            </div>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
              <Button className="seatButton mt-3 btn-block  w-90" variant="primary" onClick={e => updateSeat(e)}> Select this seat </Button>
            </div>
            <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
              <Button className="seatButton mt-3 btn-block  w-90" variant="success" onClick={e => createBaggage(e)}> Add Baggage </Button>
            </div>

            </Form>
          </Card.Body>  
        </Card>
      </header>

    </div>
  )
}

export default Seat