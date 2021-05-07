import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import About from  './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Router>
      <div className='siteSubtitle'>THE AMAZING WEBSITE OF</div>
        <div className='siteTitle'><Link to='/'>JACK LECROY</Link></div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
      </Router>
      <div className='copyrightSection'>© 2021 Jack LeCroy</div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
