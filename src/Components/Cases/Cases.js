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
        .catch((err)=> console.log(err))
    }


    render(){
        const { cases } = this.state;
        
        return(
            <div className="box1">
                <Link to="/motherboards">
                    {cases.map((e,i)=> {
                        return <li key={i}><img src ={e.item_image} alt="Cases"/> {e.item_name} {e.item_type} {e.stars} {e.price} </li>
                    })}
                </Link>
            </div>
        )
    }
}

export default Cases;

