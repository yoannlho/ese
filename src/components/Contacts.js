import React, { useState } from 'react';
import MinHeightTextarea from './FormContact/MinHeightTextarea';
import './filecss/ContactStyle.css';
import { TextField } from '@material-ui/core';

const Contacts = () => {
  const[Name, SetName] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Name: ${Name}`)
  };
  const changeHandler = (event) => {
    SetName(event.target.value)
  }

  return (
    <div className="App">
      <h3 className ="title"> 
          Contacts 
      </h3>
      <span className="formPosition">
        <MinHeightTextarea label="minimum height" rowsMin={ 5 } placeholder="Minimum 3 rows"/>
      </span>
      <form onSubmit={ submitHandler }>
        <TextField className="filledButton"
          id="Name"
          label="Name"
          variant="filled"
          color="secondary"  
          value={ Name }
          onChange={ changeHandler }      
        />
        </form>
    </div>
  )
}

export default Contacts;