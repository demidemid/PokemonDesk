import React from 'react';
import cn from 'classnames';
import s from './ProgressBar.module.scss';

interface IPogressBarProps {
  currentValue: number;
  maxValue: number;
}

const ProgressBar: React.FC<IPogressBarProps> = ({ currentValue = 0, maxValue }) => {
  const percent = (currentValue / maxValue) * 100;

  return (
    <div className={s.root}>
      <span className={cn(s.prorgress, percent >= 70 ? s.green : s.yellow)} style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
