import React, { useState } from 'react';
import MinHeightTextarea from './FormContact/MinHeightTextarea';
import './filecss/ContactStyle.css';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Contacts = () => {
  const[Name, SetName] = useState()
  const[email, SetEmail] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Name: ${Name}`)
    alert(`email: ${email}`)
  };
  const changeHandlerName = (event) => {
    SetName(event.target.value)
  }
  const changeHandlerEmail = (event) => {
    SetEmail(event.target.value)
  }

  return (
    <div className="App">
      <h3 className ="title"> 
          Contacts 
      </h3>
        <MinHeightTextarea label="minimum height" rowsMin={ 5 } placeholder="Minimum 3 rows" className="form_position"/>
      <form onSubmit={ submitHandler }>
        <TextField className="filledButton2"
          id="Name"
          label="Name"
          variant="filled"
          color="secondary"  
          value={ Name }
          onChange={ changeHandlerName }      
        />
        <TextField className="filledButtonemail2"
          id="Email"
          label="email"
          variant="filled"
          color="secondary"  
          value={ email }
          onChange={ changeHandlerEmail }      
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