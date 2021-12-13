import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {

    render(){
        this.props.cartUpdated();
        return(
            <div className ="rows-upon">
            </div>
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