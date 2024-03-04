import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './HeaderComponent.scss'
import downpattern from "../../image/pattern1down.png";
import ball from '../../image/ball.png';

function HeaderComponent({ title }) {
    return (
        <div className='otherPagesComponent'>
            <div className='container'>
                <div className='contentWrapper'>
                    <h1 className="title animate__animated animate__fadeInDown">{title}</h1>
                    <div className='content animate__animated animate__fadeInUp'>
                        <NavLink to="/" className="home">Home</NavLink>
                        <IoIosArrowForward className='icon' />
                        <div className='text'>{title}</div>
                    </div>
                </div>
            </div>
            <div className='bannerFooter'>
                <img src={downpattern} alt="" className='elementor2' />
                <img src={ball} alt="" className='elementor3' width='30px' />
            </div>

        </div>
    )
}

export default HeaderComponent