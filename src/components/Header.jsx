//import {useState} from 'react'
//import styles from './Header.module.css'

import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header className="header">
      <div className="title">Hyuyeong</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/main">Home</NavLink>
          </li>
          <li>
            <NavLink to="aboutme">About me</NavLink>
          </li>
          <li>
            <NavLink to="/Portfolios">Portfolios</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
