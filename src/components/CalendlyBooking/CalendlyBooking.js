import React, { useState } from 'react'
import { PopupButton, PopupModal } from 'react-calendly';


function CalendlyBooking({ buttonName }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                style={{}}
                onClick={() => setOpen(true)}
                className='pageButton'
            >
                {buttonName}
            </button>
            <PopupModal
                url="https://calendly.com/gesconsulting/consult"
                onModalClose={() => setOpen(false)}
                open={open}
                rootElement={document.getElementById("root")}
            />
        </div>
    )
}

export default CalendlyBooking