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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )}
  }

export default App;

