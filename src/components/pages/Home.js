import React from 'react';
import '../../App.css';
import img1 from '../../images/cdaclogo.png'
import Navbar from '../Navbar';
import Banner from './Banner';
import './Home.css'

export default function Home() {
  return (
    <>
      
    
    <div className='home'>
      <div className='home2'>
      <Banner/>
      </div>
      </div>
    <footer className='footer'>
      <img src={img1} alt='CDAC Logo' className='cdaclogo'/>
      <div>This app is the property of CDAC-Acts</div>

    </footer>
  
    </>
  );
}
