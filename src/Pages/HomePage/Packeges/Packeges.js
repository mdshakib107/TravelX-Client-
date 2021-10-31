import React, { useEffect, useState } from 'react';
import Package from './Package';

const Packeges = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('https://serene-atoll-12152.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div>
            <div className="">
                <h3 className="fs-3 fw-bold text-uppercase  text-dark p-5" >Our Packages </h3>
                {
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                            {
                                packages.map(pg =>
                                    <Package
                                        key={pg._id}
                                        pkg={pg}
                                    ></Package>
                                )
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Packeges;