import React, { Component } from 'react';
import './Home.css';
import Typical from 'react-typical';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import Homeservice from './homeservice';
import { FaHotel } from 'react-icons/fa';
import { MdSatellite, MdOutlineHomeWork, MdContactMail } from "react-icons/md"
import Testimony from './testimony';

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: false,
    }
  }
  componentDidMount() {
    this.setState({
      loading: true,
    })
    return fetch(`https://joyagunbiadeserver.onrender.com/gesfeedback`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className='homepage'>
        <section className="home-banner">
          <div className='container'>
            <div className='home-banner-content'>
              <h3>Welcome to</h3>
              <h1>Genesis <span>Employment</span> Solutions</h1>
              <p>{' '}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  className="typical"
                  steps={[
                    '...the beginning of a superior workforce ',
                    3000,
                    'A place where we connect great people with job opportunity',
                    3000
                  ]}
                />
              </p>
            </div>
          </div>

        </section>

        <section className='home-content'>
          <div className='container'>
            <div className='home-title' >Alarming underemployment rate</div>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='home-col'>
                  Recent immigrants to Canada have been more affected than the Canadian-born population by changes in employment
                  resulting from the economic downturn caused by the pandemic, according to a recent Statistics Canada study
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='home-col'>
                  The increase in the rate of people who transitioned to unemployment was much more significant for recent immigrants,
                  reaching a peak of 17.3% compared to 13.5% for the Canadian-born and long-term immigrants during the month of April.
                </div>
              </div>

              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='home-col'>
                  While finding a job in Canada is not easy, it is possible. A job offer from a Canadian employer
                  can significantly increase your chance of receiving an invitation to apply for permanent residence.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='whowearepage'>
          <div className='whoweare'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-12'></div>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                  <h1>Who are We ?</h1>
                  <p> Genesis Employment Solutions is an HR Consulting firm that
                    helps start ups outsource their HR functions and Hiring needs. We have a track record of supporting the
                    Opencare HR team,
                    as well as immigrants at a time where the business required external resources and expertise.
                  </p>
                  <div className='findout'>
                    <NavLink to="/our_story" className="nav">
                      Find out more
                    </NavLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='whyweareright'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-10 col-md-10 col-sm-12'>
                  <h1>Who are our clients?</h1>

                  <p style={{ paddingTop: '20px' }}>
                    At GES we strive for the uttermost best for clients in specific industries such as the Tech space, Healthcare and Engineering roles and STEM.

                    Our background comes from working with many prestigious brands like Opencare, The Ottawa Hospital, Sick Kids, Air Canada etc
                  </p>
                  <div className='whyweareright-nav'>
                    <div className='row'>
                      <div className='col-lg-3 col-md-3 col-sm-10'>
                        <NavLink to="/contact_us" className="nav">
                          Contact us
                        </NavLink>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-12'></div>
              </div>
            </div>
          </div>

        </section>

        <section className='home-services'>
          <div className='container'>
            <div className='home-title' >Our services</div>
            <Homeservice />
          </div>
        </section>

        <section className='home-testimony'>
          <div className='firsttestimony-section'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <div className='firsttestimony-content'>
                    <FaHotel className="firsttestimony-icon" />
                    <p>Let us help you with your hiring needs</p>
                    <NavLink to="/contact_us">Contact us</NavLink>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <div className='firsttestimony-content'>
                    <MdSatellite className="firsttestimony-icon" />
                    <p>Join our community and together we build a future</p>
                    <a href="https://t.me/+uTSXvwHtSBxhZGVh" className='firsttestimony-nav'>Click here</a>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <div className='firsttestimony-content'>
                    <MdContactMail className="firsttestimony-icon" />
                    <p>Send an email to have a connection with us</p>
                    <a href="mailto:genesisemploymentsolution@gmail.com" target="_blank" rel="noopener noreferrer" className='firsttestimony-nav'>Email</a>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <div className='firsttestimony-content'>
                    <MdOutlineHomeWork className="firsttestimony-icon" />
                    <p>Connect with us on Linkedin</p>
                    <a href="https://www.linkedin.com/company/ges-genesis-employment-solutions/about/?viewAsMember=true" className='firsttestimony-nav'>Linkedin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=''>
            <Testimony />
          </div>
        </section>
      </div>
    )
  }
}

export default Home