import React, { useState } from 'react';
import './App.css';
import Router from './components/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/footer';
// import Newnav from './components/Newnav/Newnav';
import Navbar from './newComponents/Navbar/Navbar';
import { PopupWidget } from "react-calendly";
import WebinarRegister from './newComponents/WebinarRegister/WebinarRegister';



function App() {
  const [openWebinar, setopenWebinar] = useState(false);

  const webinarToggle = () => {
    setopenWebinar(true)
  }

  return (
    <div className="App">
      <Navbar />
      <div className='popupWebinarContainer'>
        <button onClick={webinarToggle} className='animate__animated animate__flash animate__infinite animate__slow'>Register for our upcoming Webinar</button>
      </div>
      {openWebinar && (
        <WebinarRegister
          closeToggle={setopenWebinar}
        />
      )}

      <PopupWidget
        url="https://calendly.com/gesconsulting/consult"
        rootElement={document.getElementById("root")}
        text="Click to schedule a meeting wih GES"
        textColor="var(--purpleColor)"
        color="var(--lightYellow)"
      />
      {/* <Newnav/> */}
      <Router />


      <Footer />
    </div>
  );
}

export default App;
