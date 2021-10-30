import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder';
const MyOrders = () => {
    const [orderPackages, setOrderPackages] = useState([]);
    const { user, isDelete } = useAuth();

    // console.log(user.email)
    console.log(isDelete)
    useEffect(() => {
        fetch(`https://serene-atoll-12152.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrderPackages(data));
    }, [isDelete])
    return (
        <div>

            <div className="">
                <h1>Hello {user.displayName}Your Orders{orderPackages.length} </h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                        {
                            orderPackages.map(orderPackage =>
                                // console.log(pg)
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
