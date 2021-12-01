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
        .catch(error => { console.log(error)
        });
    }

    render(){
        return(
            <div className="box1">Heres some cases
            <h1>
            </h1>
                <Link to="/api/motherboards">
                    <button className="btn">Motherboards</button>
                </Link>
            </div>
        )
    }
}

export default Cases;
