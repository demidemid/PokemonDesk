import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button';
import { ButtonColors, ButtonSizes } from '../../components/Button/Button.entities';
import NotFoundNumbersSvg from './assets/404.svg';
import TeamRocketSvg from './assets/teamRocket.svg';

import s from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <article className={s.root}>
      <div className={s.imageWrapper}>
        <div className={s.numbers}>
          <NotFoundNumbersSvg />
        </div>
        <div className={s.teamRocket}>
          <TeamRocketSvg />
        </div>
      </div>

      <p className={s.errorText}>
        <span className={s.errorTextColor}>The rocket team</span>
        has won this time.
      </p>

      <Button size={ButtonSizes.SMALL} buttonColor={ButtonColors.YELLOW} onClick={() => navigate('/')} type="button">
        Return
      </Button>
    </article>
  );
};

export default NotFoundPage;
