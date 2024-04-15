// Head.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Head.css';
import logo1 from '../../assets/icons/logo1.png'

function Head() {
  return (
    <div className='nav'>
      <div className='logo'>
          <div><img src={logo1} alt="logo1" /> </div>
      </div>
      <ul>
          <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
              <NavLink to="/about" className="nav-link">Sobre a TeknoSystems</NavLink>
          </li>
          <li>
              <NavLink to="/contact" className="nav-link">Entre em contato!</NavLink>
          </li>
          <li>
              <NavLink to="/login" className="nav-link">LogIn</NavLink>
          </li>
          
      </ul>
    </div>
  );
}

export default Head;
