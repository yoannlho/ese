import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const BasicTextFields = (props) => {
  const classes = useStyles();
  const {labelname, labelfirstname} = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label={ labelname } />
      <TextField id="filled-basic" label={ labelfirstname } />
    </form>
  );
}

export default BasicTextFields;