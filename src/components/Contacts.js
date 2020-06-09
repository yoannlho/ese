import React from 'react';
import MinHeightTextarea from './FormContact/MinHeightTextarea';
import './filecss/ContactStyle.css';

const Contacts = () => {
  return (
    <div className="App">
      <h3 className ="title"> 
          Contacts 
      </h3>
      <span className="formPosition">
      <MinHeightTextarea label="minimum height" rowsMin={ 5 } placeholder="Minimum 3 rows"/>
      </span>
    </div>
  )
}

export default Contacts;