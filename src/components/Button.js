import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  const studentId= sessionStorage.getItem('studentid');
console.log('in button' +studentId);
  return (
    <Link to='sign-in'>
      <button className={!studentId?'btn':'hidden'}>Sign in</button>
    </Link>
  );
}
