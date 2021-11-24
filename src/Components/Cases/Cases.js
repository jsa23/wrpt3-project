import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Cases extends Component {
    constructor() {
        super();

        this.state= {
            cases: []
        }
    }
// componentDidMount() {
//  axios.get(`http://localhost:5050/api/motherboards`)
//  .then(results => {
//      this.setState({
//          cases: results.data
//      });
//  });
// }

    render(){
        return(
            <div className="box">haha
                <Link to="/motherboard">
                    <button className="btn">Motherboards</button>
                </Link>
            </div>   
        )
    }
}
export default Cases;
