import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder';
const MyOrders = () => {
    const [orderPackages, setOrderPackages] = useState([]);
    const { user } = useAuth();

    // console.log(user.email)
    // console.log(isDelete)
    useEffect(() => {
        fetch(`https://serene-atoll-12152.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrderPackages(data));
    }, [user.email])
    return (
        <div>

            <div className="">
                <h1 className="p-4" >Hello <span className="text-warning"> {user.displayName}</span> </h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                        {
                            orderPackages.map(orderPackage =>
                                <MyOrder
                                    key={orderPackage._id}
                                    orderPackage={orderPackage}
                                ></MyOrder>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
