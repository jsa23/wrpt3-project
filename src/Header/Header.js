import React, { Component } from 'react';
import axios from 'axios';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
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
            this.setState({ password: value});
        }

        login() {
            const { username, password } = this.state;
            axios.post('/api/login', { username, password })
            .then(user => {
                this.props.updateUser(user.data);
                this.setState({ username: '', password: ''});
            })
            .catch(err => alert(err.response.request.response));
        }

        register() {
            const { username, password } = this.state;
            axios.post('/api/register', { username, password })
            .then(user => {
                this.setState({ username: '', password: ''});
                this.props.updateUser(user.data);
            })
            .catch(err => {
                this.setState({ username: '', password: ''});
                alert(err.response.request.response);
            });
        }

        logout() {
            axios.get('/api/logout')
            .then(() => {
                this.props.updateUser({});
            })
            .catch(err => console.log(err));
        }


        deleteUsername(user_id) {
            axios.delete(`/api/checkout/${user_id}`)
            .then(console.log('nothing'))
            .catch((err) => { console.log(err)})
            }

        updateUsername(username) {
            axios.put(`/api/checkout/${username}`)
            .then(console.log('success hopefully'))
            .catch((err) => console.log(err, 'error'))
        }
        



        render() {
            const { username, password } = this.state;
            const { user } = this.props;
            return (
                <div className="Header">
                <Link className = "navbar-brand" to="/">
                    <button>Home</button>
                </Link>
            <style jsx>
                {`
                section {
                    background: #fffffff;
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                    height: 112px;
                    border-radius: 6px;
                    justify-content: space-between;
                }
                button {
                    height: 37px;
                    background: #22c244;
                    border-radius: 4px;
                    color: white;
                    border: 0;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0px 4px 5.5px 0px rgba(0,0,0,0.07);
                }
                button: hover {
                    opacity: 0.8;
                    color: blue;
                    background: #482155;
                }
                `}
            </style>
                    {user.username ? (
                        <div className = "welcomeMessage">
                            <h4>{user.username}, Lets build your computer!</h4>
                            <button type="submit" onClick={this.logout}>
                                Logout
                            </button>
                            <button type="submit" onClick={this.deleteUsername}>
                                Delete my account forever
                            </button>
                            <div className ="usernameUpdatedField">
                                <input
                                type="text"
                                placeholder="new username"
                                value={username}
                                onChange={e => this.handleUsernameInput(e.target.value)}
                                />
                                </div>
                            <button type="submit" onClick={this.updateUsername} id="reg">
                                Change my Username
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
                                onChange={e=> this.handlePasswordInput(e.target.value)}
                            />
                            <div className="adminCheck">
                            </div>
                            <button onClick={this.login}>Login!!</button>
                            <button onClick={this.register} id="reg">
                                Register!!
                            </button>
                        </div>
                        )}
                    </div>
                    
                )
        }
}

export default Header;