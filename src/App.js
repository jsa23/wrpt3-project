import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {

  // componentDidMount(){
  //   axios.get('localhost:5050/api/case')
  //   .then(console.log('got the stuff'))
  //   .catch(err => console.log(err))
  // }

  render(){
    return(
    <HashRouter>
      <div className="App">
        <nav className="nav">
          <Link to="/" className="home-btn-list">Home</Link>
          <Link to="/cases" className="try_home_button">
            <button className="try-btn" Case try button>Case try button</button>
            </Link>
        </nav>
        {routes}
      </div>
    </HashRouter>
    )}
  }

export default App;

