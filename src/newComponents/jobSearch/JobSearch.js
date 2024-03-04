import React, { useState } from 'react';
import './JobSearch.scss';
import HeaderComponent from '../OtherPagesHeader/HeaderComponent';
import { MdLocationOn, MdSearch, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import useFetch from './UseFetch';
import { NavLink, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';


function JobSearch() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    console.log('seatd', searchTerm)

    const { data, isLoading, error } = useFetch("search", {
        query: "All Jobs in Canada",
        num_pages: "2",
    });

    console.log("Data", data)

    const [pageNumber, setPageNumber] = useState(0);
    const postPerPage = 10
    const postVisited = pageNumber * postPerPage
    const pageCount = Math.ceil(data.length / postPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
        // this is to scroll up when 
        window.scrollTo(0, 0)
    }


    return (
        <div>
            <HeaderComponent title='Search Jobs' />
            <div className='JobSearchContainer'>
                <div className='container'>
                    {isLoading ? (
                        <div className='pageLoader'  >
                            <div className="spinner-border" style={{ width: '4rem', height: '4rem' }} role="status">
                            </div>
                        </div>
                    ) : error ? (
                        <div className='pageError'>Something went wrong</div>
                    ) :
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='SearchInputContainer'>
                                    <div className='title'>Search Jobs</div>

                                    <div className='formInput'>
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder='What are you looking for'
                                        />
                                        <div className='button'
                                            onClick={() => {
                                                if (searchTerm) {
                                                    navigate(`/search/${searchTerm}`)
                                                }
                                            }}
                                        >
                                            <MdSearch className='icon' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                {data?.slice(postVisited, postVisited + postPerPage)?.map((job) => {
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
                                <div className="pagination-container">
                                    <ReactPaginate
                                        breakLabel="..."
                                        previousLabel={<span><MdOutlineKeyboardArrowLeft /></span>}
                                        nextLabel={<span><MdOutlineKeyboardArrowRight /></span>}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        pageRangeDisplayed={10}
                                        renderOnZeroPageCount={null}
                                        containerClassName={"pagination-btns"}
                                        previousLinkClassName={"previous-btn"}
                                        nextLinkClassName={"next-btn"}
                                        disabledClassName={"pagination-disabled"}
                                        activeClassName={"pagination-active"}
                                        marginPagesDisplayed={0}
                                    />
                                </div>
                            </div>

                        </div>

                    }


                </div>
            </div>
        </div>
    )
}

export default JobSearch