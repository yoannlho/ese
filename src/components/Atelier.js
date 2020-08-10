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
  const [textarea, setTextArea] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`firstName: ${firstName}`)
    alert(`lastName: ${lastName}`)
    alert(`email: ${email}`)
    alert(`telephone: ${telephone}`)
    alert(`studentcard: ${studentcard}`)
    alert(`genre: ${gender}`)
    alert(`Textarea: ${textarea}`)
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
  const changeHandlerTextarea = (event) => {
    setTextArea(event.target.value)
  }

  return (
    <div className="App">
      <h3 className="title_atelier">
        Inscription
      </h3>
      <form className="flex-container" onSubmit={ submitHandler }>
      <h6>Les champs obligatoires sont précédés d'une étoile *</h6>
        <TextField className="filled_buttonfirst"
          id="first_name"
          label="Prénom"
          variant="filled"
          color="secondary" 
          required
          type="text"
          value={ firstName }
          onChange={ changeHandlerFirstName }      
        />
        <TextField className="filled_buttonlast"
          id="last_name"
          label="Nom"
          variant="filled"
          color="secondary"
          required
          type="text"
          value={ lastName }
          onChange={ changeHandlerLastName }      
        />
        <TextField className="filled_buttonemail"
          id="email"
          label="Adresse Email"
          variant="filled"
          color="secondary" 
          required
          type="email"
          value={ email }
          onChange={ changeHandlerEmail }      
        />
        <TextField className="filled_buttontelephone"
          id="telephone"
          label="téléphone"
          variant="filled"
          color="secondary"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={ telephone }
          onChange={ changeHandlerTelephone }  
        />
        <TextField className="filled_buttonstudentcard"
          id="student_card"
          label="Numéro de carte d'étudiant"
          variant="filled"
          color="secondary"
          type="text"
          value={ studentcard }
          onChange={ changeHandlerStudentcard }  
        />
        <FormControl component="fieldset" className="gender_position">
          <FormLabel component="legend" className="title_gender">Genre</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={ gender } onChange={ changeHandlerGender }>
            <FormControlLabel value="male" control={<Radio />} label="Homme" />
            <FormControlLabel value="female" control={<Radio />} label="Femme" />
          </RadioGroup>
        </FormControl>
        <TextField className="form_position2"
        label="Suggestions d'idées d'atelier"
        multiline
        rowsMax={ 10 }
        rows= { 10 }
        variant="filled"
        color="secondary"
        value={ textarea } 
        onChange={ changeHandlerTextarea }
        />
        <Button
            variant="contained"
            color="primary"
            type="submit"
            className="button_position"
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

