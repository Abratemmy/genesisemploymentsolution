import React, { useEffect } from 'react';
import Faqs from './faqs/faq';
import './ourstory.scss';
import HeaderComponent from '../../newComponents/OtherPagesHeader/HeaderComponent';
import consultant1 from '../../image/standout.png';
import { SiConsul, SiGooglesearchconsole, SiConstruct3 } from "react-icons/si";
import pattern1 from '../../image/pattern1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ourstory() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, [])
  return (
    <div className=''>
      <HeaderComponent title='About Us' />
      <div className='newAboutSession'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='image'>
                <img src={consultant1} alt="" data-aos="fade-right" />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='contentWrapper'>
                <div className='pageSubtitle' data-aos="fade-in" >About Us</div>
                <h1 className='pageTitle' data-aos="fade-left">Who We Are</h1>
                <div className='text first' data-aos="fade-left">
                  Genesis Employment Solutions is an HR Consulting firm that helps
                  start ups outsource their HR functions and Hiring needs. We have a track record of supporting the Opencare HR team,
                  as well as immigrants at a time where the business required external resources and expertise
                </div>
                <div className='text' data-aos="fade-left">
                  We provides a comprehensive service that identifies the role requirements in the organization and designs the job description and skill requirements for that role. We work towards creating a positive work environment, fostering employee growth,
                  and aligning HR practices with the broader goals of the organization
                </div>

                <div className="vision" data-aos="fade-up">
                  <span><SiConsul className='icon' /></span>
                  <div className='content'>
                    <div className='title'>Our Vision</div>
                    <div className='text'>
                      To be the leading global specialist staffing group in our chosen sectors.
                    </div>
                  </div>
                </div>
                <div className="vision" data-aos="fade-up">
                  <span><SiGooglesearchconsole className='icon' /></span>
                  <div className='content'>
                    <div className='title'>Our Mission</div>
                    <div className='text'>
                      Extending better opportunities to black youth.
                    </div>
                  </div>
                </div>
                <div className="vision" data-aos="fade-up">
                  <span><SiConstruct3 className='icon' /> </span>
                  <div className='content'>
                    <div className='title'>Our Values</div>
                    <div className='text'>
                      Our values are KIND: Kindness. Integrity. Newness. Discipline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="BenefitSession">
        <img src={pattern1} alt="" />
        <div className='container'>
          <div className='pageSubtitle' data-aos="fade-in" style={{ width: 'fit-content' }}>Benefit</div>
          <h1 className='pageTitle' data-aos="fade-in">Our Client Benefits</h1>

          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='sectionabout' data-aos="fade-up">
                <h4>Mindset Change</h4>
                What consumes your mind, controls your life. We help you to think in the very positive way.

              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='sectionabout' data-aos="fade-up">
                <h4>Development</h4>
                All growth depends upon activity. We put in effort to make you grow both physically and intellectually.

              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='sectionabout' data-aos="fade-up">
                <h4>Networking</h4>
                We are not just connecting people, we connect people with people with ideas and opportunities.

              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='sectionabout' data-aos="fade-up">
                <h4>Social Interaction</h4>
                We build model manners like Cooperation, Accommodation, Competition, Conflict e.t.c

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faqs session */}
      <Faqs />

      {/* <div className='aboutpage'>
        <div className='aboutbg'>
          <div className='container'>
            <h1>About us</h1>
            <p>Genesis Employment Solutions is an HR Consulting firm that helps
              start ups outsource their HR functions and Hiring needs. We have a track record of supporting the Opencare HR team,
              as well as immigrants at a time where the business required external resources and expertise
            </p>

            <div className='aboutvision'>
              <div className='aboutvisiondiv'><span>Vision:</span> To be the leading global specialist staffing group in our chosen sectors.</div>
              <div className='aboutvisiondiv'><span>Mission:</span> Extending better opportunities to black youth </div>
              <div className='aboutvisiondiv'><span>Values:</span> Our values are KIND: Kindness. Integrity. Newness. Discipline.</div>
            </div>
          </div>
        </div>

        <div className='about-section'>
          <div className='container'>
            <h1>How's this program different?. </h1>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='sectionabout'>
                  <h4>Mindset Change</h4>
                  What consumes your mind, controls your life. We help you to think in the very positive way.
                 
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='sectionabout'>
                  <h4>Development</h4>
                  All growth depends upon activity. We put in effort to make you grow both physically and intellectually.
                 
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='sectionabout'>
                  <h4>Networking</h4>
                  We are not just connecting people, we connect people with people, people with ideas and opportunities.
                  
                </div>
              </div>

              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='sectionabout'>
                  <h4>Social Interaction</h4>
                  We build model manners like Cooperation, Accommodation, Competition, Conflict e.t.c
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='anothersection'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 col-md-5 col-sm-12'>
                <div className='storyfaq'>
                  <h1>FAQs</h1>
                  <p>Some of the Frequently Asked Questions that can help you know more about us</p>
                </div>
              </div>

              <div className='col-lg-7 col-md-7 col-sm-12'>
                <div className='mainfaq'>
                  <Faqs />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}
    </div>

  )
}

export default Ourstory