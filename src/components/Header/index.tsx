import React, { useState } from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import s from './Header.module.scss';
import LogoSvg from '../../images/logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header: React.FC = () => {
  const [isShowen, setIsShowen] = useState(false);
  const isShowCssClass: string = isShowen ? s.show : ``;

  const path = usePath();

  return (
    <header className={cn(s.header, isShowCssClass)}>
      <div className={cn(s.content)}>
        <div className={cn(s.logo, isShowCssClass)}>
          <LogoSvg />
        </div>

        <nav className={s.menu}>
          <button
            className={cn(s.menuButton, isShowCssClass)}
            onClick={() => {
              setIsShowen(!isShowen);
            }}
            type="button">
            <span className={s.buttonIcon}>Открыть меню</span>
          </button>

          <ul className={cn(s.menuList, isShowCssClass)}>
            {GENERAL_MENU.map(({ title, link }) => (
              <li className={s.menuItem} key={title}>
                <A href={link} className={cn({ [s.active]: link === path })}>
                  {title}
                </A>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
