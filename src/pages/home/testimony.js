import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { motion } from "framer-motion"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import moment from "moment"

function Testimony() {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            const res = await axios.get('https://joyagunbiadeserver.onrender.com/gesfeedback');
            setdata(res.data);
            console.log("data", res.data)
            setLoading(false);
        }
        fetchdata()
    }, []);
    const [selected, setSelected] = useState(0);
    const tLength = data.length;
    const transition = { type: "spring", duration: 3 }

    // const sort= data.sort((a, b)=> moment(new Date(b.createdAt)) - moment(new Date(a.createdAt));

    const sort = data.sort((a, b) => moment(new Date(b.createdAt)) - moment(new Date(a.createdAt)))

    return (
        <div className='testimony-page'>
            {!data.length ? <div className="loading" style={{ paddingBottom: "30px", textAlign: "center", margin: "40px 0px" }}>
                <div class="spinner-grow text-spin" role="status">
                    <span class="sr-only form-loading">Loading...</span>
                </div>
            </div> :

                <div className='container'>

                    <Fragment>
                        <div className='testimony-session'>
                            <div className='left-t'>
                                <span className='stroke-text'>What people </span>
                                <span>say about us</span>

                                {/* 4th child below */}
                                <motion.span
                                    key={selected}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={transition}
                                >
                                    {sort[selected].testimony}
                                </motion.span>

                                <span>
                                    <span style={{ color: "var(--primaryColor)", fontSize: "16px", fontWeight: "600", textAlign: "center" }}>
                                        {sort[selected].name}
                                    </span>

                                </span>
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


                                <motion.img src={sort[selected].image} alt=" "
                                    key={selected}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={transition}
                                />


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
                    </Fragment>

                </div>


            }
        </div>
    )
}

export default Testimony