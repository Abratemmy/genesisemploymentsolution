import React from 'react';
import Otherpage from './otherpage/otherpage';
import {HashLink as Link} from "react-router-hash-link";

function Internship() {
  return (
    <div>
        <div className='internship-bg'>
            <Otherpage title="Internship Package" /> 
        </div>

        <div className='otherbackground'>
            <div className='container'>
              <div className='innerbackground'>
                <div className='service-content'>
                    <p>
                    An internship is a short-term work experience offered by companies and other organizations for people—usually
                     students, but not always—to get some entry-level
                     exposure to a particular industry or field. It is as much of a learning experience as it is work.
                    </p>
                    <p>Why is GES Internship Important?
                      <ul>
                        <li>We offer you the chance to not just build relevant
                           skills and learn about the field, but to demonstrate those skills and industry acumen on the job.
                        </li>

                        <li>You’ll not only gain real work experience, but also meet and learn from the pros. And you’ll
                           start to build your own network, from your fellow interns to seasoned leaders.</li>
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
                  <img src="https://res.cloudinary.com/hayteetech/image/upload/v1651313692/Joyagunbiade.com/internship_b6iqk3.jpg" alt="services" />
                </div>

                </div>
            </div> 
        </div>
    </div>
  )
}

export default Internship