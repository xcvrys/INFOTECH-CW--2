import React, { FC } from 'react';
import style from '../../style/css/WebShortcuts.Module.css';

const WebShortcuts: FC<WebShortcutsProps> = ({ openPage }) => {
  return (
    <>
      <div className={style.webContainer}>
        <div className={style.web}>
          <button
            type="button"
            onClick={() => {
              openPage('https://wp.pl');
            }}
          >
            <img src="https://www.wp.pl/favicon.ico" alt="wp" />
            <span>wp.pl</span>
          </button>
        </div>
        <div className={style.web}>
          <button
            type="button"
            onClick={() => {
              openPage('https://google.com');
            }}
          >
            <img src="https://google.com/favicon.ico" alt="google" />
            <span>google</span>
          </button>
        </div>
        <div className={style.web}>
          <button
            type="button"
            onClick={() => {
              openPage('https://youtube.com');
            }}
          >
            <img src="https://youtube.com/favicon.ico" alt="youtube" />
            <span>youtube</span>
          </button>
        </div>
      </div>
    </>
  );
};

interface WebShortcutsProps {
  openPage: (pageURL: string) => void;
}

export default WebShortcuts;
