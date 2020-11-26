import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import PokedexPage from './pages/Pokedex';
import PokemonPage, { IPokemonPageProps } from './pages/Pokemon';

interface IMenuItem {
  title: string;
  link: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

// eslint-disable-next-line no-shadow
export enum LinkRoutes {
  HOME = `/`,
  POKEDEX = `/pokedex`,
  LEGENDARIOS = `/legendarios`,
  DOCUMENTACION = `/documentacion`,
  POKEMON = `/pokedex/:id`,
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
    component: () => <PokedexPage />,
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

const SECOND_ROUTES: IMenuItem[] = [
  {
    title: `Pokemon`,
    link: LinkRoutes.POKEMON,
    component: ({ id }: IPokemonPageProps) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (rops: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IMenuItem) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
