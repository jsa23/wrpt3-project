import React, { Component } from "react";
import { Link } from 'react-router-dom'
;
class Checkout extends Component {
    constructor(props){
        super(props)

        this.state = []
    }

    render(){
        const items = this.state;
        return(
        <div className="box1">
                    {items.map((e,i)=> {
                        return <div onClick = {() => {
                        }} className = "itemsReturned" key={i}><img src={e.item_image} alt="Memory"/>
                        {e.item_name} {e.item_type} {e.stars} {e.price}</div>
                    })}
                    <Link to='/payment'>
                    <button className = "pay-button">Pay now!</button>
                    </Link>
                    <section>
                <button type="submit" role="link">
                    Checkout
                </button>
            </section>
            <style jsx>
                {`
                section {
                    background: #fffffff;
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                    height: 112px;
                    border-radius: 6px;
                    justify-content: space-between;
                }
                button {
                    height: 36px;
                    background: #55533;
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
                }
                `}
            </style>
        </div>  
    )
}
}

export default Checkout;