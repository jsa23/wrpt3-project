import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom';
import Header from './Header/Header'
import routes from './routes';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Cart/Cart';
import Navbar from './Components/NavBar';
// require('dotenv').config()

class App extends Component {
  constructor(){
    super();

    this.state = {
      user:{},
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
    
    return(
      <HashRouter>
      <div className="App">
        <Header user={user} updateUser={this.updateUser} />
        <Link exact path="/products" component={ProductList} />
        <Link path="/my-cart" component={Cart} />
        <Navbar />
      {routes}
      </div>
      </HashRouter>
    )}
    }
export default App;



