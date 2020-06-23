import React, { useState } from 'react';
import MinHeightTextarea from './FormContact/MinHeightTextarea';
import './filecss/ContactStyle.css';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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
        <span className="buttonPosition2">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            label="envoyer"
            endIcon={<SendIcon />}
         
            >
                Send
          
          </Button>
        </span>
      </form>
    </div>
  )
}

export default Contacts;