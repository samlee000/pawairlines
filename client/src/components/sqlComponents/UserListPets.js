import React, { Fragment, useEffect, useState, Button } from "react";

import UserEditPet from "./UserEditPet";

const UserListPets = () => {

    const [pet, setPet] = useState([]);

    const deletePet = async (id) => {
        try {
            const deletePet = await fetch(`http://localhost:4000/pet/${id}`, {
                method: "DELETE"
            });

            setPet(pet.filter(pets => pets.pet_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const updateTicketFalse = async (id) => {
        try {
            const updateTicketFalse = await fetch(`http://localhost:4000/ticket/${id}`, {
                method: "PUT"
            });

        } catch (err) {
            console.error(err.message);
        }
    };

    const getPet = async () => {
        try {
            const response = await fetch("http://localhost:4000/pet");
            const jsonData = await response.json();

            setPet(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getPet();
    }, []);

    console.log(pet);
    return <Fragment>
        <table class="table">
            <thead>
            <tr>
                <th>Ticket</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {pet.map(pets => (
                    <tr key={pets.pet_id}>
                        <td>{pets.ticket_id}</td>
                        <td>{pets.species}</td>
                        <td>{pets.breed}</td>
                        <td>
                            <UserEditPet pets={pets} />
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => {deletePet(pets.pet_id); updateTicketFalse(pets.ticket_id);}}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default UserListPets;