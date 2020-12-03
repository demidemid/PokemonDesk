import React, { ReactNode, useState } from 'react';
import cn from 'classnames';
import s from './Popup.module.scss';

interface IPopupProps {
  children: ReactNode;
  isActive?: boolean;
  onClick?: any;
}

const Popup: React.FC<IPopupProps> = ({ isActive = false, children, onClick }) => {
  const [activePopup, setActivePopup] = useState(isActive);

  if (isActive && !activePopup) {
    setActivePopup(isActive);
  }

  const handlePopupClose = (value: boolean) => {
    setActivePopup(value);
    onClick();
  };

  return (
    <article className={cn(s.root, !activePopup || s.active)} onClick={() => handlePopupClose(false)}>
      <div className={s.contentWrapper} onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handlePopupClose(!activePopup)} type="button" className={s.crossButton}>
          Закрыть
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </article>
  );
};

export default Popup;
