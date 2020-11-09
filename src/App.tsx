import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

const App = () => (
  <BrowserRouter>
    <Header />
    <Main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pokedex" component={Pokedex} />
      </Switch>
    </Main>
    <Footer />
  </BrowserRouter>
);

export default App;
