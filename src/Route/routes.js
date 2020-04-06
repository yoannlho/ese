import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Atelier from './components/Atelier';
import Intervenant from './components/Intervenant';
import Contacts from './components/Contacts';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/Atelier" component={Atelier}></Route>
      <Route exact path="/Intervenant" component={Intervenant}></Route>
      <Route exact path="/Contacts" component={Contacts}></Route>
    </Switch>
  
  // <Route path="/" component={App}>
  //   <IndexRoute component={App} />
  //   <Route path="/Atelier" component={Atelier} />
  //   <Route path="/Intervenant" component={Intervenant} />
  //   <Route path="/Contacts" component={Contacts} />
  // </Route>
  );
}

export default routes;