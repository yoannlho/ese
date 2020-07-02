import React, { useState } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import './filecss/AtelierStyle.css';
import SendIcon from '@material-ui/icons/Send';
import AtelierStyle from './filecss/AtelierStyle.css';


const Atelier = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [telephone, setTelephone] = useState()
  const [gender, setGender] = useState('Male')
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`firstName: ${firstName}`)
    alert(`lastName: ${lastName}`)
    alert(`email: ${email}`)
    alert(`telephone: ${telephone}`)
  };
  const changeHandlerFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const changeHandlerLastName = (event) => {
    setLastName(event.target.value)
  }
  const changeHandlerEmail = (event) => {
    setEmail(event.target.value)
  }
  const changeHandlerTelephone = (event) => {
    setTelephone(event.target.value)
  }
  const changeHandlerGender = (event) => {
    setGender(event.target.value)
  }

  return (
    <div className="App">
      <h3 className="title">
        Inscription                  
      </h3>
      <form onSubmit={ submitHandler }>
        <TextField className="filledButtonfirst"
          id="first_name"
          label="First Name"
          variant="filled"
          color="secondary"  
          value={ firstName }
          onChange={ changeHandlerFirstName }      
        />
        <TextField className="filledButtonlast"
          id="last_name"
          label="Last Name"
          variant="filled"
          color="secondary"  
          value={ lastName }
          onChange={ changeHandlerLastName }      
        />
        <TextField className="filledButtonemail"
          id="email"
          label="Email"
          variant="filled"
          color="secondary"  
          value={ email }
          onChange={ changeHandlerEmail }      
        />
        <TextField className="filledButtontelephone"
          id="telephone"
          label="telephone"
          variant="filled"
          color="secondary"  
          value={ telephone }
          onChange={ changeHandlerTelephone }  
        />
        <span className="buttonPosition">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            //label="envoyer"
            endIcon={<SendIcon />}
         
            >
                Send
          
          </Button>
        </span>
        <FormControl component="fieldset" className= { AtelierStyle.genderposition }>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={ gender } onChange={ changeHandlerGender }>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </form>
    </div>
  )
}

export default Atelier;

