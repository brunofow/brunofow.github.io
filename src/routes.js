import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contato" exact component={Contato} />
    </BrowserRouter>
  )
}

