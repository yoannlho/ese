import React from 'react';
import logo from '../picture/ese.svg';
import '../App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
//import routes from './Route/routes';
// import Atelier from './components/Atelier';
// import Intervenant from './components/Intervenant';
// import Contacts from './components/Contacts';


function Atelier() {
  return (
  <Router>
    <div className="App">
      <routes />
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
          <p>Atelier</p>
        </header>
    </div>
 </Router>
  );
}

export default Atelier;