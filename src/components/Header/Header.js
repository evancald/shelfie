import React from 'react';
import '../../App.css';
import logo from '../../assets/shelfie_icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div className="header">
      <img className="header-logo" src={logo} alt="logo" height="50px" width="50px"/>
      <h1 className="header-name">shelfie</h1>
      <div>
          <Link to="/" className="nav-link-dashboard">Dashboard</Link>
          <Link to="/add" className="nav-link-add">Add Inventory</Link>
      </div>
    </div>
  )
}

export default Header;