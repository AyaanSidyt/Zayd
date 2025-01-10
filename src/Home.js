import React, { useState, useEffect } from 'react';

import './App.css';

import head from './images/headerpic.png';
import logo from './images/logo.png';
import ill1 from './images/ill1.png';
import sg from './images/sg.png';

const Home = () => {
    const [gradient, setGradient] = useState(
      "linear-gradient(to bottom, rgb(36, 36, 255), rgb(112, 112, 255))"
    );
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY; // Current scroll position
        const maxScroll = document.body.scrollHeight - window.innerHeight; // Total scrollable area
        const scrollPercentage = Math.min(scrollTop / maxScroll, 1); // Scroll percentage (0 to 1)
  
        // Interpolate between the two colors
        const startColor = [36, 36, 255];
        const endColor = [112, 112, 255];
        const interpolatedColor = startColor.map((start, index) => {
          const end = endColor[index];
          return Math.round(start + (end - start) * scrollPercentage);
        });
  
        // Update gradient state
        setGradient(
          `linear-gradient(to bottom, rgb(36, 36, 255), rgb(${interpolatedColor.join(",")}))`
        );
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <>
 
        <div className='container1' id='head'>
       
          <div className='headdiv'>
            
          <h1 className='head1'>Welcome To ZayD Packages</h1>
          <p className='para1'>lorem34Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
  
          </p>
          <button className='btn1'>Join Us</button>
          </div>
         <img src={logo} className='logo' /> 
          <img src={head} alt="Header" className='img1'/>
          
        </div>
  
        <div className='div2'>
        <div className='innerdiv'>
<div className='cont1'>

        <h2>What We Manufacture?</h2>
        <div className='line'></div> 
        <p>We are one of the leading Manufacturer of Tamper Proof Courier Bags/ Flyer Bags/ Plastic Courier Bags/ E-commerce Security Bags/ Self adhesive Bags/ Self sealing bags/ E-commerce Bags/ COD Bags, Shopping bags , Loop handle bags , Grocery Bags, PVC bags , PVC Zipper bags , and All kind of Plastic bags.</p>
</div>
<div className='cont2'>
<h2>Building Client Relationships</h2>
<h5>Our Quality Policy</h5>
<p>Quality is which satisfies the customer.</p>
<h5>Vision Statement</h5>
<p>To be the largest packaging solution company in Pakistan by gaining the largest share of local as well as global markets.</p>
<h5>Mission Statement</h5>
<p>We are driven to provide the highest quality printed and unprinted poly bags, innovative offerings and exceptional service to our clients that support growth within their respective industries.</p>

<div className='cont3 '>
<img src={ill1}></img>
        </div>
</div>
        </div>
        <div className='cont3 con'>
<img src={ill1}></img>
        </div>
      </div>
      <div className='div3'>
        <div className='innerdiv1'>
<div className='cont4'>
<h2>Our Quality Policy</h2>
<h4>Commitment to Excellence</h4>
<p>We strive to earn our customers' respect and loyalty by consistently delivering high-quality printed and unprinted products on time.</p>
<h4>Continuous Improvement</h4>
<p>Our dedication to quality drives us to continuously enhance our Quality Management System and upgrade our technology and infrastructure.</p>
<h4>Value-Added Services</h4>
<p>To better serve our clients, we aim to exceed expectations by offering value-added services that enhance satisfaction.</p>
<h4>Assurance of Quality and Durability</h4>
<p>We are committed to maintaining the highest standards of quality and durability, ensuring that our clients receive reliable and superior products.</p>
<h4>Customer Satisfaction</h4>
<p>Our mission is to provide unparalleled service and continuously improve to better meet the needs of our valued customers.</p>

</div>
        </div>
        <div className='cont5'>
          <img src={sg}></img>
        </div>
      </div>
        
      </>
    );
  }
  
  export default Home;
  
  