import React, { useState } from 'react';
import './NewsLetter.scss'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsEnvelopePaperFill } from "react-icons/bs";

// interface SubscriberDetails{
//     email_address: string;
// }
function NewsLetter() {
    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('')
    //     useState < SubscriberDetails | null > (null);
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        if (!email) {
            setEmailErrorMessage('Email is required');
        } else {
            const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
            if (!emailRegex.test(email)) {
                setEmailErrorMessage('Invalid email address');
            } else {
                setEmailErrorMessage('');
            }
        }
    };

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        validateEmail(email)

        try {
            setLoading(true)
            const response = await fetch(`https://joyagunbiadeserver.onrender.com/addSubscriber`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            })

            const data = await response.json()

            if (data.error) {
                setErrorMessage(data.error);
                setSuccessMessage('')
                return;
            }
            console.log("data", data)
            setSuccessMessage(data)
            setErrorMessage('')
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            } else {
                throw new Error('There was an unknown error')
            }

        } finally {
            setLoading(false)
            setEmail('')
        }


    }

    const dismissMessage = () => {
        setErrorMessage('')
        setSuccessMessage('');
    }
    return (
        <div className='newsLetterContainer'>
            <div className='container'>
                <div className='newsLetterCard'>
                    <div className='imageIcon'>
                        <BsEnvelopePaperFill className="icon" />
                    </div>
                    <h3>Subscribe to our Newsletter!</h3>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="d-flex">
                            <label htmlFor="email">Email Address</label>
                            <p>{emailErrorMessage}</p>
                        </div>
                        <input
                            className={`${emailErrorMessage ? 'danger' : ''}`}
                            value={email}
                            type="text"
                            id="email"
                            onChange={handleEmailChange}
                            placeholder="email@company.com"
                        />
                        <br />
                        <div className='submitButton'>
                            <button type="submit" disabled={loading} className='pageButton'>
                                {loading ? 'Loading...' : 'Subscribe'}
                            </button>
                        </div>
                    </form>
                </div>


                {(successMessage !== '' || errorMessage) && (
                    <div className="newsLetterMessage">
                        <div className='message'>
                            <>
                                {successMessage ? (
                                    <div className="success-msg">
                                        <IoIosCheckmarkCircle className='icon' />
                                        <h3>Thanks for subscribing!</h3>
                                        <p>
                                            <strong>{successMessage.email_address} </strong> has just
                                            been added to our subscribed lists. So stay tuned for more
                                            update.

                                        </p>
                                    </div>
                                ) :
                                    (
                                        <div className="err-msg">
                                            <p>
                                                You are already added to our waitlist. So stay tuned for more
                                                update
                                            </p>
                                        </div>
                                    )}
                            </>



                            <button onClick={dismissMessage} className="dismiss-btn pageButton">
                                Dismiss Message
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default NewsLetter