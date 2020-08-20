import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import './App.css';
import Body from './Body.js'
import Navigation from './NavBar';
import Home from './Home'
import History from "./History"
import Update from './Update'
import Quotes from './Quotes'
import Favorites from './Favorites'
import Suggestions from './Suggestions'
import About from './About'


class App extends PureComponent {
  
  render() {

    return (
      <div className="App">
        <Router>
          <Route path="/" render={props => <Navigation  {...props}/>}/>
          {/* <Route exact path="/"> {this.state.user ? <Redirect to="/practice" /> : <Redirect to="/login"/>}</Route> */}
          {/* <Route exact path="/login" render={props => <Login {...props} onLogin={this.setUser} />}/> */}
          <Route path= '/Home' render={props => <Home/>}/>
          <Route path= '/History' render={props => <History/>}/>
          <Route path= '/Update' render={props => <Update/>}/>
          <Route path= '/Quotes' render={props => <Quotes/>}/>
          <Route path= '/Favorites' render={props => <Favorites/>}/>
          <Route path= '/Suggestions' render={props => <Suggestions/>}/>
          <Route path= '/About' render={props => <About/>}/>
        </Router>
{/* 
        <Navigation />
        <Body /> */}
      </div>
    );

  }
}

export default App;
