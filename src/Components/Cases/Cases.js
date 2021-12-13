import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../store/reducers/cartReducer';
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
            <div className="wrapper_wrapper-content">
                <tr></tr>
            <div className="box1">
                <Link to="/motherboards">
                    {cases.map((e,i)=> {
                        return <div onClick={() => {
                            this.props.addToCart(e)
                        }} className="itemsReturned" key={i}><img src ={e.item_image} alt="Cases"/> 
                        {e.item_name} {e.item_type} {e.stars} {e.price} </div>
                    })}
                </Link>
            </div>
            </div>
        )
    }
}

export default connect(null,{addToCart})(Cases);