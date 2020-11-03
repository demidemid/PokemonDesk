import React from 'react';

import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(s.footer)}>
      <span className={cn(s.tagline)} role="img" aria-label="Heart">
        Make with ❤️
      </span>
      <a className={cn(s.teamLink)} href="##">
        Ours Team
      </a>
    </footer>
  );
};

export default Footer;
