import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const EditBill = ({ bills }) => {
    
    const [ subtotal, setSubtotal ] = useState(bills.subtotal);

    const updateSubtotal = async e => {
        e.preventDefault();
        try {
            const body = { subtotal };
            const response = await fetch(`http://localhost:4000/adminbilling/${bills.bill_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/adminbilling";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${bills.bill_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id${bills.bill_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setSubtotal(bills.subtotal)}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Bill</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setSubtotal(bills.subtotal)}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div class="modal-body">
                <input type="text" className="form-control" value={subtotal} onChange={e => setSubtotal(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setSubtotal(bills.subtotal)}>Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updateSubtotal(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default EditBill;