import React from 'react';
import ill1 from './images/ab1.jpeg';
import ab2 from './images/ab2.jpeg';
import ab3 from './images/ab3.jpeg';
import './About.css';

function About() {
  return (
   <>
    <h1 className='ha1'>About US</h1>
    <div className='hcon1'>

  <div className='containera1'>
  <img src={ill1}></img>
  </div>

  <div className='hcon2'>
    <div className='acon2'>
 <img src={ab2}></img>
 <p>When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.</p>
    </div>
    <div className='acon3'>
    <p>When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval. Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.
What is lorem</p>
    </div>
    <div className='acon4'>
        <p>When you land on a sample web page or open an email template and see content beginning with "lorem ipsum," Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns.</p>
        <img src={ab3}></img>
    </div>
  </div>
    </div>
   </>
  )
}

export default About