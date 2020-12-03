import React, { ReactNode, useState } from 'react';
import cn from 'classnames';
import s from './FilterSelect.module.scss';
import ArrowFilter from './assets/ArrowFilter.png';

interface IFilterSelectProps {
  children: ReactNode;
  title: string;
  isAdaptive?: boolean;
}

const FilterSelect: React.FC<IFilterSelectProps> = ({ isAdaptive = false, children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className={s.root}>
      <button className={s.buttonTitle} type="button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img className={s.arrowFilter} src={ArrowFilter} alt="arrow button" />
      </button>
      <div className={cn(s.content, !isOpen || s.show)}>{children}</div>
    </section>
  );
};

export default FilterSelect;
