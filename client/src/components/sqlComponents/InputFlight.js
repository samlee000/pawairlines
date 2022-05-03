import React, { Fragment, useState } from "react";

const InputFlight = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { description };
            const response = await fetch("http://localhost:4000/flight", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/flight";
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <Fragment>
            <h1 className="mt-3">Flight List</h1>
            <form className="d-flex mt-2 mb-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
};

export default InputFlight;