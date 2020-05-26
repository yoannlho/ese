import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from '../picture/ese.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2), 
  },
  title: {
    flexGrow: 1,
  },
}));

const ElevationScroll = (props) => {
  const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavBardyn = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <img src={ logo } className="App-logo" alt="logo" />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  
                </Typography>
                <Button>Accueil</Button> 
                <Link to="/Atelier" color="inherit">Atelier</Link>
                <Link to="/Intervenant" color="body2">Intervenant</Link>
                <Link to="/Contacts" color="body2">Contacts</Link>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
      </React.Fragment>
    </div>
  );
}

export default NavBardyn;