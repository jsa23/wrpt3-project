import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../store/reducers/cartReducer';
import axios from 'axios';


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
                    <style jsx>
                        {`
                        .itemsReturned {
                            background: #fffffff;
                            display: flex;
                            width: 400px;
                            height: 112px;
                            border-radius: 6px;
                            justify-content: space-between;
                        }
                        button {
                            height: 36px;
                            background: #22c244;
                            border-radius: 4px;
                            color: white;
                            border: 0;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.2s ease;
                            box-shadow: 0px 4px 5.5px 0px rgba(0,0,0,0.07);
                        }
                        button: hover {
                            opacity: 0.8;
                            color: blue;
                            background: #482155;
                        }
                        `}
                    </style>
                </Link>
            </div>
            </div>
        )
    }
}

export default connect(null,{addToCart})(Cases);