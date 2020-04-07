import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404';
import Landing from './components/Landing';
//import logo from './picture/ese.svg';
//import './App.css';
//import OutsideLinkButton from './components/outsideLinkButton/OutsideLinkButton';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Landing }/>

        <Route component={ Error404 }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

