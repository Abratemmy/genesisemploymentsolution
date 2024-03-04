import React, {useState} from 'react';
import "./otherfaq.css";

function OtherFaqs(index) {
    const [faqs,setfaqs] = useState([

        {
            question:"Why hire me?",
            answer:"We bring a professional touch to a greater level of competitiveness. In a market where multiple individuals want what you want, a great differentiator is having GES support you throughout that journey with all the resources that we have access to. ",
            answer1:"If you are looking for a way to set the bar high and maximize your benefits, we are willing to work with you!",
            open:false
        },
        {
            question:"Who are our clients?",
            answer:"At GES we strive for the uttermost best for clients in specific industries such as the Tech space, Healthcare and Engineering roles and STEM. ",
            answer1:"Our background comes from working with many prestigious brands like Opencare, The Ottawa Hospital, Sick Kids, Air Canada etc",
            open:false
        },
         

    ]);


    const toggleFAQ = (index) => {
        setfaqs (faqs.map((faq, i)=>{
            if (i === index){
                faq.open = !faq.open
            }
            else{
                faq.open =false;
            }

            return faq;
        }))
    }
    return (
        <div className="faq-container ">            
            <div className="servicefaqs" >
                {faqs.map((faq, i) =>(
                    <div className="faq">
                    <div className={faq.open ? 'open' :'' } key={index} onClick = {() => toggleFAQ(i)}>
                        <div className="faq-question" >
                            {faq.question}
                        </div>

                        <div className="faq-answer">
                            {faq.answer}
                        <div className="remaining-answer" >

                            <div style={{marginTop:'20px'}}>{faq.answer1}</div>
                    
                        </div>
                    </div>

                    </div>
                    
                    </div>
                ))}

            </div>
      
            
        </div>
    )
}

export default OtherFaqs
