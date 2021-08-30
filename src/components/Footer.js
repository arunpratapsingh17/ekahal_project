import React from 'react'
import "./Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="sub-footer">Company logo</div>
            <div className="sub-footer">Contact Us-
                <div className="contact-us">
                    <div className="companies">
                        <Link>
                            <img
                                alt="Facebook"
                                src={facebook}
                                className="icon"
                            />
                            Facebook
                        </Link>
                        </div>
                    <div className="companies">
                        <Link>
                            <img
                                    alt="instagram"
                                    src={instagram}
                                    className="icon"
                            />
                                Instagram 
                        </Link> 
                    </div>
                    <div className="companies">
                        <Link>
                            <img
                                    alt="twitter"
                                    src={twitter}
                                    className="icon"
                                />
                            Twitter
                        </Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="sub-footer">Address-
            <br />454/1,Govind Vihar,Chinhat,Lucknow</div>
        </div>
    )
}

export default Footer
