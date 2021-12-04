import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Motherboards = (props) => {
    const [ items ,setItems ] = useState([])
    

    useEffect(() => {
        axios.get('/api/motherboards')
        .then(res => setItems(res.data))
        .catch((err)=>console.log(err))
    },[])
    
    
    return (
        <div className="box1">
                <Link to="/cpus">
                    {items.map((e,i)=> {
                        return <li key={i}><img src={e.item_image} alt="motherboards"/> {e.item_name} {e.item_type} {e.stars} {e.price}</li>
                    })};
                </Link>
        </div>  
    );
    };

export default Motherboards;