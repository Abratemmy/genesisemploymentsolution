import React, { useEffect } from 'react';
import './LandingPage.scss';
import ball from '../../image/ball.png';
import pattern1 from '../../image/pattern1.png'
import { NavLink } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import downpattern from "../../image/pattern1down.png";
import image1 from '../../image/img1.png';
import image2 from '../../image/img2.png';
import consulting2 from '../../image/consulting2.jpg';
import consulting1 from '../../image/consulting1.jpg'
import { MdAutoGraph, MdSatellite, MdOutlineHomeWork, MdContactMail } from "react-icons/md";
import { FaMoneyBillTrendUp, FaHotel } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import standoutimage from '../../image/standout.png';
import { IoShieldCheckmark } from "react-icons/io5";
import Testimony from './Testimony';
import EmployeeComponent from '../../components/EmployeeComponent/EmployeeComponent';
import CalendlyBooking from '../../components/CalendlyBooking/CalendlyBooking';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])
    return (
        <div className='landingPageOverall'>
            <div className='landingPage'>
                <img src={ball} alt='' className='elementor animatekey1' width="50px" />
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-6'>
                            <div className='leftContent ' >
                                <span className=' animate__animated animate__backInDown'>
                                    <span className='pageSubtitle'>
                                        Human Resources Solution Partner
                                    </span>
                                </span>

                                <h1 className='animate__animated animate__fadeInLeft'>
                                    We Are A Leading HR Consulting Agency
                                </h1>
                                <p className='text animate__animated animate__fadeInLeft'>Our consultants bring strategic and tactical HR services to organizations.
                                    We play a vital role in helping organizations navigate the complexities of human resources and optimize their workforce for success.
                                </p>
                                <div className='adviceDiv animate__animated animate__fadeInLeft'>
                                    <NavLink to="/contact_us" className='pageButton'>Get Expert Advice</NavLink>
                                    <div className='callus'>
                                        <span><BsTelephone className='icon' /></span>
                                        <div className='call'>
                                            <p>Call Us for Consultation</p>
                                            <a href="tel:+16137777011">+1 (613) 777-7011</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='imageContent'>
                                <img src={image1} alt="" className='image1' />
                                <img src={image2} alt="" className='image2 animatekey1' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bannerFooter'>
                    <img src={downpattern} alt="" className='elementor2' />
                    <img src={ball} alt="" className='elementor3' width='30px' />
                </div>
            </div>

            {/* landingAbout */}
            <div className='LandingAbout'>
                <div className='container'>
                    <div className='firstSession'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-7'>
                                <img src={consulting2} alt="" className='animate__animated animate__fadeInDown' />
                            </div>
                            <div className='col-lg-5 col-md-5'>
                                <img src={consulting1} alt="" className='animate__animated animate__fadeInUp' />
                            </div>
                        </div>
                    </div>

                    <div className="secondSession">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='content' data-aos="fade-zoom-in"  >
                                    <div className='pageSubtitle'>Why Choose Us</div>
                                    <h1 className='pageTitle' data-aos="fade-right" >
                                        Let us help you to effectively manage your human capital
                                    </h1>
                                    <div className='text text1' data-aos="fade-right">
                                        <span>GES</span> is a recruitment company that provides a comprehensive service that identifies
                                        the role requirements in the organization and designs the job description and skill requirements for that role.
                                        We work towards creating a positive work environment, fostering employee growth,
                                        and aligning HR practices with the broader goals of the organization.
                                    </div>
                                    <div className="text" data-aos="fade-up">
                                        Maximize your human resources potential with our expert advice.
                                        Schedule a consultation today to discuss how we can customize our expertise to suit your unique needs.
                                    </div>

                                    <NavLink to="/about_us" className='pageButton'>Tranform your Productivity</NavLink>
                                </div>

                            </div>

                            <div className='col-lg-6'>
                                <div className='contentWrapper' data-aos="fade-up">
                                    <div className='image'>
                                        <GiStairsGoal className='icon' />
                                    </div>
                                    <div className='right'>
                                        <div className='title'>Optimizing Human Capital</div>
                                        <ul className="text">
                                            <li>Ensure that the organization has the right talent in the right positions</li>
                                            <li>Implement strategies for talent acquisition and retention.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='contentWrapper' data-aos="fade-up">
                                    <div className='image'>
                                        <MdAutoGraph className='icon' />
                                    </div>
                                    <div className='right'>
                                        <div className='title'>Employee Engagement and Satisfaction</div>
                                        <ul className="text">
                                            <li>Implement initiatives to boost employee morale and job satisfaction.</li>
                                            <li>Address employee relations issues and conflicts.</li>
                                            <li>Design and execute employee engagement programs.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='contentWrapper' data-aos="fade-up">
                                    <div className='image'>
                                        <FaMoneyBillTrendUp className='icon' style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className='right'>
                                        <div className='title'>Enhancing Organizational Performance</div>
                                        <ul className="text">
                                            <li>Develop and implement performance management systems.</li>
                                            <li>Provide solutions for improving employee productivity and efficiency.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* googlecalendar session */}
            <div className='googlCalendar'>
                <div className='container'>
                    <div className='title'>Get Expert Advice</div>
                    <div className='text'>Booking a session with us is an opportunity
                        to address concerns, seek guidance, and receive support in navigating various workplace challenges.
                    </div>

                    <CalendlyBooking buttonName='Book a session with us' />
                </div>
            </div>

            {/* another session for stand out */}
            <div className="StandOutSession">
                <img src={pattern1} alt='' className='pattern' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <div className='image'>
                                <img src={standoutimage} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='contentWrapper'>
                                <div className='pageSubtitle' data-aos="fade-in">Why we stand out</div>
                                <h1 className='pageTitle' data-aos="fade-in">GES Leads, Others Follow</h1>
                                <div className='text' data-aos="fade-in">We stand out due to the following reasons</div>
                                <div className='wrapper'>
                                    <div className='content' data-aos="fade-zoom-in">
                                        <span className=''>
                                            <IoShieldCheckmark className='icon' />
                                        </span>
                                        <div className='header'>Expertise and Experience</div>
                                    </div>

                                    <div className='content' data-aos="fade-zoom-in">
                                        <span className=''>
                                            <IoShieldCheckmark className='icon' />
                                        </span>
                                        <div className='header'>Client Success Stories</div>
                                    </div>

                                    <div className='content' data-aos="fade-zoom-in">
                                        <span className=''>
                                            <IoShieldCheckmark className='icon' />
                                        </span>
                                        <div className='header'>Innovative Solutions</div>
                                    </div>

                                    <div className='content' data-aos="fade-zoom-in">
                                        <span className=''>
                                            <IoShieldCheckmark className='icon' />
                                        </span>
                                        <div className='header'>Customization and Flexibility</div>
                                    </div>

                                    <div className='content' data-aos="fade-zoom-in">
                                        <span className=''>
                                            <IoShieldCheckmark className='icon' />
                                        </span>
                                        <div className='header'>Cost-Effectiveness</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={ball} alt="" className='elementor3' width='30px' />
            </div>

            {/* What we offer. Services */}
            <div className='homeServices'>
                <div className='container'>
                    <div className='pageSubtitle' data-aos="fade-in">Services</div>
                    <h1 className='pageTitle' data-aos="fade-in">What We Offer</h1>
                    <EmployeeComponent />

                    <NavLink to="/employer_experience" className="pageButton" style={{ marginTop: '20px' }}>Learn More About What Employer's Experience</NavLink>
                </div>
            </div>

            {/* connect session */}
            <div className='homeConnectSession'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='firsttestimony-content'>
                                <FaHotel className="firsttestimony-icon" />
                                <p>Let us help you with your hiring needs</p>
                                <NavLink to="/contact_us" className='pageButton'>Contact us</NavLink>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='firsttestimony-content'>
                                <MdSatellite className="firsttestimony-icon" />
                                <p>Join our community and together we build a future</p>
                                <a href="https://t.me/+uTSXvwHtSBxhZGVh" className='pageButton'>Click here</a>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='firsttestimony-content'>
                                <MdContactMail className="firsttestimony-icon" />
                                <p>Send an email to have a connection with us</p>
                                <a href="mailto:genesisemploymentsolution@gmail.com" target="_blank" rel="noopener noreferrer" className='pageButton'>Email</a>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='firsttestimony-content'>
                                <MdOutlineHomeWork className="firsttestimony-icon" />
                                <p>Connect with us on Linkedin</p>
                                <a href="https://www.linkedin.com/company/ges-genesis-employment-solutions/about/?viewAsMember=true" className='pageButton'>Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* testimony */}
            <Testimony />
        </div>
    )
}

export default LandingPage