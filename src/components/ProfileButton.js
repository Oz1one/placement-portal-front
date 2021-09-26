import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function ProfileButton() {
  
console.log('in profile-button');
  return (
    <Link to='profile'>
      <button className='btn'>Profile</button>
    </Link>
  );
}
