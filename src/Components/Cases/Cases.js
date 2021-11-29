import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Cases extends Component {
    constructor() {
        super();

        this.state= {
            cases: [],
        };
    }

    componentDidMount(){
        return axios.get(`http://localhost:3000/#/cases`)
        .then((res) => {this.setState({cases: res.data});
        });
    }

    render(){
        return(
            <div className="box6">Heres some cases
            <h1>{this.cases}</h1>
                <Link to="/motherboards">
                    <button className="btn">Motherboards</button>
                </Link>
            </div>   
        )
    }
}

export default Cases;
