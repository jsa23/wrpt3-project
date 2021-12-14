import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Build extends Component {
    render(){
        return (
            <div className="build-computer-button">
                <Link to="/cases">
                    <button className='btn'>Build Your Computer</button>
                    <style jsx>
                        {`
                        .button {
                            color: yellow;
                            height: 30px;
                            border-radius: 8px;
                            justify-content: space-between;
                            background: green;
                        }
                        button: hover {
                            opacity: 0.9;
                            color: purple;
                            background: yellow;
                        }
                        `}
                    </style>
                </Link>
            </div>
    );
}
}