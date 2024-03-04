import React from 'react';
import careerimg from "../../image/careerimg.jpg";
import {HashLink as Link} from "react-router-hash-link";

function Career() {
  return (
    <div>
        <div className='career-bg'>
            <h1>Career Management</h1>
        </div>

        <div className='otherbackground'>
            <div className='container'>
              <div className='innerbackground'>
                <div className='service-content'>
                    <p>
                    Career Management is a life-long process of investing resources to accomplish your future career goals.
                     It is a continuing process that allows you to adapt to the changing demands of our dynamic economy. 
                    </p>
                    <p>GES career management process embraces various concepts: 
                      <ul>
                        <li>Self awareness</li>
                        <li>Career Exploration</li>
                        <li>Life-long learning</li>
                        <li>Networking</li>
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
                  <img src={careerimg} alt="services" />
                </div>

                {/* another section */}
                
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Career