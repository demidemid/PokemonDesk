import React from 'react';
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
    link: `#Home`,
  },
  {
    id: 2,
    name: `Pokedex`,
    link: `#Pokedex`,
  },
  {
    id: 3,
    name: `Legendarios`,
    link: `#Legendarios`,
  },
  {
    id: 4,
    name: `Documentacion`,
    link: `#Documentacion`,
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
                  <a className={cn(s.menuLink)} href={link}>
                    {name}
                  </a>
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
