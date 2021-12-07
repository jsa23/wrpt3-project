import React, { Component } from 'react';
import Product from './Product';


class ProductList extends Component 
{
    render(){
        return(
            <div className = "container">
                <h2>Product List</h2>
                <br />
                <div className = "row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}

export default ProductList;