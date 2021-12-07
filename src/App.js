import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom';
import Header from './Header/Header'
import routes from './routes';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Cart/Cart';
import Navbar from './Components/NavBar';

class App extends Component {
  constructor(){
    super();

    this.state = {
      user: {}
    };
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(user) {
    this.setState({
      user,
    })
  }

  render(){
    const { user } = this.state;
    return(
      <HashRouter>
      <div className="App">
        <Header user={user} updateUser={this.updateUser} />
        <Link exact path="/products" component={ProductList} />
        <Link path="/api/cases" component={Cart} />
        <Navbar />
      {routes} 
      </div>
      </HashRouter>
    )}
  }
export default App;

          //   <Link to="/Login" className="Login-Button">
          //   <button style={{margin:"10px"}} className="login-btn">Login</button>
          // </Link>
          //   <Link to="/Register" className="Register-Button">
          //   <button className="register-btn">Register</button>
          // </Link>



