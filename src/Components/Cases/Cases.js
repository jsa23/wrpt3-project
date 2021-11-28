import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Cases extends Component {
    constructor() {
        super();

        this.state= {
            cases: []
        }
    }

    render(){
        return(
            <div className="box">haha
                <Link to="/motherboard">
                    <button className="btn">Motherboards</button>
                </Link>
            </div>   
        )
    }
}

export default Cases;
