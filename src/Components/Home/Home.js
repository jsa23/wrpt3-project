import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/Home.css'

export default class Home extends Component {
    render(){
        return (
            <div>
                <Link to="/">
                    <button className='btn'>Home</button>
                </Link>
            </div>
    );
}
}