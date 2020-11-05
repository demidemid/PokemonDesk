import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';
import LogoSvg from '../../images/logo.svg';

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
    const isShowCssClass = isShowen ? s.show : ``;

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
              <li className={cn(s.menuItem, s.active)}>
                <a className={s.menuLink} href="#Home">
                  Home
                </a>
              </li>
              <li className={cn(s.menuItem)}>
                <a className={s.menuLink} href="#Pokedex">
                  Pokedex
                </a>
              </li>
              <li className={cn(s.menuItem)}>
                <a className={s.menuLink} href="#Legendarios">
                  Legendarios
                </a>
              </li>
              <li className={cn(s.menuItem)}>
                <a className={s.menuLink} href="#Documentacion">
                  Documentacion
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
