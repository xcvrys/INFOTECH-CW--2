/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useMemo } from 'react';
import style from '../../style/css/PageWindow.Module.css';

const Web: FC<WebProps> = ({ onDelete, link }) => {
  const initialPagePosition = useMemo(
    () => ({
      top: Math.floor(Math.random() * (300 - 50) + 50),
      left: Math.floor(Math.random() * (500 - 50) + 50),
    }),
    []
  );

  return (
    <div id="pageWindow" style={initialPagePosition}>
      <strong>
        <div className={style.titleBar}>
          <div className={style.titleBarTitle}>{link}</div>
          <div className={style.titleBarClose} onClick={onDelete} />
          <div className={style.titleBarMax} />
          <div className={style.titleBarMin} />
        </div>
      </strong>
      <webview id="webview" src={link} />
    </div>
  );
};

export interface WebProps {
  onDelete: () => void;
  link: string;
}

export default Web;
