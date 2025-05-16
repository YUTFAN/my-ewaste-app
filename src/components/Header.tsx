import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo-image" />
      <h1 className="title">The University of Melbourne: E-waste Recycling</h1>
    </header>
  );
};

export default Header;
