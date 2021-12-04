import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Memory = (props) => {
    const [ items ,setItems ] = useState([])

    
    useEffect(() => {
        axios.get('/api/memory')
        .then((res) => {
            setItems(res.data)
        })
        .catch((err)=>console.log(err))
    },[])

    
    return (
        <div className="box1">
                <Link to="/fans">
                    {items.map((e,i)=> {
                        return <li key={i}><img src={e.item_image} alt="Memory"/> {e.item_name} {e.item_type} {e.stars} {e.price}</li>
                    })}
                </Link>
        </div>  
    )
    }

export default Memory;