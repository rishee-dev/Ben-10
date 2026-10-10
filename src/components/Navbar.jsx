import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>
          <a href="https://ben10.fandom.com/wiki/Category:Classic_Aliens" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            Aliens
          </a>
        </li>
        <li>
          <a href="https://toonstream.dad/?s=ben+10" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            Episodes
          </a>
        </li>
        <li>
          <a href="https://ben10gamesfree.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            Games
          </a>
        </li>
        <li>
          <a href="#footer" style={{ color: 'inherit', textDecoration: 'none' }} onClick={e => {
            e.preventDefault();
            document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
          }}>
            About
          </a>
        </li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-fill">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
