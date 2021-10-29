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
                            <li><Link to="">About Netmeds</Link></li>
                            <li><Link to="">Customers Speak</Link></li>
                            <li><Link to="">In the News</Link></li>

                            <li><Link to="">Terms and Conditions</Link></li>

                            <li><Link to="">Contact</Link></li>
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
                        <h4>Online Booking </h4>
                        <ul className=" text-start ">

                            <li><Link to="">Browse by A-Z</Link></li>
                            <li><Link to="">Browse by Manufacturers</Link></li>
                            <li><Link to="">Health Articles</Link></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
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
            <small className=" text-light text-mute "> ©All Right Resurved by Mohammad Shakib </small>
        </div>
    );
};

export default Footer;