import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cn from 'classnames';
import s from './Main.module.scss';
import Heading from '../Heading';
import HomePage from '../../pages/Home';
import Pokedex from '../../pages/Pokedex';

const Main = () => {
  return (
    <>
      <main className={cn(s.main)}>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/pokedex" component={Pokedex} />
          </Switch>
        </BrowserRouter>
      </main>
      <Heading level={1}>Hello!</Heading>
      <Heading level={2}>Hello!</Heading>
      <Heading level={3}>
        <a href="##">Hello!</a>
      </Heading>
    </>
  );
};

export default Main;
