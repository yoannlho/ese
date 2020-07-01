import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core';
import './filecss/AtelierStyle.css';
import SendIcon from '@material-ui/icons/Send';

const Atelier = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`firstName: ${firstName}`)
    alert(`lastName: ${lastName}`)
  };
  const changeHandlerFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const changeHandlerLastName = (event) => {
    setLastName(event.target.value)
  }

  return (
    <div className="App">
      <h3 className="title">
        Inscription                  
      </h3>
      <form onSubmit={ submitHandler }>
        <TextField className="filledButton1"
          id="first_name"
          label="First Name"
          variant="filled"
          color="secondary"  
          value={ firstName }
          onChange={ changeHandlerFirstName }      
        />
        <TextField className="filledButton2"
          id="first_name"
          label="First Name"
          variant="filled"
          color="secondary"  
          value={ lastName }
          onChange={ changeHandlerLastName }      
        />
        <span className="buttonPosition">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            //label="envoyer"
            endIcon={<SendIcon />}
         
            >
                Send
          
          </Button>
        </span>
      </form>
    </div>
  )
}

export default Atelier;

