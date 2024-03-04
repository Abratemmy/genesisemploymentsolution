import React, { useEffect } from 'react'
import HeaderComponent from '../OtherPagesHeader/HeaderComponent'
import EmployeeComponent from '../../components/EmployeeComponent/EmployeeComponent'
import './Employee.scss';
import { NavLink } from 'react-router-dom';
import CalendlyBooking from '../../components/CalendlyBooking/CalendlyBooking';
import AOS from 'aos';
import 'aos/dist/aos.css';



function EmployeeExperience() {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])
    return (
        <div>
            <HeaderComponent title='Employee Experience' />
            <div className='EmployeeContainer'>
                <div className='pageSubtitle' data-aos="fade-in" style={{ width: 'fit-content' }}>Employee's Benefit</div>
                <h1 className='pageTitle' data-aos="fade-in">We offer comprehensive approach to HR Advice</h1>
                <div className='ptext'>
                    We are excited to start this relationship with you! Now Let's Get You Settled Into A Professional Job
                </div>
                <div className='container' style={{ paddingTop: '50px' }}>
                    <EmployeeComponent />
                </div>
                <div className='employer-banner'>
                    <div className='container'>
                        <div className='wrapper'>
                            <div className='content'>
                                <h1 className='pageTitle'>Get expert advice on HR consulting or any other employment related issue</h1>
                                <div className='text'>
                                    We believe that informed clients make better decisions. As part of our service, we'll provide educational resources and workshops to help.
                                </div>
                            </div>
                            <div className='booking'>
                                <CalendlyBooking buttonName='Schedule An Appointment With Us' />
                                <NavLink to="/contact_us" className='pageButton pageButton2'>Contact Us</NavLink>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmployeeExperience