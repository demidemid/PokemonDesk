/* eslint-disable no-console */
import React from 'react';
import Button from '../../components/Button';
import { ButtonColors, ButtonSizes } from '../../components/Button/Button.entities';
import Parallax from '../../components/Parallax';
import s from './Home.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={s.parallaxWrapper}>
        <Parallax />
      </div>
      <section className={s.content}>
        <h2 className={s.title}>
          <strong>Find</strong> all your favorite <strong>Pokemon</strong>
        </h2>
        <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          onClick={() => console.log(`click button!`)}
          buttonColor={ButtonColors.YELLOW}
          size={ButtonSizes.AUTO}
          type="reset">
          See pokemons
        </Button>
      </section>
    </>
  );
};

export default HomePage;
