import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Motherboards extends Component {
    render(){
        return(
            <div className="box1">here are motherboards (pick one)
                <Link to="/cpus">
                    <button className="btn">pick one for cpus</button>
                </Link>
            </div>   
        )
    }
}

export default Motherboards;