import React from 'react';
import logo from './ese.svg';
import './App.css';
import Search from './Components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<Search/>
	<img src={logo} className="App-logo" alt="logo" />
	    <div class="wrapper">  
		    <div class="container"><ul class="menu" rel="sam1">  
   			 <li class="active"><a href="#">Qu'est ce que c'est</a></li>  
    			 <li><a href="#">Atelier</a></li>
   			 <li><a href="#">Intervenant</a></li>
   			 <li><a href="#">Contacts</a></li>
   					  </ul>
   		    </div>
    	   </div>

          <p>
            ESIEA SECURE EDITION 2020
          </p>
          <a
           className="App-link"
           href="https://www.esiea.fr/esiea-secure-edition-2017/"
           target="_blank"
           rel="noopener noreferrer"
          >
            Plus d'info sur le site ESIEA
          </a>
      </header>
    </div>
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

