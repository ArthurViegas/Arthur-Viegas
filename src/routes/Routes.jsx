import React from 'react';
import { Route, Switch } from 'react-router';
import Main from '../pages/Main';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Main } />
    </Switch>
  )
}

export default Routes;
