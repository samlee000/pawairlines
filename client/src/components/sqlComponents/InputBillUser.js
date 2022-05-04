import React, { Fragment, useState } from "react";
import email from '../LogIn.js'

const InputBill = () => {

    const [subtotal, setSubtotal] = useState("");

    const onSubmitForm = async e => {
        try {
            console.log("InputUserBill")
            const user_id = await fetch("http://localhost:4000/useridfromemail}", {
                method: "GET",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(email)
            });
            const body = { subtotal, user_id }
            const response = await fetch("http://localhost:4000/admin_bill", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/admin_bill";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="mt-3">Bill List</h1>
            <form className="d-flex mt-2 mb-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                value={subtotal} 
                onChange={e => setSubtotal(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default InputBill;