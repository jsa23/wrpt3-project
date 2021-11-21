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
        <div>Computer builder</div>
        <div className="link-wrap"></div>
        <Link to="/" classname="links">Home</Link>
          <Link to="/cases" className="links">Cases</Link>
        <img src="https://m.media-amazon.com/images/I/615X+Pe+CoL._AC_UY218_.jpg" className ="App-logo" alt="logo" /> 
        </nav>
        {routes}
        </header>
      </div>
    </HashRouter>
    )}
  }

export default App;

