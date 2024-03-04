import React from 'react';
import "./formsuccess.css"
import {NavLink} from "react-router-dom"

function Formsuccess() {
  return (
    <div className='formsuccess'>
        <div className="container">
          <div className='form-sucess-text'>Thank you! Your request has been submitted successfully</div>

          <div className='booknow'>
              <NavLink to="/" className="booknow-nav">Go to Home</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Formsuccess