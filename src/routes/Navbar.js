import React from 'react';
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import Logo from "../assets/main.png";

const Navbar = () => {
  return (
    <div>
      <div className="header header-bg">
        <Link to="/">
          <div className="logoContainer">
            <img className="logo" src={Logo} alt="Logo" />
            <h2>GagaHealth</h2>
          </div>
        </Link>
        <ul className="nav-menu active">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
