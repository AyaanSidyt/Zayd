import React, { useState } from 'react';
import './Navbar.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <>
    

      <nav>
        <img src={logo} alt="Logo" className="logo1" />
        
        <div className="burger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li className="list"> <Link to="/" className='link'>Home</Link></li>
          <li className="list">
          <Link to="/About" className='link'>About Us</Link></li>
          <li className="list"><Link to="/Product" className='link'>Products</Link></li>
          
          <li className="list"><Link to="/contact" className='link'>Contact</Link></li>
        </ul>
      </nav>
      
      
    </>
  );
}
