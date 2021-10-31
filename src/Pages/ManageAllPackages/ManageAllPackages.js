import React, { useEffect, useState } from 'react';
import ManageAllPackage from './ManageAllPackage';

const ManageAllPackages = () => {

    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('https://serene-atoll-12152.herokuapp.com/manageallpackage')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    return (
        <div>

            <h1>    ADMIN PANEL </h1>
            <div class=" row row-cols-1 row-cols-md-3 g-4 p-3">

                {
                    allOrders.map(order =>
                        <ManageAllPackage
                            key={order._id}
                            order={order}
                        ></ManageAllPackage>
                    )
                }

            </div>




        </div>
    );
};

export default ManageAllPackages;