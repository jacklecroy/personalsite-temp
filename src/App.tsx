import React from 'react';
import './App.css';
import Navigation from './Navigation';
import About from  './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
      <div>
            <Router>
            <Navigation title="Jack LeCroy"></Navigation>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            </Router>
      </div>
    );
}

export default App;
