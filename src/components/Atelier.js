import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
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
      <span>
        Inscription                  
      </span>
      <form onSubmit={ submitHandler }>
        <TextField 
          id="first_name"
          label="First Name"
          value={ firstName }
          onChange={ changeHandler }        
        />
        <Button 
          type="submit"
          label="envoyer"
        
        />
      </form>
    </div>
  )
}

export default Atelier;

