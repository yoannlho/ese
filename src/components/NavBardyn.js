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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
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
                <Link classes={{root : classes.root}} to="/">Accueil</Link>
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