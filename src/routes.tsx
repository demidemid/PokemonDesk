import React from 'react';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Pokedex from './pages/Pokedex';

interface IMenuItem {
  title: string;
  link: string;
  component: () => JSX.Element;
}

// eslint-disable-next-line no-shadow
export enum LinkRoutes {
  HOME = `/`,
  POKEDEX = `/pokedex`,
  LEGENDARIOS = `/legendarios`,
  DOCUMENTACION = `/documentacion`,
}

export const GENERAL_MENU: IMenuItem[] = [
  {
    title: `Home`,
    link: LinkRoutes.HOME,
    component: () => <HomePage />,
  },
  {
    title: `Pokedex`,
    link: LinkRoutes.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: `Legendarios`,
    link: LinkRoutes.LEGENDARIOS,
    component: () => <NotFoundPage />,
  },
  {
    title: `Documentacion`,
    link: LinkRoutes.DOCUMENTACION,
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
