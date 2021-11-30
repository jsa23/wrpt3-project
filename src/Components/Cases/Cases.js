import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cases.css'

class Cases extends Component {
    constructor(props) {
        super(props);

        this.state= {
            cases: [],
        };
    }

    componentDidMount(){
        axios.get(`https://localhost:3000/#/cases`)
        .then(res => {this.setState({cases: res.data})
        (console.log(res.data))
        });
    }

    render(){
        return(
            <div className="box1">Heres some cases
            <h1>{this.cases}</h1>
                <Link to="/motherboards">
                    <button className="btn">Motherboards</button>
                </Link>
            </div>
        )
    }
}

export default Cases;
