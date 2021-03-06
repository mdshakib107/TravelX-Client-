import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="bg fixed-top">
                <Navbar expand="lg" >
                    <Container className="me-auto ">
                        <NavLink to="/">
                            <img src="./images/logo.png" alt="" width="200" height="50" />
                        </NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                {user.email && <Link className="text-decoration-none text fw-bold fs-5 px-2" to="/myorder">
                                    My Order
                                </Link>}
                                {user.email && <Link className="text-decoration-none text fw-bold fs-5 px-2" to="/manageallpackage">
                                    Manage All Packages
                                </Link>}
                                {user.email && <Link className="text-decoration-none text fw-bold fs-5 px-2" to="/addpackage">
                                    Add A Pakages
                                </Link>}
                                {user.email && <Link to="/singup"><span className="fas fa-user-circle text fw-bold fs-5 p-2"> {user.displayName}</span></Link>}
                                {user.email ?
                                    <Button className="" onClick={logOut} variant="warning">Log Out</Button>

                                    :
                                    <Link to="/singup" className="text-decoration-none text fw-bold fs-5 px-2 mx-auto">
                                        <i className="fas fa-user-circle text fw-bold fs-5"></i> Sing In/Log In
                                    </Link>}


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        </div>
    );
};

export default Header;