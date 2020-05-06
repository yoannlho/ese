import React, { useState } from 'react';
import logo from '../picture/ese.svg';
//import '../App.css';
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormHelperText, Input, TextField, Button } from '@material-ui/core';
import RadioButtonsGroup from './formControl/RadioGroup';
import BasicTextFields from './formControl/NameForm';
import ContainedButtons from './formControl/Button';
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

