import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddNewPackege = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);

        axios.post('https://serene-atoll-12152.herokuapp.com/package', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('A New Package Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
            <div className="container text-start p-5 col-12 col-md-6 ">
                <h2>Please Add a New Package </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="m-2" {...register("title")} placeholder="Package Title" required />
                    <input className="m-2" {...register("from")} placeholder="Departure Cities" required />
                    <input className="m-2" {...register("where")} placeholder="Destination Countries" required />
                    <input className="m-2" {...register("agency")} placeholder="Company" required />
                    <input className="m-2" {...register("stay")} placeholder="Stay" required />
                    <input className="m-2" {...register("person")} placeholder="Min Allowed" required />
                    <textarea className="m-2 d-block w-75" {...register("description")} placeholder="Description" required />
                    <input className="mx-2"  {...register("price")} placeholder="price" required />
                    <input className="m-2" {...register("img")} placeholder="image url" required />
                    <Button type="submit" variant="primary mx-1 text-end"> Add Package </Button>
                </form>
            </div>
        </div>
    );
};

export default AddNewPackege;