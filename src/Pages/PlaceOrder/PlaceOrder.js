import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [packag, setPackage] = useState({});
    const { from, img, person, price, stay, title, where, description } = packag;
    const orderPackg = { from, img, person, price, stay, title, where, description };
    useEffect(() => {
        fetch(`https://serene-atoll-12152.herokuapp.com/singlePackage/${id}`)
            .then((res) => res.json())
            .then((idData) => setPackage(idData));
    }, [id]);
    // console.log(packag)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { userName, userEmail, phone, Address, date } = data;
        const status = 'Pending'
        const order = { userEmail, userName, phone, Address, date, status, ...orderPackg };
        axios.post('https://serene-atoll-12152.herokuapp.com/placeorder', order)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Conformd');
                    reset();
                }
            })
    };
    return (
        <div className="m-5">

            <div className="mt-5">
                <Card className="container">
                    <Card.Img className="" variant="top" src={img} />
                    <Card.Body>
                        <Card.Text className="text-start">
                            <h4 className="card-title fw-bold">{title}</h4>
                            <h5 className="card-title fw-bold text-danger ">Best Price: {price}</h5>
                            <p className="card-text fw-bold">Stay: {stay}</p>
                            <p className="card-text fw-bold">Departure Countries: {from}</p>
                            <p className="card-text  fw-bold">Destination Countries:  {where}</p>
                            <p className="card-text fst-italic  fw-bold">Min Allowed: {person}</p>
                            <p className="card-text"><span className="  fw-bold">Description:</span> {description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* package Discribsion and update from */}
                <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
                    <div className="container text-start p-5 col-12 col-md-12">
                        <h2>Please Place Your Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-2 w-25" {...register("userName")} value={user?.displayName} />
                            <input className="m-2 w-25" {...register("userEmail")} value={user?.email} />
                            <input type="number" className="m-2" {...register("phone")} placeholder="Phone Number" required />

                            <input type="date" className="m-2" {...register("Date")} placeholder="Company" required />
                            <textarea className="m-2 d-block w-75" {...register("Address")} placeholder="Address" required />
                            <Button type="submit" variant="primary mx-1 text-end"> Place Order </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
