import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Coolers extends Component {
    render(){
        return(
            <div className="box1">heres some coolers(pick one)
                <Link to="/memory">
                    <button className="btn">coolers now to go to memory</button>
                </Link>
            </div>   
        )
    }
}

export default Coolers;