import React, { Fragment, useEffect, useState, useContext } from "react";
import { UserAuth } from "../../context/AuthContext.js";

const ListUserBaggage = () => {
    const [baggage, setBaggage] = useState([]);


    const getBaggage = async () => {
        try {

            const user_id_encoded = localStorage.getItem('current_user_id');
            const response = await fetch(`http://localhost:4000/baggage/${user_id_encoded}`);
            const jsonData = await response.json();
            setBill(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBaggage();
    }, []);

    console.log(baggage);
    console.log(localStorage.getItem('current_user_id'));

    return <Fragment>
        <table className="table">
            <thead>
            <tr>
                <th>User ID</th>
                <th>Routing Number</th>
                <th>Subtotal</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
                {bill.map(bills => (
                    <tr key={bills.bill_id}>
                        <td>{bills.user_id}</td>
                        <td>{bills.routing_no}</td>
                        <td>{bills.subtotal}</td>
                        <td>{bills.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListUserBaggage;