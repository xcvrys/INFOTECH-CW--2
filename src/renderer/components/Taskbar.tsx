/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import useDesktopAppStore from '../../state/DesktopAppStore';
import style from '../../style/css/Taskbar.Module.css';
import win from './win.png';

const Taskbar: FC = () => {
  const pagesTaskbarDisplay = useDesktopAppStore((s) => s.pagesTaskbarDisplay);
  const showMenu = useDesktopAppStore((s) => s.showDesktop);

  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    <>
      <div className={style.taskbar}>
        <div
          className={style.green}
          onClick={() => {
            useDesktopAppStore.getState().toggleStartMenu();
          }}
        >
          <img src={win} alt="Windows" />
          <span>Windows</span>
        </div>
        <div className={style.taskbarContent}>
          {Object.entries(pagesTaskbarDisplay).map(([key, value]) => (
            <button
              type="button"
              key={nanoid(10)}
              onClick={() => useDesktopAppStore.getState().setFocusedPage(key)}
            >
              <p>{value}</p>
            </button>
          ))}
        </div>
        <img src="https://image.ibb.co/d1cJ25/unnamed.png" alt="speaker" />
        <img
          src="https://image.ibb.co/b6bxUk/bluetooth_logo.png"
          alt="bluetooth"
        />
        <p>{time}</p>
      </div>
      {showMenu ? <div className={style.Menu} /> : <div />}
    </>
  );
};

export default Taskbar;
