import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render(){
        this.props.cartUpdated();
        let total = 0;
        this.props.cart.map(item => total += item.product.price * item.quantity);
        return(
            <nav className = "navbar navbar-default">
                <div className = "container-fluid">
                    <div className = "navbar-header">
                        <Link className = "navbar-brand" to="/">Shopping cart </Link>
                </div>
                <div className = "collapse navbar-collapse" id = "bs-example-navbar-collapse-1">
                    <ul className = "nav navbar-nav navbar-right">
                        <li><Link to ="/my-cart">{
                            this.props.cart.length > 0 ? (
                                <span className = " label label-info">{
                                    this.props.cart.length } items: (${total.toFixed(2)})</span>
                            ) : null
                        }
                        <i className = "glyphicon glyphicon-shopping-cart">My Cart</i></Link></li>
                        </ul>
                </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        cartUpdated: () => {return true}
    }
};

export default connect(mapStateToProps)(Navbar);