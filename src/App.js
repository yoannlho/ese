import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Error404 from './components/Error404';
import Landing from './components/Landing';
import Atelier from './components/Atelier';
import './App.css';
import Intervenant from './components/Intervenant';
import Contacts from './components/Contacts';
import NavBardyn from './components/NavBardyn';

function App() {
  return (
    <BrowserRouter>
      <NavBardyn />
      <div className="App">
        <header className="App-header">
          <ul class="menu" rel="sam1">  
            <li class="active"><Link to="/">Accueil</Link></li>  
            <li><Link to="/Atelier">Atelier</Link></li>
            <li><Link to="/Intervenant">Intervenant</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
          </ul>
        </header>
        <Switch>
            <Route exact path="/" component={ Landing }/>
            <Route exact path="/Atelier" component={ Atelier }/>
            <Route exact path="/Intervenant" component={ Intervenant }/>
            <Route exact path="/Contacts" component={ Contacts }/>
            <Route component={ Error404 }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

