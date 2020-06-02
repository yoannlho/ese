import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavStyle from './NavBardyn.module.css';
import logo from '../../picture/ese.svg';

const NavBardyn = () => {
  return (
    <div className={ NavStyle.root }>
      <AppBar position="static">
      <img src={ logo } className="App-logo" alt="logo" />
        <Toolbar>
          <IconButton edge="start" className={ NavStyle.menuButton } color="inherit" aria-label="menu"/>
          <Link className={ NavStyle.nav } to="/">
            <Button>Accueil</Button> 
          </Link>

          <Link className={ NavStyle.nav } to="/Atelier">
            <Button>Atelier</Button>
          </Link>

          <Link className={ NavStyle.nav } to="/Intervenant">
            <Button>Intervenant</Button>
          </Link>

          <Link className={ NavStyle.nav } to="/Contacts">
            <Button variant="contained" color="primary">Contact</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBardyn;