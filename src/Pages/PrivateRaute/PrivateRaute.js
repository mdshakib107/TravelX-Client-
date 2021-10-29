import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRaute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) return 'loading';
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/singup",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRaute;