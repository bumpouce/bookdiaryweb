import React, { Component } from 'react';
import Home from './Home'
import History from "./History"
import Update from './Update'
import Quotes from './Quotes'
import Favorites from './Favorites'
import Suggestions from './Suggestions'
import About from './About'


class Body extends Component {
    render (){
        return (
            <div>
                <h1>The body!!</h1>
                <Home />
                <History />
                <Update />
                <Quotes />
                <Favorites />
                <Suggestions />
                <About />
            </div>
        )
    }
}

export default Body