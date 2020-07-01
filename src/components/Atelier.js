import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core';
import './filecss/AtelierStyle.css';
import SendIcon from '@material-ui/icons/Send';

const Atelier = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [telephone, setTelephone] = useState()
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
      </form>
    </div>
  )
}

export default Atelier;

