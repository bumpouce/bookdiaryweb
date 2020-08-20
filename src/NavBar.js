import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './bookdiary.png';

class Navigation extends Component {
    render (){
        return (
            <span class="App-header">
                <img src={logo} alt="logo" class="logo"/> <br></br>
                <ul class="nav">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/History">History</Link></li>
                    <li><Link to="/Update">Update</Link></li>
                    <li><Link to="/Quotes">Quotes</Link></li>
                    <li><Link to="/Favorites">Favorites</Link></li>
                    <li><Link to="/Suggestions">Suggestions</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </span>
        )
    }
}

export default Navigation

// Image by <a href="https://pixabay.com/users/kropekk_pl-114936/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=287140">kropekk_pl</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=287140">Pixabay</a>