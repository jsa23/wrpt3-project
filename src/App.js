import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      name: 'Jordan',
    }

  }

  // componentDidMount(){
  //   axios.get('localhost:5050/api/case')
  //   .then(console.log('got the stuff'))
  //   .catch(err => console.log(err))
  // }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src="https://m.media-amazon.com/images/I/615X+Pe+CoL._AC_UY218_.jpg" className ="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://m.media-amazon.com/images/I/615X+Pe+CoL._AC_UY218_.jpg"
          target="https://m.media-amazon.com/images/I/615X+Pe+CoL._AC_UY218_.jpg"
          rel="https://m.media-amazon.com/images/I/615X+Pe+CoL._AC_UY218_.jpg"
        >
          Learn React
        </a>
      </header>
    </div>
    )}
  }

export default App;

