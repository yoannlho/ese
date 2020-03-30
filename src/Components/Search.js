// Components/Search.js

import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

    return (
	<div>
     	<Button  onClick={() => {
        window.location = "https://www.esiea.fr/esiea-secure-edition-2017"
      }}
variant="contained" size="medium" color="primary" className={classes.margin}>
    	Plus d'info ici
	</Button>
	</div>
        )
   
}
