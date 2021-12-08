import React, { Component } from 'react';
import axios from 'axios';
import './Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleUsernameInput(value) {
    this.setState({ username: value });
  }

  handlePasswordInput(value) {
    this.setState({ password: value });
  }

  login() {
    const { username, password } = this.state;
    axios
    .post('/api/login', { username, password })
    .then(user => {
      this.props.updateUser(user.data);
      this.setState({username: '', password: ''});
    })
    .catch(err => alert(err.response.request.response));
  }

  register() {
      const { username, password } = this.state;
      axios
      .post('api/register', { username, password, })
      .then(user => {
          this.setState({username: '', password: ''});
          this.props.updateUser(user.data);
      })
      .catch(err => {
          this.setState({ username: '', password: ''})
          alert(err.response.request.response);
      });
    
  }

  logout() {
    axios
    .get('/api/logout')
    .then(() => {
      this.props.updateUser({});
    })
    .catch(err => console.log(err));
  }

  render() {
    const { username, password } = this.state;
    const { user } = this.props;
    return (
      <div className="Header">
        {user.username ? (
          <div className="welcomeMessage">
            <h4>{user.username}, Welcome! Lets get started!</h4>
            <button type="submit" onClick={this.logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="loginContainer">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => this.handleUsernameInput(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => this.handlePasswordInput(e.target.value)}
            />
            <button onClick={this.login}>Log In</button>
            <button onClick={this.register} id="reg">
              Register
            </button>
          </div>
        )}
      </div>
    );
  }
}