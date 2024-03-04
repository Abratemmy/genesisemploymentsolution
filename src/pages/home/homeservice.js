import React, { Component } from 'react';
import Slider from 'react-slick';
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr"
import { NavLink } from 'react-router-dom';

export class Homeservice extends Component {
    constructor(props) {
        super(props)
    
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
  render() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      };
    return (
      <div>
          <Slider ref={c => (this.slider = c)} {...settings} className='homeslider'>
          <div className='content-slider'>
                <div className='image-slider'>
                    <NavLink to="/employment_services">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1649874879/Joyagunbiade.com/employmenttt_k78tw8.jpg" alt='serviceimage' />
                    </NavLink>
                    <h1>Employment</h1>
                </div>
                <p>This is an agreement between an individual and another entity that stipulates
                     the responsibilities, payment terms,rules of the workplace, and is recognized by the government.
                </p>
          </div>

          <div className='content-slider'>
                <div className='image-slider image-slider1'>
                    <NavLink to="/resume_services">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1649875017/Joyagunbiade.com/resume_h4ie2j.jpg" alt='serviceimage' />
                    </NavLink>
                    <h1>Resume</h1>
                </div>
                <p>This is a formal document that provides an overview of your professional qualifications,
                     including your relevant work experience, skills, education, and notable accomplishments.
                </p>
          </div>

          <div className='content-slider'>
                <div className='image-slider'>
                    <NavLink to="/linkedin_services">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1649874908/Joyagunbiade.com/intership_umosdr.jpg" alt='serviceimage'  />
                    </NavLink>
                    <h1>Linkedin</h1>
                </div>
                <p>LinkedIn is the world's largest professional network on the internet.
                    We use LinkedIn to find the right job or internship, connect and strengthen professional relationships,
                </p>
          </div>

          <div className='content-slider'>
                <div className='image-slider image-slider1'>
                    <NavLink to="/internship_services">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1651313692/Joyagunbiade.com/internship_b6iqk3.jpg" alt='serviceimage' />
                    </NavLink>
                    <h1>Internship</h1>
                </div>
                <p>This is a short-term work experience offered by GES
                    for people—usually students, but not always— to get some entry-level exposure to a particular industry or field. 
                </p>
          </div>

          <div className='content-slider'>
                <div className='image-slider'>
                    <NavLink to="/career_management">
                        <img src="https://res.cloudinary.com/hayteetech/image/upload/v1651313909/Joyagunbiade.com/careerplan_twpcvp.jpg" alt='serviceimage' />
                    </NavLink>
                    <h1>Career Plan</h1>
                </div>
                <p>Career Management is a life-long process of investing resources to accomplish your future career goals.
                </p>
          </div>

        </Slider>

        <div className='homeservice-icon'>
            <button className="button" onClick={this.previous}>
                <GrFormPrevious className="react-icon" />
            </button>
            <button className="button" onClick={this.next}>
                <MdNavigateNext className="react-icon react-icon1"/>
            </button>
        </div>
      </div>
    )
  }
}

export default Homeservice