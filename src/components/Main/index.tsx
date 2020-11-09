import React, { ReactNode } from 'react';
import cn from 'classnames';
import s from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <main className={cn(s.main)}>{children}</main>
    </>
  );
};

export default Main;
