import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

function Employerform() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
		fullName: "",
		email:"",
        company:"",
        number:"",
        companysize:"",
        message:"",
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
		if (!targets.fullName) errorsValue.fullName = "Name is required";
        if (!targets.company) errorsValue.company = "Comapany name is required";
        if (!targets.number) errorsValue.number = "Phone number is required";
        if (!targets.companysize) errorsValue.companysize = "Company size is required";
        if (!targets.message) errorsValue.message = "Type a message";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
		
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
            'service_w9bmuq7',
            'template_pngutyh', 
            ev.target,
            'aDa4G9MvkUKU8oiBk'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err))
    }

  return (
    <div className='Employerform'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className=''>
                        <h1>Step into the new world of emerging talent</h1>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <form onSubmit={submitForm}>
                        <div className="contact-form">
                            <label>Full Name <span>*</span></label>
                            <input type="text" id="" name="fullName" className="inputfield" onChange={handleChange}/>
                            {errors ? <p className='error'> {errors.fullName }</p>: ""}
                        </div>

                        <div className="contact-form">
                            <label>Email <span>*</span></label>
                            <input type="email" id="" name="email" className="inputfield" onChange={handleChange}/>
                            {errors ? <p className='error'> {errors.email}</p>: ""}
                        </div>

                        <div className="contact-form">
                            <label>Company <span>*</span></label>
                            <input type="text" id="" name="company" className="inputfield" onChange={handleChange}/>
                            {errors ? <p className='error'> {errors.company }</p>: ""}
                        </div>

                        <div className="contact-form">
                            <label>Phone number <span>*</span></label>
                            <input type="figure" id="" name="number" className="inputfield" onChange={handleChange}/>
                            {errors ? <p className='error'> {errors.number }</p>: ""}
                        </div>

                        <div className="contact-form">
                            <label>Company size <span>*</span></label>
                            <input type="text" id="" name="companysize" className="inputfield" onChange={handleChange}/>
                            {errors ? <p className='error'> {errors.companysize }</p>: ""}
                        </div>

                        <div className="contact-form">
                            <label>Message <span>*</span></label>
                            <textarea id="" name="message"className="textarea" rows="4" onChange={handleChange}></textarea>
                            {errors ? <p className='error'> {errors.message }</p>: ""}
                        </div>

                        <div className="">
                            <input type="submit" value="Submit"   className="submitButton"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employerform