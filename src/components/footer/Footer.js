

import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-link">
                <p>Useful Link</p>
            </div>
            <div className="d-flex px-5 mx-5 ms-5">
                <div className=" mx-5 w-100 ms-5">
                    <ul>
                        <Link><li>Jobs</li></Link>
                        <Link><li>Annual Reports</li></Link>
                        <Link><li>Visitos</li></Link>
                    </ul>
                </div>

                <div className=" mx-5 w-100 ms-5">
                    <ul>
                        <Link><li>Library</li></Link>
                        <Link><li>Froms Submited</li></Link>
                        <Link><li>Contacts for Service</li></Link>
                    </ul>
                </div>
                <div className=" mx-5 w-100 ms-5">
                    <ul>
                        <Link><li>Register Graduate</li></Link>
                        <Link><li>Result Achive</li></Link>
                        <Link><li>Contacts for Service</li></Link>
                    </ul>
                </div>
               
            </div>

            <div className="footer-text">
                <p>All Right Reserved © 2023</p>
            </div>
        </div>
    );
}



export default Footer;