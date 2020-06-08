import React from 'react';
import MinHeightTextarea from './FormContact/MinHeightTextarea';
import './filecss/ContactStyle.css';

const Contacts = () => {
  return (
    <div className="App">
      <h3> 
          Contacts 
      </h3>
      <MinHeightTextarea label="minimum height" rowsMin={3} placeholder="Minimum 3 rows"/>
    </div>
  )
}

export default Contacts;