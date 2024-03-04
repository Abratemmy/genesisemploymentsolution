import React from 'react'
import Otherpage from './otherpage/otherpage';
import {HashLink as Link} from "react-router-hash-link";

function Linkedin() {
  return (
    <div>
        <div className='linkedin-bg'>
            <Otherpage title="Linkedin Package" /> 
        </div>

        <div className='otherbackground'>
            <div className='container'>
              <div className='innerbackground'>
                <div className='service-content'>
                    <p>
                    LinkedIn is the world's largest professional network on the internet. You can use LinkedIn to find the right job or internship, 
                    connect and strengthen professional relationships, and learn the skills you need to succeed in your career.
                    </p>
                    <p>GES will help you:
                     
                    </p>
                    <p>Create a complete LinkedIn profile that can help you connect 
                      with opportunities by showcasing your unique professional story through experience, skills, and education.</p>

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
                  <img src="https://res.cloudinary.com/hayteetech/image/upload/v1649874908/Joyagunbiade.com/intership_umosdr.jpg"alt="services" />
                </div>

                {/* another section */}
                
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Linkedin