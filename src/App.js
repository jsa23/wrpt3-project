import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom';
import Header from './Header/Header'
import routes from './routes';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Cart/Cart';
import Navbar from './Components/NavBar';
import StripeContainer from './Components/Checkout/pages/StripeContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {
      user:{},
      showItem:(false),
    };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({
      user,
    })
  } 

  updateItem(showItem) {
    this.setState({
      showItem,
    })
  }
  

  render(){
    const { user  } = this.state;
    const { showItem } = this.state;
    
    return(
      <HashRouter>
      <div className="App">
        <Header user={user} updateUser={this.updateUser} />
        <Link exact path="/products" component={ProductList} />
        <Link path="/my-cart" component={Cart} />
        {showItem ? <StripeContainer/> :<> 
        <button onClick={() => this.updateItem(true)}> Pay Now </button></>}
        <Navbar />
      {routes}
      </div>
      </HashRouter>
    )}
  }
export default App;



