import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Gpus extends Component {
    render(){
        return(
            <div className="box1">getting closer
                <Link to="/coolers">
                    <button className="btn">pick one gpu to get to coolers</button>
                </Link>
            </div>   
        )
    }
}

export default Gpus;