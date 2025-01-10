import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        <div>
         <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">CodingLab</span>
        </div>
        <div class="media-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li>
          <Link to="/" className='link'>Home</Link>
            </li>
          <li> <Link to="/Contact" className='link'>Contact</Link></li>
          <li><Link to="/About" className='link'>About Us</Link></li>
          <li> <Link to="/Product" className='link'>Products</Link></li>
        </ul>
        <ul class="box">
          <li class="link_name">Contact</li>
          <li><a href="#">+92 321-9247986</a></li>
          <li><a href="#">contact@example.com </a></li>
        
        </ul>
      
      
       
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright ©  <a href="#">Scalcer</a>Made by Ayaan Siddiqui</span>
        <span class="policy_terms">
          <a href="#">+92 316-0149909</a>
          <a href="#">ayaan.ordin@gmail.com</a>
        </span>
      </div>
    </div>
  </footer>
    </div>
    </>
  )
}

export default Footer