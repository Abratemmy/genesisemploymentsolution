import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
// import "./newnav.css";
import { FaEnvelope } from "react-icons/fa";
import logo from '../../image/logo.png'

function Newnav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [drop, setDrop] = useState(false);
    const handleDrop = () => setDrop(!drop)

    return (
        <nav className='navbar'>
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

                        <span className='dropdown-list'>
                            <li className='nav-item'>
                                <Link smooth to="#" className="nav-links" activeClassName="active" onClick={handleDrop}>Employee Experience <i className="fas fa-caret-down"></i></Link>
                            </li>
                            <ul className={drop ? 'dropdown' : "dropdown  height"}>
                                <li className='navitem-drop'><NavLink exact to="/linkedin_services" onClick={handleClick} activeClassName="active" className="nav-drop">Linkedin</NavLink></li>
                                <li className='navitem-drop'><NavLink exact to="/career_management" onClick={handleClick} activeClassName="active" className="nav-drop">Career Plan</NavLink></li>
                                <li className='navitem-drop'><NavLink exact to="/resume_services" onClick={handleClick} activeClassName="active" className="nav-drop">Resume</NavLink></li>
                                <li className='navitem-drop'><NavLink exact to="/employment_services" onClick={handleClick} activeClassName="active" className="nav-drop">Employment</NavLink></li>
                                <li className='navitem-drop'><NavLink exact to="/internship_services" onClick={handleClick} activeClassName="active" className="nav-drop">Internship</NavLink></li>

                            </ul>
                        </span>

                        <li className='nav-item'>
                            <NavLink to="/employer_experience" className="nav-links" activeClassName="active" onClick={handleClick}>Employer Experience </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink exact to="/our_story" className="nav-links" activeClassName="active" onClick={handleClick}>Our Story</NavLink>
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

export default Newnav