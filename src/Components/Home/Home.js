import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return (
            <div className="box">
                <Link to="/">
                    <button className='btn'>Home</button>
                </Link>
</div>
    );
}
}