import React, { useState } from 'react'
import HeaderComponent from '../OtherPagesHeader/HeaderComponent'
import { MdLocationOn } from "react-icons/md";
import { useParams } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import useFetch from './UseFetch';
import "./JobDetail.scss"
import { NavLink } from 'react-router-dom';

function JobDetail() {
    const params = useParams();

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })
    console.log('Single', data)

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>

            <HeaderComponent title='Job Details' />
            <div className='container'>
                <div style={{ margin: '30px 0px' }}>
                    <NavLink to="/search_jobs" className='pageButton'>Back To Job Search</NavLink>
                </div>
                <div className='jobDetailContainer'>

                    {isLoading ? (
                        <div className='pageLoader'  >
                            <div className="spinner-border" style={{ width: '4rem', height: '4rem' }} role="status">
                            </div>
                        </div>
                    ) : error ? (
                        <div className='pageError'>Something went wrong</div>
                    ) : data.length === 0 ? (
                        <div className='pageNoData'>No data</div>
                    ) : (

                        <div className=''>
                            <div className='top'>
                                <div className='image'>
                                    <img src={(data[0].employer_logo) ? data[0].employer_logo
                                        : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg'
                                    }
                                        alt=""
                                    />
                                </div>
                                <div className='jobTitle'>{data[0].job_title}</div>
                                <div className='companyName'>{data[0].employer_name}</div>
                                <div className='companyName'>
                                    <span>
                                        <MdLocationOn className='icon' />
                                    </span>{data[0].job_city} {data[0].job_country}</div>
                            </div>

                            <div className='tabSession'>
                                <div className="game-bloc-tabs" >
                                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                                        <span>About</span>
                                    </div>
                                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                                        <span>Qualifications</span>
                                    </div>
                                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                                        <span>Responsibilities</span>
                                    </div>
                                </div>

                                <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                                    <div className='tabTitle'>About</div>
                                    <div className='text'>
                                        {data[0].job_description ?? 'No data provided'}
                                    </div>
                                </div>
                                <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                                    <div className='tabTitle'>Qualifications:</div>
                                    <div className='text' >
                                        {data[0].job_highlights?.Qualifications ?
                                            <>
                                                {data[0].job_highlights?.Qualifications.map((item, index) => (
                                                    <div className='pointWrapper' key={item + index}>
                                                        <div className='pointDot' ></div>
                                                        <div className='pointText' >{item}</div>
                                                    </div>
                                                ))

                                                }
                                            </>
                                            :
                                            ['N/A']}
                                    </div>
                                </div>
                                <div className={toggleState === 3 ? "tabContent active-tabContent" : "tabContent"}>
                                    <div className='tabTitle'>Responsibilities</div>
                                    <div className='text'>
                                        {data[0].job_highlights?.Responsibilities ?
                                            <>
                                                {data[0].job_highlights?.Responsibilities.map((item, index) => (
                                                    <div className='pointWrapper' key={item + index}>
                                                        <div className='pointDot' ></div>
                                                        <div className='pointText' >{item}</div>
                                                    </div>
                                                ))

                                                }
                                            </>
                                            :
                                            ['N/A']}
                                    </div>
                                </div>

                                <div className='applyNow'>
                                    <div className='first'>
                                        <FaRegHeart className='icon' />
                                    </div>
                                    <a href={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} className='pageButton' target='_blank' rel="noreferrer"> Apply Now </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
// N9FM8CMV4OygWNTDAAAAAA ==
export default JobDetail