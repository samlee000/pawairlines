import React, { Fragment, useEffect, useState, useContext } from "react";
import { UserAuth } from '../../context/AuthContext.js';

const ListAdminBill = () => {

    const [bill, setBill] = useState([]);
    const { email } = UserAuth();

    const getBill = async () => {
        try {
            console.log("ListUserBill");
            console.log(email);
            // var user_id = user.user_id;
            
            // console.log(user_id);
            // // need to get user_id by fetching it
            // const encodedValue = encodeURIComponent(user_id);
            // const user_id_response = await fetch(`http://localhost:4000/useridfromemail/${encodedValue}`, {
            //     method: "GET",
            //     headers: { "Content-Type": "application/json"},
            //     body: JSON.stringify(email)
            // });
            // const user_id_json = await response.json();
            // console.log("user_id_json");
            // console.log(user_id_json);
            // setUserID(jsonData.user_id)
            const user_id_encoded = encodeURIComponent(email);
            const response = await fetch(`http://localhost:4000/user_id/${user_id_encoded}`);
            const jsonData = await response.json();
            console.log("jsonData:");
            console.log(jsonData);
            setBill(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getBill();
    }, []);

    console.log(bill);
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

export default ListAdminBill;