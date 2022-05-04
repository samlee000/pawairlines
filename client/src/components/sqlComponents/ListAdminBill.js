import React, { Fragment, useEffect, useState, Button } from "react";

import EditBill from "./EditBill";

const ListAdminBill = () => {

    const [bill, setBill] = useState([]);

    const deleteBill = async (id) => {
        try {
            const deleteBill = await fetch(`http://localhost:4000/admin_bill/${id}`, {
                method: "DELETE"
            });

            setBill(bill.filter(bills => bills.bill_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getBill = async () => {
        try {
            const response = await fetch("http://localhost:4000/admin_bill");
            const jsonData = await response.json();

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
                <th>Flight ID</th>
                <th>Routing Number</th>
                <th>Subtotal</th>
                <th>Total</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {bill.map(bills => (
                    <tr key={bills.bill_id}>
                        <td>{bills.user_id}</td>
                        <td>{bills.flight_id}</td>
                        <td>{bills.routing_no}</td>
                        <td>{bills.subtotal}</td>
                        <td>{bills.total}</td>
                        <td>
                            <EditBill bills={bills} />
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteBill(bills.bill_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default ListAdminBill;