import React, { Fragment, useEffect, useState, useContext } from "react";
import { UserAuth } from "../../context/AuthContext.js";

const ListUserBooking = () => {
    const [book, setBook] = useState([]);


    const deleteBook = async (id, id2) => {
        try {
            const deleteBook = await fetch(`http://localhost:4000/book/${id}/${id2}`, {
                method: "DELETE"
            });

            setBook(book.filter(books => books.bookingid !== id));
        } catch (err) {
            console.error(err.message);
        }
    };


    const getBook = async () => {
        try {

            const user_id_encoded = localStorage.getItem('current_user_id');
            const response = await fetch(`http://localhost:4000/book/${user_id_encoded}`);
            const jsonData = await response.json();
            console.log("jsonData:");
            console.log(jsonData);
            setBook(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBook();
    }, []);
    console.log(localStorage.getItem('current_user_id'));
    console.log(book);

    return <Fragment>
        <table className="table">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Seat Type</th>
                <th>Flight ID</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {book.map(books => (
                    <tr key={books.bookingid}>
                        <td>{books.fname}</td>
                        <td>{books.lname}</td>
                        <td>{books.seat_type}</td>
                        <td>{books.flight_id}</td>
                        <td>{books.price}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteBook(books.bookingid, books.flight_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListUserBooking;