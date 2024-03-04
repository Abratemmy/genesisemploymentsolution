import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';
import { FaEnvelope } from "react-icons/fa"
import { BsTelephone } from "react-icons/bs";

import "./footer.css";

function Footer() {
    return (
        <div className='footer-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='footer-content'>
                            <img src={logo} alt="" className='footer-logo' />
                            <div className='footer-text' style={{ paddingTop: '10px' }}>
                                Genesis Employment Solutions is an HR Consulting firm that helps start ups outsource their HR functions and Hiring needs.
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='footer-content footerContentcenter'>
                            <div className="footer-title">Explore</div>
                            <div className='footer-text'>
                                <ul className='quick-links'>
                                    <li><a href="https://joyagunbiade.com" className="footer-nav">Main</a></li>
                                    <li><NavLink to="/about" className="footer-nav" > About</NavLink></li>
                                    <li><NavLink to="/contact_us" className="footer-nav">Contact us</NavLink> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='footer-content footerContentcenter'>
                            <div className="footer-title">Get in touch</div>
                            <div className='footer-text'>
                                <ul className='footerContact'>
                                    <span><FaEnvelope className='icon' /></span>
                                    <a href="mailto:joyagunbiadeweb@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-mail">
                                        Click here to email Us
                                    </a>
                                </ul>
                                <ul className='footerContact'>
                                    <span><BsTelephone className='icon' /></span>
                                    <a href="tel:+16137777011">+1 (613) 777-7011</a>
                                </ul>
                            </div>
                            <div className="footer-title" style={{ paddingTop: '5px', fontSize: '18px' }}>Follow</div>
                            <div className='footer-text'>
                                <ul className='social-link'>
                                    <li><a href="https://www.linkedin.com/company/ges-genesis-employment-solutions/about/?viewAsMember=true" className='footer-link'><FaLinkedin /></a> </li>
                                    <li><a href="https://www.instagram.com/genesisemploymentsolution/" className='footer-link'><FaInstagram /></a> </li>
                                    <li><a href="https://www.twitter.com/@ThinkGES/" className='footer-link'><FaTwitter /></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='footer-content footerContentcenter'>
                            <div className="footer-title">Disclaimer</div>
                            <div className='footer-text'>
                                Please note, we are a recruitment firm
                                and do not offer immigration support, we are however happy to refer you to our partners.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer