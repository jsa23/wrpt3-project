import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Cpus extends Component {
    constructor() {
        super();

        this.state= {
            cases: []
        }
    }

    render(){
        return(
            <div className="box1">pick this one to go to gpus
                <Link to="/gpus">
                    <button className="btn">Gpus</button>
                </Link>
            </div>   
        )
    }
}

export default Cpus;