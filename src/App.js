import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import Landing from './components/Landing';
import logo from './picture/ese.svg';
import './App.css';
//import OutsideLinkButton from './components/outsideLinkButton/OutsideLinkButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={ Landing }/>

                      <Route component={ Error404 }/>
                    </Switch>
                  </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

