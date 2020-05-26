import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../picture/ese.svg';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavStyle from './NavBardyn.module.css';

const NavBardyn = () => {
  return (
    <div className={ NavStyle.root }>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={ NavStyle.menuButton } color="inherit" aria-label="menu">
            <img src={ logo } className="App-logo" alt="logo" />
          </IconButton>
          <Link to="/">
            <Button>Accueil</Button> 
          </Link>

          <Link to="/Atelier">
            <Button>Atelier</Button>
          </Link>

          <Link to="/Intervenant">
            <Button>Intervenant</Button>
          </Link>

          <Link to="/Contacts">
            <Button>Contact</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBardyn;