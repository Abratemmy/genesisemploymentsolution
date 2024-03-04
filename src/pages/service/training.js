import React from 'react';
import Otherpage from './otherpage/otherpage';
import {HashLink as Link} from "react-router-hash-link";
import training from "../../image/training.jpg"

function Training() {
  return (
    <div>
        <div className='training-bg'>
            <Otherpage title="Training Package" /> 
        </div>

        <div className='otherbackground'>
            <div className='container'>
              <div className='innerbackground'>
                <div className='service-content'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>Why do we use it?
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                       The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                      content here', making it look like readable English. Many desktop publishing packages and web page 
                    </p>

                    <div className='booknow'>
                      <Link smooth to="/get_started/#booknow" className="booknow-nav">Book Now</Link>
                    </div>
                </div>

                <div className='service-img'>
                  <img src={training} alt="services" />
                </div>

                {/* another section */}
                <hr className='service-line'/>
                <div className='service-lastsection'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='service-section'>
                            <p>Important</p>
                            <h2>Who should take this class?</h2>
                        </div>
                      </div>

                      <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='service-section'>
                            <p>Must Meet all requirement</p>
                            <ul>
                              <li>Must have at least 2+ years of professional experience</li>
                              <li>Must have at least 2+ years of professional experience</li>
                              <li>Must have at least 2+ years of professional experience</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Training