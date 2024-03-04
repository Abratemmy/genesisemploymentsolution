import React, { useEffect } from 'react';
import { GiStairsGoal } from "react-icons/gi";
import { FaMoneyBillTrendUp, FaCircleDot } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import './EmployeeComp.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function EmployeeComponent() {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])
    return (
        <div className='EmployeeComponent'>
            <div className='row'>
                <div className='col-lg-6 col-md-6'>
                    <div className='content' data-aos="fade-up" >
                        <div className='left'><GiStairsGoal className='icon' /></div>
                        <div className='right'>
                            <div className='header'>Career Plan</div>
                            <div className='text'>GES career management is a life-long process of investing resources to accomplish your future career goals.
                                We embrace various concepts:
                            </div>
                            <div className='list'>
                                <div><FaCircleDot className='icon' /><span>Self Awareness</span></div>
                                <div><FaCircleDot className='icon' /><span>Life-long learning</span></div>
                                <div><FaCircleDot className='icon' /><span>Career Explosion</span></div>
                                <div><FaCircleDot className='icon' /><span>Networking</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='content' data-aos="fade-up">
                        <div className='left'><MdAutoGraph className='icon' /></div>
                        <div className='right'>
                            <div className='header'>Employment Opportunity</div>
                            <div className='text'>we believe in empowering individuals to achieve their career aspirations.</div>
                            <div className='text'>
                                GES will help you:
                                <div className='list'>
                                    <div><FaCircleDot className='icon' /><span>Look for the perfect job</span></div>
                                    <div><FaCircleDot className='icon' /><span>Prepare you for the interview process</span></div>
                                    <div><FaCircleDot className='icon' /><span>We will also give you job links so you can make research</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='content' data-aos="fade-up">
                        <div className='left'><FaMoneyBillTrendUp className='icon' /></div>
                        <div className='right'>
                            <div className='header'>Resume & Linkedin</div>
                            <div className='text'>GES will help you to design your Resume in a format that shows your ability to provide a full overview of your professional history</div>
                            <div className='text'>
                                We Create a complete LinkedIn profile that can help you connect with opportunities by showcasing your unique professional story through experience, skills, and education.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='content' data-aos="fade-up">
                        <div className='left'><GiStairsGoal className='icon' /></div>
                        <div className='right'>
                            <div className='header'>Internship</div>
                            <div className='text'>
                                We offer you the chance to not just build relevant skills and learn about the
                                field, but to demonstrate those skills and industry acumen on the job.
                            </div>
                            <div className='text'>
                                You’ll not only gain real work experience, but also meet and learn from the pros.
                                And you’ll
                                start to build your own network, from your fellow interns to seasoned leaders.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent