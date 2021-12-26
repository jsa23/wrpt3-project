import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
class Cart extends Component
{
    render() {
        const total = this.props.cart.reduce((acc, cur) => {
        acc += +cur.price.substring(2)
        return acc;
        },0)
        // this.props.cart.map(item => total += item.product.price * item.quantity);
        const cart = this.props.cart.length > 0?(
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            console.log(item)
                            return (
                                <div key={item.number}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">Total ${total}</h4>
                        </div>
                    </div> 
                </div>
            </div>
        ) : (
            <div className="panel-body1">
                <p>Cart is empty</p>
            </div>
        )
        return (
                <div className="container">
                    <div className="row">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                                <h5><span className="glyphicon glyphicon-shopping-cart"></span> My Shopping Cart</h5>
                                            </div>
                                { cart }
                            </div>
                        </div>
                    </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
  return {
      cart: state.cart.cart
  }
};
export default connect(mapStateToProps)(Cart);