import React, { useState, useEffect } from 'react';
import './contact.css';
// import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";
import HeaderComponent from '../../newComponents/OtherPagesHeader/HeaderComponent';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"
import { BsTelephone } from "react-icons/bs";
import Faqs from '../ourstory/faqs/faq';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contact() {
  const ref = React.useRef();

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, [])

  // const navigate = useNavigate()
  const initialValue = {
    fullName: "",
    message: "",
    email: "",
  }
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const clearValues = () => {
    console.log("Initial", initialValue)
    setValues(initialValue)
    ref.current.reset();
  }
  console.log('VALUES', values);
  // get input values
  const handleChange = (ev) => {
    setValues({
      ...values,
      [ev.target.name]: ev.target.value,
    });
  };


  // handle errors
  const handleError = (targets) => {
    let errorsValue = {};
    if (!targets.fullName) errorsValue.fullName = "Name is required";
    if (!targets.message) errorsValue.message = "Type  a message";
    if (!targets.email) errorsValue.email = "Email  is required";
    else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

    if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
    else setErrors({});

    return Object.keys(errorsValue).length;

  };

  // submit form
  const submitForm = async (ev) => {
    ev.preventDefault();
    let v = handleError(values);
    setSuccessMessage(false)
    setSubmitError(false)
    // check if there is any eror available and handle here 
    if (v > 0) {
      console.log("error");
      setLoading(false)
    }
    else {
      sendEmail(ev);
      // navigate('/form_success');
    }
  };
  function sendEmail(ev) {
    setLoading(true)
    emailjs.sendForm(
      'service_w9bmuq7',
      'template_pngutyh',
      ev.target,
      'aDa4G9MvkUKU8oiBk'
    ).then(res => {
      setLoading(false)
      setSuccessMessage(true)
      setSubmitError(false)
      clearValues();
    }).catch(err => {
      setLoading(false);
      setSubmitError(true)
      setSuccessMessage(false)
      console.log(err)
    })
  }


  return (
    <div>
      <HeaderComponent title='Contact Us' />
      <div className='newContactSection'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pageSubtitle' data-aos="fade-in">Contact Us</div>
              <h1 className='pageTitle' data-aos="fade-in">Contact us for Expert Guidance</h1>
              <div className='text'>
                We believe that informed clients make better decisions. As part
                of our service, we'll provide educational resources and workshops to help.
              </div>
              <div className='contactWrapper'>
                <div className='content' data-aos="fade-right">
                  <span>
                    <FaEnvelope className='icon' />
                  </span>
                  <div className='text'>
                    <p>Send us an  Email</p>
                    <a href="mailto:genesisemploymentsolution@gmail.com" target="_blank" rel="noopener noreferrer" className='link'>Click Here</a>
                  </div>
                </div>

                <div className='content' data-aos="fade-right">
                  <span>
                    <BsTelephone className='icon' />
                  </span>
                  <div className='text'>
                    <p>Give us a Call</p>
                    <a href="tel:+16137777011">+1 (613) 777-7011</a>
                  </div>
                </div>

                <div className='content' data-aos="fade-right">
                  <span>
                    <FaLinkedinIn className='icon' />
                  </span>
                  <div className='text'>
                    <p>Connect with us on Linkedin</p>
                    <a href="https://www.linkedin.com/company/ges-genesis-employment-solutions/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className='link'>Connect With Us</a>
                  </div>
                </div>

                <div className='content' data-aos="fade-right">
                  <span>
                    <FaTwitter className='icon' />
                  </span>
                  <div className='text'>
                    <p>Connect with us on Twitter</p>
                    <a href="https://www.twitter.com/@ThinkGES/" target="_blank" rel="noopener noreferrer" className='link'>Connect With Us</a>
                  </div>
                </div>

                <div className='content' data-aos="fade-right">
                  <span>
                    <FaInstagram className='icon' />
                  </span>
                  <div className='text'>
                    <p>Connect with us on Instagram</p>
                    <a href="https://www.instagram.com/genesisemploymentsolution/" target="_blank" rel="noopener noreferrer" className='link'>Connect With Us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='contact-formdetails' data-aos="fade-left">
                <form onSubmit={submitForm} ref={ref}>
                  <div className='row'>
                    {successMessage && <div className='successMessage'>
                      <div className='text'>Form submitted successfully</div>
                    </div>
                    }
                    {submitError && <div className='submitError'>
                      <div className='text'>Form not submitted </div>
                    </div>
                    }
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-form">
                        <label>Full Name <span>*</span></label>
                        <input type="text" id="" name="fullName" placeholder="FullName" className="inputfield" onChange={handleChange} />
                        {errors ? <p className='error'> {errors.fullName}</p> : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-form">
                        <label>Email<span>*</span></label>
                        <input type="email" id="" name="email" placeholder="Email" className="inputfield" onChange={handleChange} />
                        {errors ? <p className='error'> {errors.email}</p> : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-form">
                        <label>Message <span>*</span></label>
                        <textarea id="" name="message" placeholder="message" className="textarea" rows="4" onChange={handleChange}></textarea>
                        {errors ? <p className='error'> {errors.message}</p> : ""}
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      {loading ? <>
                        <button type="submit" value="Submit" className="pageButton" >
                          <span className="spinner-grow spinner-grow-sm text-info" role="status" style={{ marginRight: '10px' }}>
                          </span>
                          Submitting...
                        </button>
                      </> :
                        <button type="submit" value="Submit" className="pageButton" >Submit</button>
                      }
                    </div>
                    {successMessage && <div className='successMessage'>
                      <div className='text'>Form submitted successfully</div>
                    </div>
                    }
                    {submitError && <div className='submitError'>
                      <div className='text'>Form not submitted </div>
                    </div>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* faqSession */}
        <Faqs />
      </div>
      {/* <div className='contactpage'>
        <div className='container'>
          <h1>Contact us</h1>
          <div className='row'>
            <div className='col-lg-7  col-md-7 col-sm-12 order-lg-2 order-md-2'>
              <div className='contact-formdetails'>
                <form onSubmit={submitForm}>
                  <div className='row'>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-form">
                        <label>Full Name <span>*</span></label>
                        <input type="text" id="" name="fullName" placeholder="FullName" className="inputfield" onChange={handleChange} />
                        {errors ? <p className='error'> {errors.fullName}</p> : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-form">
                        <label>Email<span>*</span></label>
                        <input type="email" id="" name="email" placeholder="Email" className="inputfield" onChange={handleChange} />
                        {errors ? <p className='error'> {errors.email}</p> : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-form">
                        <label>Message <span>*</span></label>
                        <textarea id="" name="message" placeholder="message" className="textarea" rows="4" onChange={handleChange}></textarea>
                        {errors ? <p className='error'> {errors.message}</p> : ""}
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <input type="submit" value="Submit" className="submitButton" />

                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='col-lg-5 col-md-5 col-sm-12 order-lg-1 order-md-1'>
              <div className='contact-details'>
                <div className='getintouch'>
                  <div className='title'>Get In Touch</div>
                  <a href="mailto:genesisemploymentsolution@gmail.com" target="_blank" rel="noopener noreferrer" className='link'>Email</a>
                  <a href="https://www.linkedin.com/company/ges-genesis-employment-solutions/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className='link'>Linkedin</a>
                  <a href="https://www.instagram.com/genesisemploymentsolution/" className='link' target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://www.twitter.com/@ThinkGES/" className='link' target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Contact