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
        gender: '',
        studentcard: '',
        textarea: ''
    };
    this.changeHandlerFirstName = this.changeHandlerFirstName.bind(this);
    this.changeHandlerLastName = this.changeHandlerLastName.bind(this);
    this.changeHandlerEmail = this.changeHandlerEmail.bind(this);
    this.changeHandlerTelephone = this.changeHandlerTelephone.bind(this);
    this.changeHandlerGender = this.changeHandlerGender.bind(this);
    this.changeHandlerStudentcard = this.changeHandlerStudentcard.bind(this);
    this.changeHandlerTextarea = this.changeHandlerTextarea.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeHandlerFirstName(event) { 
    this.setState({firstName: event.target.value});
  }
  changeHandlerLastName(event) {
    this.setState({lastName: event.target.value});
  }
  changeHandlerEmail(event) {
    this.setState({email: event.target.value});
  }
  changeHandlerTelephone(event) {
    this.setState({telephone: event.target.value});
  }
  changeHandlerGender(event) {
    this.setState({gender: event.target.value});
  }
  changeHandlerStudentcard(event) {
    this.setState({studentcard: event.target.value});
  }
  changeHandlerTextarea(event) {
    this.setState({textarea: event.target.value});
  }

  handleSubmit(event) {
    alert('Le prénom a été soumis : ' + this.state.firstName);
    alert('Le nom de famille a été soumis : ' + this.state.lastName);
    alert('L email a été soumis : ' + this.state.email);
    alert('Le téléphone a été soumis : ' + this.state.telephone);
    alert('Le genre a été soumis : ' + this.state.gender);
    alert('Le numéro de carte d étudiant a été soumis : ' + this.state.studentcard);
    alert('La zone de texte a été soumis : ' + this.state.textarea);

    var result = Array('Le prénom a été soumis : ' + this.state.firstName, 
    'Le nom de famille a été soumis : ' + this.state.lastName,
    'L email a été soumis : ' + this.state.email,
    'Le téléphone a été soumis : ' + this.state.telephone,
    'Le genre a été soumis : ' + this.state.gender,
    'Le numéro de carte d étudiant a été soumis : ' + this.state.studentcard,
    'La zone de texte a été soumis : ' + this.state.textarea)
    document.getElementById("text").innerHTML = result
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
            onChange={ this.changeHandlerFirstName }      
          />
          <TextField className="filled_buttonlast"
            id="last_name"
            label="Nom"
            variant="filled"
            color="secondary"
            required
            type="text"
            value={ this.lastName }
            onChange={ this.changeHandlerLastName }      
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
            onChange={ this.changeHandlerEmail }      
          />
          <TextField className="filled_buttontelephone"
            id="telephone"
            label="téléphone"
            variant="filled"
            color="secondary"
            type="tel"
            pattern="[0-9]{10}"
            value={ this.telephone }
            onChange={ this.changeHandlerTelephone }  
          />
          <TextField className="filled_buttonstudentcard"
            id="student_card"
            label="Numéro de carte d'étudiant"
            variant="filled"
            color="secondary"
            type="text"
            value={ this.studentcard }
            onChange={ this.changeHandlerStudentcard }  
          />
          <FormControl component="fieldset" className="gender_position">
            <FormLabel component="legend" className="title_gender">Genre</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={ this.gender } onChange={ this.changeHandlerGender }>
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
          onChange={ this.changeHandlerTextarea }
          />
          <span id="text"></span>
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