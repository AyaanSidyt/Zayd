import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Product from './Product'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Footer';


import Contact from './Cotact'
function App() {
  return (
  <>
  <Router>
  <Navbar></Navbar>
  
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
 <Footer></Footer>
    </Router>

  </>
  )
}

export default App

