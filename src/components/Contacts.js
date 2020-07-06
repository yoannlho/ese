import React, { useState } from 'react';
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
      <form className="flex_container" onSubmit={ submitHandler }>
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
          label="Adresse Email"
          variant="filled"
          color="secondary"  
          value={ email }
          onChange={ changeHandlerEmail } 
        />
        <TextField className="form_position"
        label="Votre message"
        multiline
        rowsMax={ 10 }
        rows= { 10 }
        variant="filled"
        color="secondary"
        value={ textarea } 
        onChange={ changeHandlerTextarea }
        />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            label="envoyer"
            className="buttonPosition2"
            endIcon={<SendIcon />}
         
            >
                Envoyer
          
          </Button>
      </form>
    </div>
  )
}

export default Contacts;