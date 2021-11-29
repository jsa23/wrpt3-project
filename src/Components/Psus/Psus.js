import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Psus extends Component {
    render(){
        return(
            <div className="box1">some Psus to power the whole thing you've just built! 
                <Link to="/checkout">
                    <button className="btn">finish!! </button>
                </Link>
            </div>   
        )
    }
}

export default Psus;