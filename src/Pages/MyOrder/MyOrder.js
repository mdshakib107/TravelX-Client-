import axios from 'axios';
import { Button } from 'react-bootstrap';
const MyOrder = ({ orderPackage }) => {
    const { _id, from, img, person, price, stay, title, where, status } = orderPackage;




    const handleDeletePackage = (id) => {
        const proceed = window.confirm('Are you sure for Canceling Booking?');
        if (proceed) {
            axios.delete(`https://serene-atoll-12152.herokuapp.com/deleteProduct/${id}`)
                .then((result) => {
                    if (result.deletedCount) {
                        window.location.reload();
                    }
                    else {
                        window.location.reload();
                    }
                });
        }
    };
    return (
        <div>

            <div className="col">
                <div className="card cart text-start">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body py-1">
                        <h6 className="card-title fw-bold">{title}</h6>
                        <h6 className="card-title fw-bold text-danger">Best Price: {price}</h6>
                        <p className="card-text fw-bold">Stay:{stay}</p>
                        <p className="card-text fw-bold">Departure Countries:{from}</p>
                        <p className="card-text fw-bold">Destination Countries: {where}</p>
                        <p className="card-text fst-italic">Min Allowed:{person}</p>
                        <p className="card-title fw-bold text-dark text-end ">{status}</p>
                        <Button variant="danger mx-1 " onClick={() => handleDeletePackage(_id)} > Cancel Booking  </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;