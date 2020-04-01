import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Atelier from './components/Atelier';
import Intervenant from './components/Intervenant';
import Contacts from './components/Contacts';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={}>
    <IndexRoute component={} />
    <Route path="/Atelier" component={Atelier} />
    <Route path="/Intervenant" component={Intervenant} />
    <Route path="/Contacts" component={Contacts} />
  </Route>
);