import React from 'react';
import './App.css';
import Router from './components/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/footer';
// import Newnav from './components/Newnav/Newnav';
import Navbar from './newComponents/Navbar/Navbar';
import { PopupWidget } from "react-calendly";



function App() {

  return (
    <div className="App">
      <Navbar />
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
