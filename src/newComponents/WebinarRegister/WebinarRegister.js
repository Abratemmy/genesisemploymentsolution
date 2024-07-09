import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import './WebinarRegister.scss'

function WebinarRegister({ closeToggle }) {

    const [isMobile, setIsMobile] = useState(false)
    const mobileWidth = window.innerWidth

    const handleResize = () => {
        if (window.innerWidth < 770) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className='WebinarRegister'>
            <div className='webinarWrapper' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    <div className='pageSubHeading'>Resume Writing Webinar</div>

                    <button onClick={() => closeToggle(false)}>
                        <IoMdClose className='icon' />
                    </button>
                </div>
                <div className='datetime'>
                    Date: <span>July 27th, 2024</span>
                    Time: <span>2pm - 3pm EST or 7pm - 8pm WAT</span>
                </div>
                <div className='googleForm'>
                    {isMobile ?
                        <iframe title="Use chatGPT for Job Search" src="https://docs.google.com/forms/d/e/1FAIpQLSe-LGx4H4zQtiaaiKKxx0Ws9r4SAvvBbP5zfekzl8g-2vcmZw/viewform?embedded=true" width={mobileWidth} height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        :
                        <iframe title="Use chatGPT for Job Search" src="https://docs.google.com/forms/d/e/1FAIpQLSe-LGx4H4zQtiaaiKKxx0Ws9r4SAvvBbP5zfekzl8g-2vcmZw/viewform?embedded=true" width="600" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    }

                </div>
            </div>
        </div>
    )
}

export default WebinarRegister