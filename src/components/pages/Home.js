import React from 'react';
import '../../App.css';
import img1 from '../../images/cdaclogo.png'

export default function Home() {
  return (
    <>
      <h1 className='home'>?</h1>
      
      <footer className='footer'>
        <img src={img1} alt='CDAC Logo' className='cdaclogo'/>
        <div>This app is the property of CDAC-Acts</div>

      </footer>
    </>
  );
}
