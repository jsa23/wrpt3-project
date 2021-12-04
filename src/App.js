import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {

  render(){
    return(
    <HashRouter>
      <div className="App">
        <nav className="nav">
          <Link to="/" className="Home-Button">
            <button className="home-btn">Home</button>
          </Link>
            <Link to="/Login" className="Login-Button">
            <button style={{margin:"10px"}} className="login-btn">Login</button>
          </Link>
            <Link to="/Register" className="Register-Button">
            <button className="register-btn">Register</button>
          </Link>
        </nav>
        {routes}
      </div>
    </HashRouter>
    )}
  }

export default App;
