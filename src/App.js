import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import Landing from './components/Landing';
import Atelier from './components/Atelier';
import './App.css';
import Intervenant from './components/Intervenant';
import Contacts from './components/Contacts';
import Display from './components/Display';
import NavBardyn from './components/navBar/NavBardyn';
import AppStyle from './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBardyn />
      <div className="content">
        <header className="App-header">
          <Switch className={ AppStyle.App }>
              <Route exact path="/" component={ Landing }/>
              <Route exact path="/Atelier" component={ Atelier }/>
              <Route exact path="/Intervenant" component={ Intervenant }/>
              <Route exact path="/Contacts" component={ Contacts }/>
              <Route exact path="/Display" component={ Display }/>
              <Route component={ Error404 }/>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

