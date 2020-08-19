import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import logo from './bookdiary.png';
import './App.css';
import Body from './Body.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* className="App-logo"  */}
        <img src={logo} alt="logo" /> 
        <Body />
      </header>
    </div>
  );
}

export default App;
