import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../store/reducers/cartReducer';
import axios from 'axios';

const Memory = (props) => {
    const [ items ,setItems ] = useState([])

    
    useEffect(() => {
        axios.get('/api/memory')
        .then((res) => setItems(res.data))
        .catch((err)=>console.log(err))
    },[])

    
    return (
        <div className="box1">
                <Link to="/fans">
                    {items.map((e,i)=> {
                        return <div onClick = {() => {
                            props.addToCart(e)
                        }} className = "itemsReturned" key={i}><img src={e.item_image} alt="Memory"/>
                        {e.item_name} {e.item_type} {e.stars} {e.price}</div>
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
    )
    }

export default connect(null, {addToCart})(Memory);

