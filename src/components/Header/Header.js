import React from 'react'
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Github Portfolio</h1>
    </header>
  )
}


export default Header;
