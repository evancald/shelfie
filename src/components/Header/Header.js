import React from 'react';
import '../../App.css';
import logo from '../../assets/shelfie_icon.png';

function Header() {
  return(
    <div className="header">
      <img className="header-logo" src={logo} alt="logo" height="50px" width="50px"/>
      <h1 className="header-name">shelfie</h1>
    </div>
  )
}

export default Header;