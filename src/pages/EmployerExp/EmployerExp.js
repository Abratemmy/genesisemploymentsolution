import React, { useEffect } from 'react';
import "./EmployerExp.scss";
import { NavLink } from 'react-router-dom';
import HeaderComponent from '../../newComponents/OtherPagesHeader/HeaderComponent';
import CalendlyBooking from '../../components/CalendlyBooking/CalendlyBooking';
import AOS from 'aos';
import 'aos/dist/aos.css';


function EmployerExp() {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])
    return (
        <div>
            <HeaderComponent title="Empoloyer Experience" />
            <div className='newEmployerContainer'>
                <div className='container'>
                    <div className='pageSubtitle' data-aos="fade-in" style={{ width: 'fit-content' }}>Employer's Benefit</div>
                    <h1 className='pageTitle' data-aos="fade-in">GES help employer build a world where opportunity is truly & evenly distributed</h1>
                    <div className='text'>
                        We help recruiters create virtual experience programs to train and look for the best candidates to hire.
                    </div>
                    <div className='row' style={{ paddingTop: '50px' }}>
                        <div className='col-lg-6'>
                            <div className='contentWrapper' data-aos="fade-up" data-aos-delay="100">
                                <div className='left'>
                                    <div className='title'>Efficiency and Focus</div>
                                    <div className='c-text'>
                                        We help employers to focus on their core business activities while outsourcing HR
                                        functions to experts. This enables
                                        organizations to be more efficient and concentrate on their strategic goals.
                                    </div>
                                </div>
                                <div className="right">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1706178024/Joyagunbiade.com/emp2_agjbot.png' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='contentWrapper' data-aos="fade-up" data-aos-delay="110">
                                <div className='left'>
                                    <div className='title'>Talent Acquisition and Recruitment</div>
                                    <div className='c-text'>
                                        We assist in sourcing, recruiting, and selecting qualified candidates.
                                        We often have access to extensive networks and resources to attract top
                                        talent,
                                        contributing to a more effective and streamlined hiring process.
                                    </div>
                                </div>
                                <div className="right">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1706178024/Joyagunbiade.com/emp6_vbon5t.png' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='contentWrapper' data-aos="fade-up" data-aos-delay="120">
                                <div className='left'>
                                    <div className='title'>Employee Development and Training</div>
                                    <div className='c-text'>
                                        We support employers in designing and implementing employee development programs, training initiatives, and performance management systems. This helps
                                        enhance employee skills and contribute to overall organizational growth.
                                    </div>
                                </div>
                                <div className="right">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1706178024/Joyagunbiade.com/emp3_vhgz6m.png' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='contentWrapper' data-aos="fade-up" data-aos-delay="130">
                                <div className='left'>
                                    <div className='title'>Payroll Support</div>
                                    <div className='c-text'>
                                        We render services and assistance to help organizations manage their payroll processes effectively.
                                        This involves the calculation and distribution of employee salaries, wages, and benefits,
                                        Time and attendance tracking, Record keeping and Reporting.

                                    </div>
                                </div>
                                <div className="right">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1706178024/Joyagunbiade.com/emp4_tvfj7x.png' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='contentWrapper' data-aos="fade-up" data-aos-delay="140">
                                <div className='left'>
                                    <div className='title'>Strategic Planning & Organizational Development</div>
                                    <div className='c-text'>
                                        We assist in strategic workforce planning, succession planning, and organizational development. We
                                        work with employers to align HR practices with broader business objectives.
                                    </div>
                                </div>
                                <div className="right">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1706178024/Joyagunbiade.com/emp1_kykfun.png' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='contentWrapper' data-aos="fade-up" data-aos-delay="150">
                                <div className='left'>
                                    <div className='title'>Conflict Resolution & Employee Relations</div>
                                    <div className='c-text'>
                                        We are skilled in managing conflicts and addressing employee relations issues. Our impartiality can
                                        contribute to fair and effective conflict resolution within the organization.
                                    </div>
                                </div>
                                <div className="right">
                                    <img src='https://res.cloudinary.com/hayteetech/image/upload/v1706178024/Joyagunbiade.com/emp5_vrhysl.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
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
            <div className='emploerexp'>
                {/* <div className='employerexp-bg' data-content-id="1234">
                    <div className='container'>
                        <h1>Adaptive Employer Experience</h1>

                        <div className='header'>How does it work?</div>
                        <p>GES help employer build a world where opportunity is truly & evenly distributed. </p>
                        <p>We also help recruiters create virtual experience programs to train and look for the best candidates to hire. </p>
                    </div>
                </div> */}

                {/* <div className='content'>
                    <div className='container'>
                        <h1>What Employer Tends To Gain From GES</h1>

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2'>
                                <div className='employer-content'>
                                    <h2>Internship Program</h2>

                                    <p>Our training program offers skills development, corporate training programs on wellness, diversity equity and inclusion, as well as HRIS trainings and other company wide orientations that need to be conducted.
                                        We utilize engaging powerpoint, icebreakers and engaging contents to captivate the audience, leaving them wth key learning points.
                                    </p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1667754376/Joyagunbiade.com/pexels-christina-morillo-1181406_dfaoqu.jpg" alt="Employer experience" />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1'>
                                <div className='employer-content'>
                                    <h2>Mentorship Program</h2>

                                    
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12  order-lg-2 order-md-2'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1667754371/Joyagunbiade.com/pexels-canva-studio-3153208_ebqhid.jpg" alt="Employer experience" />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2'>
                                <div className='employer-content'>
                                    <h2>Payroll Support</h2>

                                    
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1667756118/Joyagunbiade.com/pexels-mikhail-nilov-8297031_w5t6f5.jpg" alt="Employer experience" />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1'>
                                <div className='employer-content'>
                                    <h2>Staffing and Recruitment</h2>

                                    
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12  order-lg-2 order-md-2'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1667754380/Joyagunbiade.com/pexels-cowomen-2041627_qmoy64.jpg" alt="Employer experience" />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2'>
                                <div className='employer-content'>
                                    <h2>Executive Search</h2>

                                    
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1'>
                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1667754376/Joyagunbiade.com/pexels-fauxels-3183199_z0rsqe.jpg" alt="Employer experience" />
                            </div>
                        </div>

                    </div>

                </div> */}

                {/* <div className='employer-form'>
                    <div className='container'>
                        <h1>Connecting people is the greatest workplace challenge of our time</h1>
                        <div className='booknow'>
                            <NavLink to="/employer_form" className="booknow-nav">Book us Now</NavLink>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default EmployerExp