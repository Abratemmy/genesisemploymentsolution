import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import testimonyData from './TestimonyData';
import { motion } from "framer-motion"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimony() {
    const [selected, setSelected] = useState(0);
    const tLength = testimonyData.length;
    const transition = { type: "spring", duration: 3 }

    const sort = testimonyData

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, [])

    return (
        <div className='HomeTestimony'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='pageSubtitle'>Testimonials</div>
                        <h1 className='pageTitle' data-aos="fade-in">Lovely feedback from our clients</h1>
                    </div>
                    <div className='col-lg-8'>
                        <div className="contentWrapper">
                            <div className='left-t'>
                                <div className='iconDiv'>
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                    <FaStar className='icon' />
                                </div>

                                <div className='' data-aos="fade-up">
                                    <motion.div
                                        key={selected}
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={transition}
                                        className='testimony'
                                    >
                                        {sort[selected].testimony}
                                    </motion.div>
                                </div>
                                <div className='feedback' data-aos="fade-up">
                                    <motion.div
                                        key={selected}
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={transition}
                                        className='testimony'
                                    >
                                        {sort[selected].testimony2}
                                    </motion.div>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <span style={{ color: "var(--primaryColor)", fontSize: "17px", fontWeight: "600", textAlign: "center" }}>
                                        {sort[selected].name}
                                    </span>

                                </div>
                            </div>

                            <div className='right-t'>
                                <motion.div
                                    key={selected}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={transition}
                                ></motion.div>

                                {/* <div></div> */}
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    // whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ...transition, duration: 2 }}
                                ></motion.div>


                                {
                                    sort[selected].image === '' ? <>
                                        <motion.div src="" alt=" "
                                            key={selected}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={transition}
                                            className='img'
                                        >
                                            <MdPerson className='icon' />
                                        </motion.div>
                                    </> :
                                        <motion.img src={sort[selected].image} alt=" "
                                            key={selected}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={transition}
                                        />
                                }


                            </div>
                        </div>

                        <div className="arrows">
                            <div className='icon-div'>
                                <BsArrowLeft
                                    key={selected}
                                    initial={{ opacity: 0, x: -100 }}
                                    // whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ...transition, duration: 2 }}

                                    onClick={() => {
                                        selected === 0 ? setSelected(tLength - 1) :
                                            setSelected((prev) => prev - 1)
                                    }}
                                    className="icon"
                                />
                            </div>

                            <div className='icon-div'>
                                <BsArrowRight
                                    onClick={() => {
                                        selected === tLength - 1 ? setSelected(0) :
                                            setSelected((next) => next + 1)
                                    }}
                                    className="icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony