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
      <header className="App-header">
        <nav className="nav">
          <Link to="/" className="home-btn-list"></Link>
        </nav>
        {routes}
        </header>
      </div>
    </HashRouter>
    )}
  }

export default App;

