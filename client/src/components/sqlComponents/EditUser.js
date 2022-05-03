import React, { Fragment, useState } from "react";
// import Modal from "react-bootstrap/Modal";

const EditUser = ({ users }) => {
    
    // const [ description, setDescription ] = useState(flights.description);
    const [first_name, setFirst_name] = useState(users.first_name);
    const [last_name, setLast_name] = useState(users.last_name);
    const [age, setAge] = useState(users.age);
    const [gender, setGender] = useState(users.gender);
    const [user_address, setUser_address] = useState(users.user_address);
    const [user_email, setUser_email] = useState(users.user_email);
    const [phone_number, setPhone_number] = useState(users.phone_number);

    const updateUser = async e => {
        e.preventDefault();
        try {
            const body = { first_name, last_name, age, gender, user_address, user_email, phone_number };
            const response = await fetch(`http://localhost:4000/user/${users.user_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            
            window.location = "/admin_users";
        } catch (err) {
            console.error(err.message);
        }
    }

    return <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${users.user_id}`}>
        Edit
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id${users.user_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setFirst_name(users.first_name) & setLast_name(users.last_name) & setAge(users.age) & setGender(users.gender) & setUser_address(users.user_address) & setUser_email(users.user_email) & setPhone_number(users.phone_number)}>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" onClick={() => setFirst_name(users.first_name) & setLast_name(users.last_name) & setAge(users.age) & setGender(users.gender) & setUser_address(users.user_address) & setUser_email(users.user_email) & setPhone_number(users.phone_number)}>
                {/* <span aria-hidden="true">&times;</span> */}
                </button>
            </div>
            <div class="modal-body">
                <input type="text" className="form-control mb-2" value={first_name} onChange={e => setFirst_name(e.target.value)}/>
                <input type="text" className="form-control mb-2" value={last_name} onChange={e => setLast_name(e.target.value)}/>
                <input type="text" className="form-control mb-2" value={age} onChange={e => setAge(e.target.value)}/>
                <input type="text" className="form-control mb-2" value={gender} onChange={e => setGender(e.target.value)}/>
                <input type="text" className="form-control mb-2" value={user_address} onChange={e => setUser_address(e.target.value)}/>
                <input type="text" className="form-control mb-2" value={user_email} onChange={e => setUser_email(e.target.value)}/>
                <input type="text" className="form-control mb-2" value={phone_number} onChange={e => setPhone_number(e.target.value)}/>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setFirst_name(users.first_name) & setLast_name(users.last_name) & setAge(users.age) & setGender(users.gender) & setUser_address(users.user_address) & setUser_email(users.user_email) & setPhone_number(users.phone_number)}>Close</button>
                <button type="button" class="btn btn-primary" onClick={e => updateUser(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>;
};

export default EditUser;