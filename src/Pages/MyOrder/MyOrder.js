import axios from 'axios';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
const MyOrder = ({ orderPackage }) => {
    const { setIsDelete } = useAuth()
    const { _id, from, img, person, price, stay, title, where } = orderPackage;




    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure for delete?');
        if (proceed) {
            axios.delete(`https://serene-atoll-12152.herokuapp.com/deleteProduct/${id}`)
                .then((result) => {
                    if (result.deletedCount) {
                        setIsDelete(true);

                    }
                    else {
                        setIsDelete(false);
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
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text">Stay:{stay}</p>
                        <p className="card-text">Departure Countries:{from}</p>
                        <p className="card-text">Destination Countries: {where}</p>
                        <h5 className="card-title fw-bold text-danger ">Best Price: {price}</h5>
                        <p className="card-text fst-italic">Min Allowed:{person}</p>

                        <Button variant="outline-success mx-1 text-end" onClick={() => handleDeleteProduct(_id)} ><i className="fas fa-info-circle"></i> Cancel Booking  </Button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;