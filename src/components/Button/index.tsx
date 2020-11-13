import React from 'react';
import cn from 'classnames';
// eslint-disable-next-line import/no-unresolved
import { ClassValue } from 'classnames/types';
import s from './Button.module.scss';
import { ButtonColors, ButtonProps, ButtonSizes, ICssClassName } from './Button.entities';

const COLORS: ICssClassName[] = [
  {
    name: ButtonColors.GREEN,
    class: s.green,
  },
  {
    name: ButtonColors.YELLOW,
    class: s.yellow,
  },
];

const SIZES: ICssClassName[] = [
  {
    name: ButtonSizes.SMALL,
    class: s.small,
  },
  {
    name: ButtonSizes.MEDIUM,
    class: s.medium,
  },
  {
    name: ButtonSizes.BIG,
    class: s.big,
  },
  {
    name: ButtonSizes.AUTO,
    class: s.auto,
  },
];

const Button: React.FC<ButtonProps> = ({ children, onClick, buttonColor, type = `button`, size }) => {
  const checkCssClass: (array: ICssClassName[], inputType: any) => ClassValue = (
    array: ICssClassName[],
    inputType: any,
  ) => {
    const res: ClassValue = array.find((item: ICssClassName) => item.name === inputType);

    return res ? res.class : array[0].class;
  };

  return (
    <button
      className={cn(s.button, checkCssClass(COLORS, buttonColor), checkCssClass(SIZES, size))}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
