import React, { useState } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import './filecss/AtelierStyle.css';
import SendIcon from '@material-ui/icons/Send';

const Atelier = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [telephone, setTelephone] = useState()
  const [gender, setGender] = useState('Male')
  const [studentcard, setStudentcard] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`firstName: ${firstName}`)
    alert(`lastName: ${lastName}`)
    alert(`email: ${email}`)
    alert(`telephone: ${telephone}`)
    alert(`studentcard: ${studentcard}`)
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
  const changeHandlerStudentcard = (event) => {
    setStudentcard(event.target.value)
  }

  return (
    <div className="App">
      <h3 className="title">
        Inscription                  
      </h3>
      <form className="flex-container" onSubmit={ submitHandler }>
        <TextField className="filledButtonfirst"
          id="first_name"
          label="Prénom"
          variant="filled"
          color="secondary"  
          value={ firstName }
          onChange={ changeHandlerFirstName }      
        />
        <TextField className="filledButtonlast"
          id="last_name"
          label="Nom"
          variant="filled"
          color="secondary"  
          value={ lastName }
          onChange={ changeHandlerLastName }      
        />
        <TextField className="filledButtonemail"
          id="email"
          label="Adresse Email"
          variant="filled"
          color="secondary"  
          value={ email }
          onChange={ changeHandlerEmail }      
        />
        <TextField className="filledButtontelephone"
          id="telephone"
          label="téléphone"
          variant="filled"
          color="secondary"  
          value={ telephone }
          onChange={ changeHandlerTelephone }  
        />
        <TextField className="filledButtonstudentcard"
          id="student_card"
          label="Numéro de carte d'étudiant"
          variant="filled"
          color="secondary"  
          value={ studentcard }
          onChange={ changeHandlerStudentcard }  
        />
        <FormControl component="fieldset" className="genderposition">
          <FormLabel component="legend" className="titlegender">Genre</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={ gender } onChange={ changeHandlerGender }>
            <FormControlLabel value="male" control={<Radio />} label="Homme" />
            <FormControlLabel value="female" control={<Radio />} label="Femme" />
          </RadioGroup>
        </FormControl>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            className="buttonPosition"
            //label="envoyer"
            endIcon={<SendIcon />}
         
            >
                Envoyer
          
          </Button>
      </form>
    </div>
  )
}

export default Atelier;

