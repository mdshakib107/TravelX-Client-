import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const SingUp = () => {

    const { user, singInWithGoogle } = useAuth();
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
                <h1 className="container d-flex justify-content-center p-5 text-start ">Welcome:<br />{user.displayName}<br />email: {user.email} </h1>
                :
                <div className="container d-flex justify-content-center ">
                    <div className="p-5">
                        <img src="./image/login.png" alt="" />
                    </div>
                    <div className="container text-start p-5 ">
                        <h1>Sing Up</h1>
                        <p>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
                        <p>Alredy have Account? <Link to="/singin"> Go to Log In</Link> </p>
                        ------------------------or------------------------
                        <br />

                        <Button variant="primary" type="submit" onClick={handaleGoogleLogin}>
                            Sing In with Google
                        </Button>
                    </div>
                </div>}
        </div>
    );
};

export default SingUp;