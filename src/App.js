import "./styles.css";
import React, { Component } from "react";
import { HashRouter, Link } from 'react-router-dom';
import Header from "./Components/Header/Header";
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
    this.setState=({user,});
  }
  
  render() {
    const { user } = this.state;
    return (
      <HashRouter>
      <div className="App">
        <Header user={user} updateUser={this.updateUser} />
        <nav className="nav">
          <Link to="/" className="Home-Button">
            <button className="home-btn">Home</button>
          </Link>
        </nav>
        {routes}
      </div>
    </HashRouter>
    );
  }
}

export default App;
