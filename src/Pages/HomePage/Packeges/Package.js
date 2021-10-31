import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package/Package.css'
const Package = ({ pkg }) => {
    // console.log(pkg)
    const { _id, from, img, person, price, stay, title, where } = pkg;

    return (
        <div>
            <div className="col ">
                <div className="card cart text-start ">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body py-1">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <h6 className="card-title fw-bold text-danger ">Best Price: {price}</h6>
                        <p className="card-text fw-bold">Stay:{stay}</p>
                        <p className="card-text fw-bold">Departure Countries:{from}</p>
                        <p className="card-text fw-bold">Destination Countries: {where}</p>
                        <p className="card-text fst-italic">Min Allowed:{person}</p>
                        <Link to={`/placeorder${_id}`}>
                            <Button variant="success mx-1 text-end"> Book Now </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
