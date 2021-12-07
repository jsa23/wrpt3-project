import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
// import Header from './Header/Header'
import routes from './routes';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './cart/Cart';
import Navbar from './Components/NavBar';

function App(props) {

    return(
    <HashRouter>
      <div className="App">
        <Navbar />
        <Link exact path="/" component={ProductList} />
        <Link path="/my-cart" component={Cart} />
      </div>
      {routes}
    </HashRouter>
    )}
  

export default App;

          //   <Link to="/Login" className="Login-Button">
          //   <button style={{margin:"10px"}} className="login-btn">Login</button>
          // </Link>
          //   <Link to="/Register" className="Register-Button">
          //   <button className="register-btn">Register</button>
          // </Link>