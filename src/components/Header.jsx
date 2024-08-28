import React from 'react';
import "../components/css/header.css";
import AcLogo from './images/authenticCultureWhiteShort.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={AcLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/cultures" className="navbar-link">Explore Cultures</Link>
          <Link to="/blog" className="navbar-link">Blog</Link>
          <Link to="/community" className="navbar-link">Community</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
