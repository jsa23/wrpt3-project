import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Fans = (props) => {
    const [ items ,setItems ] = useState([])
    const [ didMount, setDidMount ] = useState(false)

    
    useEffect(() => {
        setDidMount(true)
        axios.get('/api/fans')
        .then((res) => {
            setItems(res.data)
        })
        .catch((err)=>console.log(err))
        return () => setDidMount(false)
    },[items])
    
    if(!didMount) {
        return null;
    }
    
    
    return (
        <div className="box1">
                <Link to="/psus">
                    {items.map((e,i)=> {
                        return <li key={i}><img src={e.item_image} alt="Fans"/> {e.item_name} {e.item_type} {e.stars} {e.price}</li>
                    })}
                </Link>
        </div>  
    )
    }

export default Fans;