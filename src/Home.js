import React, {Component} from 'react'
import logo from './bookdiary.png'

class Home extends Component {
    render(){
        return (
            <div>
                <h1 class="section-heading">Welcome to</h1>
                <img src={logo} class="splash" alt="logo"/>
                <p class="section-paragraph">Record and rate books you read, save favorite passages or quotes, and get new reading suggestions!</p>
            </div>
        )
    }
}

export default Home