import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return (
            <div>
                <Link to="/cases">
                    <button className='btn'>Build Your Computer</button>
                </Link>
            </div>
    );
}
}