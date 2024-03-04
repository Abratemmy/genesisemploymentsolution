import React, {useState} from 'react';
import "./getstarted.css";
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

function Getstarted() {

    const navigate = useNavigate()
	const [values, setValues] = useState({
		firstname: "",
        lastname:"",
		email:"",
        linkedin:"",
        expectations:"",
        package:"",
        income:"",
        legal:"",
	});
	const [errors, setErrors] = useState({});

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
		if (!targets.firstname) errorsValue.firstname = "First Name is required";
        if (!targets.lastname) errorsValue.lastname = "Last name is required";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (!targets.linkedin) errorsValue.linkedin = "Your Linkedin url is required";

        if (!targets.expectations) errorsValue.expectations = "Type your expectations for this program";

        if (!targets.package) errorsValue.package = "What package do you want";

        if (!targets.income) errorsValue.income = "Your expected income is required";

        if (!targets.legal) errorsValue.legal= "Choose a button";
		
		if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
		else setErrors({});

		return Object.keys(errorsValue).length;

	};

	// submit form
	const submitForm = async (ev) => {
		ev.preventDefault();
		let v = handleError(values);

		// check if there is any eror available and handle here 
		if (v > 0) console.log("error");
		//submit form here if no error availble
		else {
            sendEmail(ev);
            navigate('/form_success');
            console.log("submitted");
        }
	};
    function sendEmail(ev){
        emailjs.sendForm(
            'service_e9j11o4',
            'template_flfta0r', 
            ev.target,
            'aDa4G9MvkUKU8oiBk'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err))
    }


  return (
    <div className='getstarted'>
        <div className='getstarted-banner'>
            <h1>Now Let’s Get You Settled Into A Professional Job</h1>
        </div>

        <div className='container'>
            <div className='get-section'>
                <p>Hey there!</p>
                <p className='getp'>We're excited to start this relationship! Here are some of the perks i provide </p>

                <div className='row' >
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='get-column'>
                            <p>Consultation</p>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='get-column'>
                            <p>Perks</p>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='get-column'>
                            <p>Curriculum</p>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='get-column'>
                            <p>Outcome</p>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className='get-form-content'>
            <div className='container' id="employee-form">
                <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>

                <h3 id="booknow">Let's get to work...</h3>

                <h6>Note: I only coach in this industry: Banking sector, Data science</h6>

                <div className='get-form'>
                    <form onSubmit={submitForm}>
                        <div className='row'>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <label>First Name <span>*</span></label>
                                    <input type="text" id="" name="firstname" className="inputfield" onChange={handleChange}/>
                                    {errors ? <p className='error'> {errors.firstname }</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" id="" name="lastname"  className="inputfield" onChange={handleChange}/>
                                    {errors ? <p className='error'> {errors.lastname }</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <label>Email<span>*</span></label>
                                    <input type="email" id="" name="email" className="inputfield" onChange={handleChange}/>
                                    {errors ? <p className='error'> {errors.email }</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <label>LinkedIn Profile URL<span>*</span></label>
                                    <input type="url" id="" name="linkedin" className="inputfield" onChange={handleChange}/>
                                    {errors ? <p className='error'> {errors.linkedin }</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <label>What's are your expectations with this program? <span>*</span></label>
                                    <textarea id="" name="expectations"  className="textarea" rows="4" onChange={handleChange}></textarea>
                                    {errors ? <p className='error'> {errors.expectations}</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form contact-form-radio">
                                    <div className='label'>Select a package <span>*</span></div>

                                    <div className='' style={{paddingLeft:"15px"}}>
                                        <input type="radio" id="linkedin" name="package" value="LINKEDIN" onChange={handleChange}/>
                                        <label htmlFor="linkedin">Linkedin</label><br/>

                                        <input type="radio" id="resume" name="package" value="RESUME" onChange={handleChange}/>
                                        <label htmlFor="resume">Resume</label><br/>

                                        <input type="radio" id="internship" name="package" value="INTERNSHIP" onChange={handleChange}/>
                                        <label htmlFor="internship">Internship</label> <br />

                                        <input type="radio" id="career" name="package" value="CAREER" onChange={handleChange}/>
                                        <label htmlFor="career">Career Management</label> <br />

                                        <input type="radio" id="employment" name="package" value="EMPLOYMENT" onChange={handleChange}/>
                                        <label htmlFor="employment">Employment</label> <br />

                                    </div>
                                    {errors ? <p className='error'> {errors.package }</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <label>What's your ideal income?  <span>*</span></label>
                                    <input type="text" id="" name="income" className="inputfield" onChange={handleChange}/>
                                    {errors ? <p className='error'> {errors.income }</p>: ""}
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                {/* <div className="contact-form">
                                    <label>Paste your resume here <span>*</span></label>
                                    <input type="file"id="myFile"  name="resume" className="inputfieldfile" onChange={handleChange}/>
                                    {errors ? <p> {errors.resume }</p>: ""}
                                </div> */}
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form contact-form-radio">
                                    <div className='label'>I have a legal work authorization (work permit, permanent residence, citizenship)in Canada <span>*</span></div>
                                    <div className='' style={{paddingLeft:"15px"}}>
                                        <input type="radio" id="yes" name="legal" value="YES" onChange={handleChange}/>
                                        <label htmlFor="yes">Yes</label><br/>

                                        <input type="radio" id="no" name="legal" value="NO" onChange={handleChange}/>
                                        <label htmlFor="no">No</label><br/>
                                        {errors ? <p className='error'> {errors.legal }</p>: ""}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <label>Anything else you'd like me to know?</label>
                                    <textarea id="" name="expectation"  className="textarea" rows="4" onChange={handleChange}></textarea>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
								<input type="submit" value="Submit"   className="submitButton"/>
                            </div>

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getstarted