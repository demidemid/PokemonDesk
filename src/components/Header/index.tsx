import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './Header.module.scss';
import LogoSvg from '../../images/logo.svg';

interface IMenu {
  id: number;
  name: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    name: `Home`,
    link: `/`,
  },
  {
    id: 2,
    name: `Pokedex`,
    link: `/pokedex`,
  },
  {
    id: 3,
    name: `Legendarios`,
    link: `/legendarios`,
  },
  {
    id: 4,
    name: `Documentacion`,
    link: `/documentacion`,
  },
];

class Header extends React.PureComponent<{}, { isShowen: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { isShowen: false };
  }

  handleToggle = () => {
    const { isShowen } = this.state;
    this.setState(() => {
      return { isShowen: !isShowen };
    });
  };

  render() {
    const { isShowen } = this.state;
    const isShowCssClass: string = isShowen ? s.show : ``;

    return (
      <header className={cn(s.header, isShowCssClass)}>
        <div className={cn(s.content)}>
          <div className={cn(s.logo, isShowCssClass)}>
            <LogoSvg />
          </div>
          <nav className={s.menu}>
            <button className={cn(s.menuButton, isShowCssClass)} onClick={this.handleToggle} type="button">
              <span className={s.buttonIcon}>Открыть меню</span>
            </button>
            <ul className={cn(s.menuList, isShowCssClass)}>
              {MENU.map(({ id, name, link }) => (
                <li className={cn(s.menuItem, name === `Home` ? s.active : ``)} key={id}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
