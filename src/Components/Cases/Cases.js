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
        axios.get(`/api/cases`)
        .then(res => {this.setState({ cases: res.data })
        })
    }


    render(){
        const { cases } = this.state;
        return(
            <div className="box1">Heres some cases
            <h1>
                {cases.map(function(d, idx){
                    return (<li key = {idx}>{d.name}</li>)
                })}
            </h1>
                <Link to="/motherboards">
                    <button className="btn">Motherboards</button>
                </Link>
            </div>
        )
    }
}

export default Cases;
