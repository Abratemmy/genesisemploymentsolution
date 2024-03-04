import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaEnvelope } from "react-icons/fa";
import logo from '../../image/logo.png'


function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    // const [drop, setDrop] = useState(false);
    // const handleDrop = () => setDrop(!drop)
    return (
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className='container'>
                <div className='nav-container'>
                    <div className='logo'>
                        <NavLink exact to="/">
                            <img src={logo} alt="GES Consulting" />
                        </NavLink>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <a href="https://joyagunbiade.com" activeClassName="active" className='nav-links'>Joy Agunbiade</a>
                        </li>

                        <li className='nav-item'>
                            <NavLink exact to="/about_us" className="nav-links" onClick={handleClick}>About Us</NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to="/employee_experience" className="nav-links" onClick={handleClick}>Employee Exp</NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to="/employer_experience" className="nav-links" onClick={handleClick}>Employer Exp</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/search_jobs" className="nav-links" onClick={handleClick}>Search Jobs</NavLink>
                        </li>


                        <li className='nav-item'>
                            <NavLink exact to="/contact_us" className="nav-links" activeClassName="active" onClick={handleClick}>Contact us</NavLink>
                        </li>
                    </ul>

                    <div className='nav-email'>
                        <a href="mailto:genesisemploymentsolution@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-mail"><FaEnvelope className="react-icon" /></a>
                    </div>

                    <div className='nav-icon' onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar