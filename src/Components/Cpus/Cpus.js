import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../store/reducers/cartReducer';
import axios from 'axios';

const Cpus = (props) => {
    const [ items ,setItems ] = useState([])

    
    useEffect(() => {
        axios.get('/api/cpus')
        .then((res) => setItems(res.data))
        .catch((err)=>console.log(err))
    },[])

    
    return (
        <div className="box1">
                <Link to="/gpus">
                    {items.map((e,i)=> {
                        return <div onClick={() => {
                            props.addToCart(e)
                        }} className = "itemsReturned" key={i}><img src={e.item_image} alt="Cpus"/> 
                        {e.item_name} {e.item_type} {e.stars} {e.price}</div>
                    })}
                </Link>
        </div>  
    )
    }

export default connect(null,{addToCart})(Cpus);