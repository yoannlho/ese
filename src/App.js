import React from 'react';
import logo from './picture/ese.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OutsideLinkButton from './components/outsideLinkButton/OutsideLinkButton';
import Atelier from './components/Atelier';
import Intervenant from './components/Intervenant';
import Contacts from './components/Contacts';


function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div class="wrapper">  
            <div class="container">
              <ul class="menu" rel="sam1">  
                <li class="active"><Link to="/">Accueil</Link></li>  
                <li><Link to="/Atelier">Atelier</Link></li>
                <li><Link to="/Intervenant">Intervenant</Link></li>
                <li><Link to="/Contacts">Contacts</Link></li>
              </ul>
            </div>
          </div>
            <p>
                ESIEA SECURE EDITION 2020
            </p>
            <OutsideLinkButton urlLink="https://www.esiea.fr/esiea-secure-edition-2017/" labelButton="Plus d'info ici"/>
            {/* <a
              className="App-link"
              href="https://www.esiea.fr/esiea-secure-edition-2017/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plus d'info sur le site ESIEA
            </a> */}
        </header>
        {/* <Switch>
        <Route path="/Atelier">
          <Atelier />
        </Route>
        <Route path="/Intervenant">
          <Intervenant />
        </Route>
        <Route path="/">
          <Accueil />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
      </Switch> */}
    </div>
  </Router>
  );
}

/* ############# Formulaire non fonctionnelle###############" */

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
   <div className="NameForm">
     <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
   </div>
    );
  }
}
*/

export default App;

