import React, { Fragment, useEffect, useState, Button } from "react";

import EditBill from "./EditBill";

const ListAdminBill = () => {

    const [bill, setBill] = useState([]);

    const deleteBill = async (id) => {
        try {
            const deleteBill = await fetch(`http://localhost:4000/adminbilling/${id}`, {
                method: "DELETE"
            });

            setBill(bill.filter(bills => bills.bill_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getBill = async () => {
        try {
            const response = await fetch("http://localhost:4000/adminbilling");
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
        <table class="table">
            <thead>
            <tr>
                <th>Subtotal</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {bill.map(bills => (
                    <tr key={bills.bill_id}>
                        <td>{bills.subtotal}</td>
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