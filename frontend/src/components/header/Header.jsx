import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg'; // replace with your actual logo path

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="School Logo" className="logo" />
        <h1 className="school-name">Icon Nursery & Primary School</h1>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
