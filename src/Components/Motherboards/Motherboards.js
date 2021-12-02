import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Motherboards = (props) => {
    const [ items ,setItems ] = useState([])
    
    useEffect(() => {
        axios.get('/api/motherboards').then((res) => {
            setItems(res.data)
            })
    },[])

    
    return (
        <div className="box1">
                <Link to="/cpus">
                        <button className="btn">pick one for cpus</button>
                </Link>
        </div>  
        
    )
    }

export default Motherboards;