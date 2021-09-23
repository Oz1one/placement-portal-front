import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const deleteStudentObject=()=>{
  sessionStorage.removeItem('studentobj');
}

export function Logout() {
  return (
    <Link to='/'>
      <button className='btn' onClickonClick={deleteStudentObject()}>Sign Out</button>
    </Link>
  );
}
