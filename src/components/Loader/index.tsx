import React, { ReactNode } from 'react';
import s from './Loader.module.scss';
import PokeBall from '../Parallax/assets/Pokeball2.png';

interface ILoaderProps {
  children: ReactNode;
}

const Loader: React.FC<ILoaderProps> = ({ children }) => {
  return (
    <article className={s.root}>
      <img className={s.pokeball} src={PokeBall} alt="PokeBall" />
      <span>{children}</span>
    </article>
  );
};

export default Loader;
