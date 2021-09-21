import React from 'react';
import '../../App.css';
import './years.css'

export default function Years() {


  return <div>
    <>

    <span>Year</span>
    <select>
      <option>2018</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
    </select>
    <span>Batch</span>
    <select>
      <option>January</option>
      <option>July</option>
    </select>
    <span>Course</span>
    <select>
      <option>DAC</option>
      <option>DBDA</option>
      <option>DITISS</option>
      <option>DESD</option>
    </select>
    <button className='btn' >Search</button>
    </>
  </div>;
}
