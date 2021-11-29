import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Fans extends Component {
    render(){
        return(
            <div className="box1">here are fans to cool your machine down (pick one)
                <Link to="/psus">
                    <button className="btn">go to psus</button>
                </Link>
            </div>   
        )
    }
}

export default Fans;