import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Psus = (props) => {
    const [ items ,setItems ] = useState([])
    
    
    useEffect(() => {
        axios.get('/api/psus')
        .then((res) => {
            setItems(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    
    return (
        <div className="box1">
                <Link to="/checkout">
                    {items.map((e,i)=> {
                        return <li key={i}><img src={e.item_image} alt="psus"/> {e.item_name} {e.item_type} {e.stars} {e.price}</li>
                    })}
                </Link>
        </div>  
    )
    }

export default Psus;