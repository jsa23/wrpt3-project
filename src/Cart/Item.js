import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../Components/store/actions/cartActions';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.item.quantity,
            btnVisible: false
        };
    }
    handleChange = (e) => {
        if(e.target.value <= 0) {
            alert("Quantity must be greater than or equal to 1");
            return;
        }
        if(e.target.value > this.props.item.product.amount) {
            alert("You have exceeded the available items of this product!");
            return;
        }
        if(this.state.quantity !== e.target.value) {
            this.setState({
                quantity: e.target.value,
                btnVisible: true
            });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateCartQuantity(this.props.item.item_number, this.state.quantity);
        this.setState({
            btnVisible: false
        });
    }
    handleRemove = (e) => {
        // this.props.removeFromCart(this.props.item.product.id);
    }
  render() {
      const { item } = this.props;
      return (
          <div className="row">
              <div className="col-xs-2"><img className="img-responsive" src={item.item_image} alt="thingy" />
              </div>
              <div className="col-xs-4">
                  <h4 className="product-name"><strong>{item.item_name}</strong></h4>
              </div>
              <div className="col-xs-6">
                  <div className="col-xs-3 text-right">
                      <h2><strong>{ item.price } <span className="text-muted"></span></strong></h2>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                      <div className="col-xs-4">
                          <input type="number" className="form-control input-sm" onChange={this.handleChange} value={this.state.quantity}/>
                      </div>
                      {
                          this.state.btnVisible?(
                              <div className="col-xs-2">
                                  <button type="submit" className="btn btn-info">Update</button>
                              </div>
                          ) : null
                      }
                      <div className="col-xs-2">
                          <button type="button" onClick={this.handleRemove} className="btn btn-link btn-xs">
                              <span className="glyphicon glyphicon-trash"> </span>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
};
export default connect(null, mapDispatchToProps)(Item);