import React, { useState } from 'react';
import "./faq.scss"

function Faqs(index) {
    const [faqs, setfaqs] = useState([
        {
            question: 'What type of consulting do you offer?',
            answer: "We are into Human Resources Consulting",
            open: false
        },

        {
            question: 'What sets GES apart?',
            answer: "Our consulting process involves four key steps: Discovery, Strategy, Implementation, and Sustainment. We start by understanding your challenges and goals, then craft a customized strategy.",
            open: false
        },

        {
            question: 'Who are our ideal client?',
            answer: "At GES we strive for the uttermost best for clients in specific industries such as the Tech space, Healthcare and Engineering roles. Our background comes from working with many prestigious brands like Opencare, The Ottawa Hospital, Sick Kids, Air Canada etc",
            open: false
        },

        // {
        //     question: 'How do I get a job with GES?',
        //     // answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        //     open: false
        // },
        // {
        //     question: 'What kind of benefits do you offer?',
        //     // answer:' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
        //     // answer1:'We are commercially savvy and are not so strict as not to give you practical tips here and there, to help you stand upright, in your business.',
        //     open: false
        // },

        {
            question: "How many months does your Internship program last?",
            answer: "It last up to 3 months",
            open: false
        },
        {
            question: "Is there a fee? ",
            answer: "Please speak to a consultant to get a quote",
            open: false
        },


    ]);


    const toggleFAQ = (index) => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }

            return faq;
        }))
    }
    return (
        <div className='aboutFaqSession'>
            <div className='container'>
                <div className='pageSubtitle' style={{ width: 'fit-content' }}>FAQs</div>
                <h1 className='pageTitle'>Frequently Asked Questions</h1>
                <div className="text">
                    Some of the Frequently Asked Questions that can help you know more about us
                </div>
                {/* faq session */}
                <div className="row">
                    <div className="row faqs" >
                        {faqs.map((faq, i) => (
                            <div className='col-lg-6'>
                                <div className="faq">
                                    <div className={faq.open ? 'open' : ''} key={index} onClick={() => toggleFAQ(i)}>
                                        <div className="faq-question" >
                                            {faq.question}
                                        </div>

                                        <div className="faq-answer">
                                            {faq.answer}
                                            <div className="remaining-answer" >

                                                <div style={{ marginTop: '20px' }}>{faq.answer1}</div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>


                </div>
            </div>
        </div>

    )
}

export default Faqs
