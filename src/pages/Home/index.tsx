/* eslint-disable no-console */
import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/_common/Button';
import { ButtonColors, ButtonSizes } from '../../components/_common/Button/Button.entities';
import Parallax from '../../components/Parallax';
import { LinkRoutes } from '../../routes';
import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.parallaxWrapper}>
        <Parallax />
      </div>
      <section className={s.content}>
        <h2 className={s.title}>
          <strong>Find</strong> all your favorite <strong>Pokemon</strong>
        </h2>
        <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          onClick={() => navigate(LinkRoutes.POKEDEX)}
          buttonColor={ButtonColors.GREEN}
          size={ButtonSizes.BIG}
          type="reset">
          See pokemons
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
