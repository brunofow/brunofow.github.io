import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/' } exact component={Home} />
        <Route path={process.env.PUBLIC_URL + "/portfolio"} exact component={Portfolio} />
        <Route path={process.env.PUBLIC_URL + "/contato"} exact component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}

