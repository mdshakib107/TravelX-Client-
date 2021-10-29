
import { Button, } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const SingUp = () => {

    const { user, setUser, singInWithGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handaleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                setIsLoading(true)
                setUser(result.user)
                history.push(redirect_uri)

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div>
            {user.email ?
                <h1 className="container d-flex justify-content-center p-5 text-start ">Welcome:<br />{user.displayName}<br />email: {user.email} </h1>
                :
                <div className="container d-flex justify-content-center ">

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
                    <div className="p-5">
                        <img src="./images/reg.jpg" alt="" />
                    </div>
                </div>}
        </div>
    );
};

export default SingUp;