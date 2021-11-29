import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Memory extends Component {
    render(){
        return(
            <div className="box1">here are some fans (pick alot)
                <Link to="/fans">
                    <button className="btn">pick one to fans</button>
                </Link>
            </div>   
        )
    }
}

export default Memory;