import React, { Component } from "react";
import StripeContainer from './StripeContainer';
import { connect }from 'react-redux';
;
class Checkout extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[],
            showItem: (false)
    };
    }
    updateItem(showItem){ 
        this.setState({
          showItem,
        })
      }


    render(){
        const { items } = this.state;
        const { showItem}  = this.state;
        return(
        <div className="box1">
                    {items.map((e,i)=> {
                        return <div onClick = {() => {
                        }} className = "itemsReturned" key={i}><img src={e.item_image} alt="Memory"/>
                        {e.item_name} {e.item_type} {e.stars} {e.price}</div>
                    })}
                    {showItem && <StripeContainer total={this.props.total}/>}
                    <button onClick={() => {this.setState({showItem: true})}}>Pay Now </button>
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
const mapStateToProps = (state) => {
    const total =
    state.cart.cart.reduce((acc, cur) => {
    acc += +cur.price.substring(1)
    return acc;
    },0)
  return {
      total
  } 
};
export default connect(mapStateToProps)(Checkout);