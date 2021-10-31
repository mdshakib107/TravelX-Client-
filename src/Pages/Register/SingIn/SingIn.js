import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SingIn = () => {
    const { singInWithGoogle, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handaleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                history.push(redirect_uri)

            })
    }
    return (
        <div>
            {user.email ?
                <h1 className="container d-flex justify-content-center p-5 ">Welcome: <br /> {user.displayName}</h1>
                :
                <div className="row row-col-12 row-col-md-6 container d-flex justify-content-center ">
                    <div className="col p-5">
                        <img className="border border-rounded-5" src="./images/reg.jpg" alt="" />
                    </div>
                    <div className="container text-start p-5 col ">
                        <h1>SingIn</h1>
                        <p> Sing in to access your orders, special offers, Travel tips and more!</p>


                        <p>New to Lets TravelX? <Link to="/singup"> Create Account </Link> </p>
                        ------------------------or------------------------
                        <br />

                        <Button variant="primary" type="submit" onClick={handaleGoogleLogin} >
                            SingIn with Google
                        </Button>
                    </div>
                </div>}
        </div>
    );
};

export default SingIn;