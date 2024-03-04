import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import HeaderComponent from '../OtherPagesHeader/HeaderComponent';
import { MdLocationOn, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom';

function Search() {
    const params = useParams();
    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);
    console.log('seachResult', searchResult)

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <div>
            <HeaderComponent title={`${params.id} Job Opportunities`} />

            <div className='container'>
                <div className='searchResultContainer' style={{ marginTop: '60px' }}>
                    <div style={{ margin: '30px 0px' }}>
                        <NavLink to="/search_jobs" className='pageButton'>Back To Job Search</NavLink>
                    </div>
                    {
                        searchLoader ? (
                            <div className='pageLoader'  >
                                <div className="spinner-border" style={{ width: '4rem', height: '4rem' }} role="status">
                                </div>
                            </div>
                        ) : searchError ? (
                            <div className='pageError'>Something went wrong</div>
                        ) : (
                            <div className=''>
                                {searchResult?.map((job) => {
                                    return (
                                        <div className="jobCardContainer">
                                            <div className='jobTitle'>{job.job_title}</div>
                                            <div className='jobContent'>
                                                <div className='left'>
                                                    <div className='image'>
                                                        {
                                                            job.employer_logo ? <img src={job.employer_logo} alt="" />
                                                                :
                                                                <img src='https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg' alt="" />
                                                        }

                                                    </div>
                                                    <div className='content'>
                                                        <div className='jobType'>{job.job_employment_type}</div>
                                                        <div className='jobLocation'>
                                                            <span><MdLocationOn className='icon' /></span>{job.job_city} {job.job_country}</div>

                                                    </div>
                                                </div>
                                                <div className='right'>
                                                    <NavLink to={`/job-details/${job.job_id}`} className='pageButton'>Details</NavLink>
                                                    <a href={job.job_google_link} className='pageButton pageButton2' target='_blank' rel="noreferrer">Apply Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }

                    <div className='jobSearchfooterContainer'>
                        <div
                            className='paginationButton'
                            onClick={() => handlePagination('left')}
                        >
                            <div className='image'>
                                < MdOutlineKeyboardArrowLeft className='icon' />
                            </div>
                        </div>

                        <div className='paginationTextBox'>
                            <div className='paginationText'>{page}</div>
                        </div>

                        <div
                            className='paginationButton'
                            onClick={() => handlePagination('right')}
                        >
                            <div className='image'>
                                < MdOutlineKeyboardArrowRight className='icon' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
