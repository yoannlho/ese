import React from 'react';
import logo from '../picture/ese.svg';
import '../App.css';
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormHelperText, Input } from '@material-ui/core';
//import FormControl from './formControl/FormControl';

const Atelier = () => {
  return (
    <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div class="wrapper">  
                    <div class="container">
                        <ul class="menu" rel="sam1">  
                            <li class="active"><Link to="/">Accueil</Link></li>  
                            <li><Link to="/Atelier">Atelier</Link></li>
                            <li><Link to="/Intervenant">Intervenant</Link></li>
                            <li><Link to="/Contacts">Contacts</Link></li>
                        </ul>
                    </div>
                </div>
                <p>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                  </FormControl>
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
            </header>
    </div>
  )
}

export default Atelier;

