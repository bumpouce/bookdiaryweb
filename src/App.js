import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import './App.css';
import Body from './Body.js'
import Navigation from './NavBar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
