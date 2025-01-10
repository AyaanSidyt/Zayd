import React from 'react'
import './Product.css';
import pi1 from './images/pi1.PNG';
import pi2 from './images/pi2.PNG';
import pi3 from './images/pi3.PNG';
import ps1 from './images/ps1.jpeg';
import ps2 from './images/ps2.jpeg';
import ps3 from './images/ps3.jpeg';
import ps4 from './images/ps4.jpeg';
import ps5 from './images/ps5.jpeg';
import ps6 from './images/ps6.jpeg';
import psp1 from './images/psp1.jpeg';
import psp2 from './images/psp2.jpeg';
import psp3 from './images/psp3.jpeg';
import psp4 from './images/psp4.jpeg';
import psp5 from './images/psp5.jpeg';
import psb from './images/psb.jpeg';
import psb1 from './images/psb1.jpeg';
import psb2 from './images/psb2.jpeg';
import psb3 from './images/psb3.jpeg';
import psb4 from './images/psb4.jpeg';
import psb5 from './images/psb5.jpeg';
import psb6 from './images/psb6.jpeg';
import psb7 from './images/psb7.jpeg';
import psb8 from './images/psb8.jpeg';
import psh from './images/psh.jpeg';
import psh1 from './images/psh2.jpeg';
import psh2 from './images/psh3.jpeg';
function Product() {
  return (
    <>
    <h1 className='Hp1'>Products</h1>
    <div className='Pcont1'>
        <div>
<img src={pi1}></img>
<p>Patch Polythene Bags</p>
        </div>
        <div>
<img src={pi2}></img>
<p>Polyethene Shoppers</p>
        </div>
        <div>
<img src={pi3}></img>
<p>BOPP Packing Bags</p>
        </div>
        
    </div>
    <div className='Pcont2'>
        <h2>Polyethene Bags</h2>
        <div className='Pcon'>
<img src={ps1}></img>
<img src={ps2}></img>
<img src={ps3}></img>
<br></br>
<img src={ps4}></img>
<img src={ps5}></img>
<img src={ps6}></img>
        </div>
        <h2>Patch Polyethene Bags</h2>
        <div className='Pcon'>
<img src={psp1}></img>
<img src={psp2}></img>
<img src={psp3}></img>
<img src={psp4}></img>
<img src={psp5}></img>
        </div>
        <h2>BOPP PACKETSc</h2>
        <div className='Pcon'>
    <img src={psb}></img>
    <img src={psb1}></img>
    <img src={psb2}></img>
    <img src={psb3}></img>
    <img src={psb4}></img>
    <img src={psb5}></img>
    <img src={psb6}></img>
    <img src={psb7}></img>
    <img src={psb8}></img>
    
   
        </div>
        <h2>Hand Bags</h2>
        <div className='Pcon'>
        <img src={psh}></img>    
        <img src={psh2}></img>    
        <img src={psh1}></img>    
        </div>
    </div>
    </>
  )
}

export default Product