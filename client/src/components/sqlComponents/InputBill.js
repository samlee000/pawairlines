import React, { Fragment, useState } from "react";

const InputBill = () => {

    const [subtotal, setSubtotal] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { subtotal }
            const response = await fetch("http://localhost:4000/adminbilling", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                subtotal: JSON.stringify(body)
            });

            window.location = "/adminbilling";
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