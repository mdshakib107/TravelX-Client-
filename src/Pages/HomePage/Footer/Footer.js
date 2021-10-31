import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul className=" text-start ">
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Customers Speak</Link></li>
                            <li><Link to="">In The News</Link></li>
                            <li><Link to="">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Survices</h4>
                        <ul className=" text-start ">
                            <li><Link to="">Taravel Gide </Link></li>
                            <li><Link to="">Travel Booking  </Link></li>
                            <li><Link to="">Visa Prosecing </Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Booking </h4>
                        <ul className=" text-start ">
                            <li><Link to="">Bank</Link></li>
                            <li><Link to="">E-Bank</Link></li>
                            <li><Link to="">In Office </Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <Link to=""><i className="fab fa-twitter"></i></Link>
                            <Link to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link to=""><i className="fab fa-instagram"></i></Link>
                            <Link to=""><i className="fab fa-linkedin-in"></i></Link >
                        </div>
                    </div>
                </div>
            </div>
            <hr className=" text-light " />
            <small className=" text-dark text-mute "> ©All Right Resurved by Mohammad Shakib </small>
        </div>
    );
};

export default Footer;