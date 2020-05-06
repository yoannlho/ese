import React from 'react';
import logo from '../picture/ese.svg';
//import '../App.css';
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormHelperText, Input } from '@material-ui/core';
import RadioButtonsGroup from './formControl/RadioGroup';
import BasicTextFields from './formControl/NameForm';
import ContainedButtons from './formControl/Button';
import './filecss/AtelierStyle.css';

const Atelier = () => {
  return (
    <div className="App">
      <span>
        Inscription                  
      </span>
      <p>
        <BasicTextFields labelname="Nom" labelfirstname="Prénom"/>
      </p>
      <p>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </p>
      <p>
        <RadioButtonsGroup/>
      </p>
      <p>
        <ContainedButtons/>
      </p>
      <p>
        Atelier :                   
      </p>
      <p>
        1) Workshop sur CyberRange (CTF guidé avec présentation des outils)
      </p>
      <p>
        2) Démo OSINT
      </p>
      <p>
        Il est prévu que ces deux ateliers se déroulent en ligne via la plateforme de vision conférence jitsy.
      </p>
    </div>
  )
}

export default Atelier;

