import "./styles.css";
import React, { useState } from "react";
import { HashRouter, Link } from 'react-router-dom';
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import routes from './routes';
import './App.css';

export default function App() {

  const [isShowLogin, setIsShowLogin] = useState(false)
  
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  
    return(
      <HashRouter>
      <div className="App">
        <nav className="nav">
        <NavBar handleLoginClick={handleLoginClick} />
        <LoginForm isShowLogin={isShowLogin} />
          <Link to="/" className="Home-Button">
            <button className="home-btn">Home</button>
          </Link>
        </nav>
        {routes}
      </div>
    </HashRouter>
    );
  }
    

