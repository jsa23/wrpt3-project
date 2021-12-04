import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import Header from './Header/Header'
import routes from './routes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
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
        <nav className="nav">
          <Link to="/" className="Home-Button">
            <button className="home-btn">Home</button>
          </Link>
          <Header user={user} updateUser={this.updateUser} />
        </nav>
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