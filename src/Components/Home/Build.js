import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Build extends Component {
    render(){
        return (
            <div className="build-computer-button">
                <Link to="/cases">
                    <button className='btn'>Build Your Computer</button>
                </Link>
            </div>
    );
}
}