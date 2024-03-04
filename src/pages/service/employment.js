import React from 'react'
import Otherpage from './otherpage/otherpage';
import {HashLink as Link} from "react-router-hash-link";
import employement from "../../image/employementimg.jpg"

function Employment() {
  return (
    <div>
        <div className='employment-bg'>
            <Otherpage title="Employment Package" />  
        </div>

        <div className='otherbackground'>
            <div className='container'>
              <div className='innerbackground'>
                <div className='service-content'>
                    <p>
                    Employment is an agreement between an individual and another entity that stipulates the 
                    responsibilities, payment terms and arrangement, rules of the workplace, and is recognized by the government.
                    </p>
                    <p>GES will help you:
                      <ul>
                        <li>Look for the perfect job</li>
                        <li>Prepare you for the interview process</li>
                        <li>We will also give you job links so you can make research</li>
                      </ul>
                      
                    </p>

                    <div className='booknow'>
                      <Link smooth to="/get_started/#booknow" className="booknow-nav">Book a Free Consultation Now</Link>
                    </div>

                    <div className='jobsearch' style={{marginTop:"40px"}}>
                      See recent jobs posting from the links below
                      <div className='jobsearch-link'>
                        <a href="https://ca.indeed.com" target="_blank"  rel="noopener noreferrer">Indeed.ca</a>
                        <a href="https://ca.linkedin.com/jobs/linkedin-jobs" target="_blank"  rel="noopener noreferrer">Linkedin-jobs</a>
                      </div>
                    </div>
                </div>

                <div className='service-img'>
                  <img src={employement} alt="services" />
                </div>

              </div>
            </div> 
        </div>
    </div>
  )
}

export default Employment