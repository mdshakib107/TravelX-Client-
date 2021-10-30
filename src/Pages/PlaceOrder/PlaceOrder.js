import axios from "axios";
import React, { useEffect, useState } from "react";
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

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const { userName, userEmail, phone, Address, date } = data;
        const order = { userEmail, userName, phone, Address, date, ...orderPackg };
        // console.log(order)
        axios.post('https://serene-atoll-12152.herokuapp.com/placeorder', order)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Conformd');
                    reset();
                }
            })

        // console.log(data);
    };
    return (
        <div>

            <div className="">
                <div className=" card m-3" >
                    <div className="row g-0">
                        <div className="col-md-4 h-100">
                            <img src={img} className="img-fluid rounded-start " alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body py-1">
                                <h5 className="card-title fw-bold">{title}</h5>
                                <p className="card-text">Stay:{stay}</p>
                                <p className="card-text">Departure Countries:{from}</p>
                                <p className="card-text">Destination Countries: {where}</p>
                                <h5 className="card-title fw-bold text-danger ">Best Price: {price}</h5>
                                <p className="card-text fst-italic">Min Allowed:{person}</p>
                                <p className="card-text">Description: {description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* package Discribsion and update from */}
                <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
                    {/* <div className="col-12 col-md-6  p-5">
                        <h6></h6>
                    </div> */}
                    <div className="container text-start p-5 col-12 col-md-12">
                        <h2>Please Place Your Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-2 w-25" {...register("userName")} defaultValue={user?.displayName} />
                            <input className="m-2 w-25" {...register("userEmail")} defaultValue={user?.email} />
                            <input type="number" className="m-2" {...register("phone")} placeholder="Phone Number" />
                            <input type="date" className="m-2" {...register("Date")} placeholder="Company" />
                            <textarea className="m-2 d-block w-75" {...register("Address")} placeholder="Address" />
                            <input className="m-2 d-block" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
