import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Package = ({ pkg }) => {
    // console.log(pkg)
    const { _id, from, img, person, price, stay, title, where } = pkg;
    return (
        <div>
            <div className="col">
                <div className="card cart text-start">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body py-1">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text">Stay:{stay}</p>
                        <p className="card-text">Departure Countries:{from}</p>
                        <p className="card-text">Destination Countries: {where}</p>
                        <h5 className="card-title fw-bold text-danger ">Best Price: {price}</h5>
                        <p className="card-text fst-italic">Min Allowed:{person}</p>
                        <Link to={`/placeorder${_id}`}>
                            <Button variant="outline-success mx-1 text-end"><i className="fas fa-info-circle"></i> Book Now </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;
