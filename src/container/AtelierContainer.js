import React, { Component } from "react";
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import '../components/filecss/AtelierStyle.css';
import SendIcon from '@material-ui/icons/Send';

class AtelierContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        gender: ['Male'],
        studentcard: '',
        textarea: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) { 
    this.setState({firstName: event.target.firstName});
    this.setState({lastName: event.target.lastName});
    this.setState({email: event.target.email});
    this.setState({telephone: event.target.telephone});
    this.setState({gender: event.target.gender});
    this.setState({studentcard: event.target.studentcard});
    this.setState({textarea: event.target.textarea});
  }

  handleSubmit(event) {
    alert('Le prénom a été soumis : ' + this.state.firstName);
    event.preventDefault();
  }
  render() {
    return (
      <form className="flex-container" onSubmit={ this.handleSubmit }>
          <h3>
            Inscription
          </h3>
          <h6>Les champs obligatoires sont précédés d'une étoile *</h6>
          <TextField className="filled_buttonfirst"
            id="first_name"
            label="Prénom"
            variant="filled"
            color="secondary" 
            required
            type="text"
            value={ this.firstName }
            onChange={ this.handleChange }      
          />
          <span id="text"></span>
          <TextField className="filled_buttonlast"
            id="last_name"
            label="Nom"
            variant="filled"
            color="secondary"
            required
            type="text"
            value={ this.lastName }
            onChange={ this.handleChange }      
          />
          <TextField className="filled_buttonemail"
            id="email"
            label="Adresse Email"
            variant="filled"
            color="secondary" 
            required
            type="email"
            placeholder="mail@serveur.com"
            value={ this.email }
            onChange={ this.handleChange }      
          />
          <TextField className="filled_buttontelephone"
            id="telephone"
            label="téléphone"
            variant="filled"
            color="secondary"
            type="tel"
            pattern="[0-9]{10}"
            value={ this.telephone }
            onChange={ this.handleChange }  
          />
          <TextField className="filled_buttonstudentcard"
            id="student_card"
            label="Numéro de carte d'étudiant"
            variant="filled"
            color="secondary"
            type="text"
            value={ this.studentcard }
            onChange={ this.handleChange }  
          />
          <FormControl component="fieldset" className="gender_position">
            <FormLabel component="legend" className="title_gender">Genre</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={ this.gender } onChange={ this.handleChange }>
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
          value={ this.textarea } 
          onChange={ this.handleChange }
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
    );
  }
}

export default AtelierContainer;