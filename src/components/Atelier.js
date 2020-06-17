import React, { useState } from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import './filecss/AtelierStyle.css';

const Atelier = () => {
  const [firstName, setFirstName] = useState() 
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`firstName: ${firstName}`)
  };
  const changeHandler = (event) => {
    setFirstName(event.target.value)
  }

  return (
    <div className="App">
      <h3 className="title">
        Inscription                  
      </h3>
      <form onSubmit={ submitHandler }>
        <TextField className="filledButton"
          id="first_name"
          label="First Name"
          variant="filled"
          color="secondary"  
          value={ firstName }
          onChange={ changeHandler }      
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          label="envoyer"
          endIcon={<Icon>send</Icon>}
          

        
        />
      </form>
    </div>
  )
}

export default Atelier;

