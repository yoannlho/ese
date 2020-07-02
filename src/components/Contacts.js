import React, { useState } from 'react';
import MinHeightTextarea from './FormContact/MinHeightTextarea';
import './filecss/ContactStyle.css';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Contacts = () => {
  const[Name, SetName] = useState()
  const[email, SetEmail] = useState()
  const[textarea, SetTextarea] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Name: ${Name}`)
    alert(`email: ${email}`)
    alert(`textarea: ${textarea}`)
  };
  const changeHandlerName = (event) => {
    SetName(event.target.value)
  }
  const changeHandlerEmail = (event) => {
    SetEmail(event.target.value)
  }
  const changeHandlerTextarea = (event) => {
    SetTextarea(event.target.value)
  }

  return (
    <div className="App">
      <h3 className ="title"> 
          Contacts 
      </h3>
      <form onSubmit={ submitHandler }>
        <TextField className="form_position"
        label="Votre message"
        multiline
        rowsMax={ 10 }
        rows= { 5 }
        placeholder="Votre message" 
        value={ textarea } 
        onChange={ changeHandlerTextarea }
        />
        <TextField className="filledButtonname2"
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