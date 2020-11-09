import React from 'react';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Pokedex from './pages/Pokedex';

interface IMenuItem {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IMenuItem[] = [
  {
    title: `Home`,
    link: `/`,
    component: () => <HomePage />,
  },
  {
    title: `Pokedex`,
    link: `/pokedex`,
    component: () => <Pokedex />,
  },
  {
    title: `Legendarios`,
    link: `/legendarios`,
    component: () => <NotFoundPage />,
  },
  {
    title: `Documentacion`,
    link: `/documentacion`,
    component: () => <NotFoundPage />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IMenuItem) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
