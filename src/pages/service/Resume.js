import React from 'react'
import Otherpage from './otherpage/otherpage';
import resume from '../../image/resumeinner.jpg';
import { HashLink as Link } from 'react-router-hash-link';

function Resume() {
  return (
    <div>
        <div className='back'>
            <Otherpage title="Resume Package" />  
        </div>

        <div className='otherbackground'>
            <div className='container'>
              <div className='innerbackground'>
                <div className='service-content'>
                    <p>
                    Resume is a formal document that provides an overview of your professional
                     qualifications, including your relevant work experience, skills, education, and notable accomplishments.
                     Usually paired with a cover letter, a resume helps you demonstrate your abilities and convince employers you’re qualified and hireable.
                    </p>
                    <p>On a base level, a resume is made up of the following five parts:
                      <ul>
                        <li>Contact details</li>
                        <li>Introduction</li>
                        <li>Educational background</li>
                        <li>Work history</li>
                        <li>Relevant skills</li>
                      </ul>
                     </p>
                     <p>GES will help you to design your Resume in a format that shows your ability to provide 
                       a full overview of your peofessional history</p>

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
                  <img src={resume} alt="services" />
                </div>

                
              </div>
            </div> 
        </div>
        
    </div>
  )
}

export default Resume