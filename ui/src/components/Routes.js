import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </main>
  );
};

export default Routes;
