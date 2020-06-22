import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

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
          className={ classes.button }
          >
              Send
          
        </Button>
      </form>
    </div>
  )
}

export default Atelier;

