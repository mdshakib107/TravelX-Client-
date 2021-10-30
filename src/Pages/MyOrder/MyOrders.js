import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder';
const MyOrders = () => {
    const [orderPackages, setOrderPackages] = useState([]);
    const { user, isDelete } = useAuth();

    // console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrderPackages(data));
    }, [user.email, isDelete])
    return (
        <div>

            <div className="">

                <h1>Hello {user.displayName},Your Orders </h1>

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