import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './ManageCartStyle/ManageCart.css'
const ManageAllPackage = ({ order }) => {
    const { _id, userEmail, userName, title, status } = order;


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure for Canceling Booking?');
        if (proceed) {
            axios.delete(`https://serene-atoll-12152.herokuapp.com/admindelete/${id}`)
                .then((result) => {
                    if (result.deletedCount) {
                        window.location.reload();
                    }
                    else {
                        window.location.reload();
                    }
                });
        }
    };

    const handleUpdate = (id) => {
        const data = { status: 'Approverd' }
        axios.put(`https://serene-atoll-12152.herokuapp.com/updatestatus/${id}`, data)
            .then((result) => {
                if (result.modifiedCount) {
                    window.location.reload();
                } else {
                    window.location.reload();
                }
            });

    }
    return (
        <div>
            <div className="col">
                <div className="card manageCart text-start">
                    <div className="card-body py-1">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text">User Name: {userName}</p>
                        <p className="card-text">User Email:{userEmail}</p>
                        <Button variant="danger mx-1 " onClick={() => handleDelete(_id)} > Cancel Booking</Button>
                        <Button variant="outline-success mx-1 " onClick={() => handleUpdate(_id)} > {status}  </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageAllPackage;