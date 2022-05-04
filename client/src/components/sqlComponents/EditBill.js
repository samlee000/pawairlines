import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const EditBill = ({ bills }) => {
    
    const [ subtotal, setSubtotal ] = useState(bills.subtotal);

    const updateSubtotal = async e => {
        e.preventDefault();
        try {
            const body = { subtotal };
            const response = await fetch(`http://localhost:4000/admin_bill/${bills.bill_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/admin_bill";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${bills.bill_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`id${bills.bill_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setSubtotal(bills.subtotal)}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Bills</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setSubtotal(bills.subtotal)}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div className="modal-body">
                <input type="text" className="form-control" value={subtotal} onChange={e => setSubtotal(e.target.value)}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setSubtotal(bills.subtotal)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={e => updateSubtotal(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default EditBill;