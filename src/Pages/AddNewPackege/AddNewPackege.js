import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
// import './AddNewPackege.css';

const AddNewPackege = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/package', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
            <div className="col-12 col-md-6  p-5">
                <img src="" alt="" />
            </div>
            <div className="container text-start p-5 col-12 col-md-6 ">
                <h2>Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="m-2" {...register("title")} placeholder="Package Title" />
                    <input className="m-2" {...register("from")} placeholder="Departure Cities" />
                    <input className="m-2" {...register("where")} placeholder="Destination Countries" />
                    <input className="m-2" {...register("agency")} placeholder="Company" />
                    <input className="m-2" {...register("stay")} placeholder="Stay" />
                    <input className="m-2" {...register("person")} placeholder="Min Allowed" />
                    <textarea className="m-2 d-block w-75" {...register("description")} placeholder="Description" />
                    <input className="mx-2" type="number" {...register("price")} placeholder="price" />
                    <input className="m-2" {...register("img")} placeholder="image url" />
                    <input className="m-2 d-block" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewPackege;