import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card, Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import "./Baggage.css";
import checkedbag from "./images/checkedbag.jpg";
import carryon from "./images/carryon.jpg";
import personal from "./images/personal.jpg";
import NavBar from "./NavBar";

const Baggage = ( baggage ) => {

    const [baggages, setBaggages] = useState([]);

    const getBaggages = async () => {
        try {
            const response = await fetch("http://localhost:4000/baggage");
            const jsonData = await response.json();
  
            setBaggages(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBaggages();
    }, []);
  
    console.log(baggages);

    const deleteBaggage = async e => {
        e.preventDefault();
        try {
            const deleteFLight = await fetch(`http://localhost:4000/baggage/${baggageID}`, {
                method: "DELETE"
            });

            setBaggages(baggages.filter(baggage => baggage.baggage_id !== {baggageID}));
            window.location = "/baggage";
        } catch (err) {
            console.error(err.message);
        }
    };


    const [ baggage_type, setBaggage_type ] = useState(baggage.baggage_type);
    const [ baggageID, setBaggageID ] = useState(null);

    const updateBaggage = async e => {
        e.preventDefault();
        try {
          console.log({baggageID})
            const body = { baggage_type };
            const response = await fetch(`http://localhost:4000/baggage/${baggageID}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/baggage";
            // console.log(body);
        } catch (err) {
            console.error(err.message);
        }
    }

    let optionBaggage = baggages.map(baggage => (
      <option key={baggage.baggage_id} value={baggage.baggage_id}>{baggage.baggage_id}</option>
    ));

    console.log(localStorage.getItem('current_user_id'));
    

  return (
    <div>
        <NavBar />

      <header className="App-header">

        <h1 className="mb-4">Select Your Baggage Type</h1>
            <Card style={{ color: "#000" }}>
                <Card.Body>
                    <div className="container">
                        <div className='row'>
                            <div className='numone col-4'>
                                <Card className='card1 h-100' onClick={() => setBaggage_type("Checked Bag")}>
                                    <Card.Body>
                                    <Card.Img src= {checkedbag} />
                                        <h5 className='cart-title'>Checked Bag</h5>
                                        <p className='card-text'>The largest size available on all flights.</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='numtwo col-4'>
                                <Card className='card2 h-100' onClick={() => setBaggage_type("Carry-On")}>
                                    <Card.Body>
                                    <Card.Img src= {carryon} />
                                        <h5 className='cart-title'>Carry-on Bag</h5>
                                        <p className='card-text'>The medium size available on all flights.</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='numthree col-4'>
                                <Card className='card3 h-100' onClick={() => setBaggage_type("Personal Item")}>
                                    <Card.Body>
                                    <Card.Img src= {personal} />
                                        <h5 className='cart-title'>Personal Item Bag</h5>
                                        <p className='card-text'>The smallest size available on all flights.</p>
                                    </Card.Body>
                                </Card>                         
                            </div>
                        </div>
                    </div>

                    <h2 className='mt-3'>Select Which Bag: 
                        <select className="form-select form-select-lg mb-3 mt-3" aria-label=".form-select-lg example" onChange={e => { const baggageID = e.target.value; setBaggageID(baggageID);}}>
                        <option value="null"></option>
                        {optionBaggage}
                        </select>
                    </h2>

                    <h2 className='mt-3'>Selected Bag Type: {baggage_type}</h2>
                    

                    <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                        <Button className="baggageButton mt-3 btn-block  w-90" variant="primary" onClick={e => updateBaggage(e)}> Select this bag </Button>
                    </div>
                    <div className="btn-group d-flex mt-3 mb-2" role="group" aria-label="...">
                        <Button className="seatButton mt-3 btn-block  w-90" variant="danger" onClick={e => deleteBaggage(e)}> I do not want baggage </Button>
                    </div>
                    {/* <a type='button' href='' onClick={e => deleteBaggage(e)}>I do not want baggage.</a> */}

                </Card.Body>  
            </Card>
      </header>

    </div>
  )
}

export default Baggage