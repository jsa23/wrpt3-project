import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Motherboards = (props) => {
    const [items, setItems ] = useState([])
    
    useEffect(() => {
        axios.get('https://localhost:3000/#/motherboards').then((res) => {
            setItems(res.data.results)
        })
    },[])

    
    return(
        <div className="box1">here are motherboards (pick one)
            {/* {items.map((motherboard) => { */}
                return (
                    <Link to="/cpus">
                        {/* <h2>{motherboard.name}</h2> */}
                        <button className="btn">pick one for cpus</button>
                </Link>
            {/* ) */}
        {/* })} */}
        </div>   
     )
    };

export default Motherboards;