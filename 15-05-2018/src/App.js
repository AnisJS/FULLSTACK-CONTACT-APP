import React, { Component } from 'react';
import Contact from './contact.js';
import './App.css';

import {BrowserRouter as Router,Link} from 'react-router-dom';
import Routes from "./Routes.js"


//  put links into a router div 
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Link to = "/Contacts">
        <input type='button' value='Contact List'/>
        </Link>
        <Routes/>
      </div>
      </Router>
    );
  }
}

export default App;
