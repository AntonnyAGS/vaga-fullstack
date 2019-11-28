import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Search from './pages/Search';

export default function Routes() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/create"  component={Create} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}