import React from 'react';
import { NavLink } from 'react-router-dom';
// import"./Navbar.css";
import {FaEnvelope } from "react-icons/fa"

function Navbar() {
  return (
    <nav className='Navbar'>
        <div className='container'>
            <div className='nav-container'>
                <div className="nav-img">
                    <NavLink to="/">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641830186/Joyagunbiade.com/logo_j1zn9q.png" alt="Joy AgunbiadeLogo" />
                    </NavLink>
                </div>

                <div className='nav-content'>
                    <ul>
                        <li className='nav-item'><a href="https://joyagunbiade.com" className='nav-link'>Joy Agunbiade</a> </li>
                        <li className='nav-item'>
                            <NavLink to="/#" className="nav-link">Services <i className="fas fa-caret-down"></i></NavLink>
                            <div className="nav-dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                    </li>
                                    <li className='dropdown-link'>
                                        <a href="#">Link 3</a>
                                    </li>
                                    <li className="dropdown-link">
                                        <a href="#">Link 4</a>
                                    </li>
                                    <div className="arrow"></div>
                                </ul>
                            </div> 
                        </li>
                        <li className='nav-item'><NavLink to="/our_story" className="nav-link">Our Story</NavLink> </li>
                        <li className='nav-item'><NavLink to="/contact_us" className="nav-link">Contact us</NavLink> </li>
                    </ul>
                </div>

                <div className='nav-icon'>
                    <a href="mailto:joyagunbiadeweb@gmail.com" target="_blank"  rel="noopener noreferrer" className="footer-mail"><FaEnvelope className="react-icon" /></a>
                </div>

                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar