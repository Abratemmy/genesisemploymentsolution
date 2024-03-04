import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './components/scrollToTop';


ReactDOM.render(
  <Router>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


