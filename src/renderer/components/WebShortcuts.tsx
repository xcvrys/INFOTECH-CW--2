import React, { FC } from 'react';
import style from '../../style/css/WebShortcuts.Module.css';

const WebShortcuts: FC<WebShortcutsProps> = ({ openPage }) => {
  // DO INNEGO PLIKU WYPIERDOLIĆ
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}`;
  // DO INNEGO PLIKU WYPIERDOLIĆ

  return (
    <>
      <div className={style.webContainer}>
        {/* LIST */}
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
        {/* LIST */}
      </div>

      {/* DO INNEGO PLIKU WYPIERDOLIĆ */}
      <div className={style.taskbar}>
        <img src="//i.imgur.com/PzXcMsP.png" alt="Windows" />

        <div className={style.taskbarContent}>
          <div>
            <svg width={24} height={24} fill="white" viewBox="0 0 24 24">
              <path d="M15 10.5a2.25 2.25 0 1 1-2.25-2.25A2.26 2.26 0 0 1 15 10.5Zm6-6.75v16.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-1.875H3a.75.75 0 1 1 0-1.5h1.5v-2.25H3a.75.75 0 1 1 0-1.5h1.5v-2.25H3a.75.75 0 1 1 0-1.5h1.5v-2.25H3a.75.75 0 0 1 0-1.5h1.5V3.75A1.5 1.5 0 0 1 6 2.25h13.5a1.5 1.5 0 0 1 1.5 1.5ZM17.85 15.3a6.356 6.356 0 0 0-2.569-2.034 3.75 3.75 0 1 0-5.062 0A6.356 6.356 0 0 0 7.65 15.3a.75.75 0 0 0 1.2.9 4.874 4.874 0 0 1 7.8 0 .76.76 0 0 0 1.05.15.75.75 0 0 0 .15-1.05Z" />
            </svg>
          </div>

          <div>
            <svg width={24} height={24} fill="white" viewBox="0 0 24 24">
              <path d="M12 1.5a9.019 9.019 0 0 0-9 9c0 2.25 1.181 5.166 3.15 7.781C8.119 20.897 10.322 22.5 12 22.5s3.863-1.575 5.85-4.219C19.837 15.638 21 12.75 21 10.5a9.02 9.02 0 0 0-9-9Zm-6 9.375V10.5a1.125 1.125 0 0 1 1.125-1.125A3.375 3.375 0 0 1 10.5 12.75v.375a1.125 1.125 0 0 1-1.125 1.125A3.375 3.375 0 0 1 6 10.875Zm7.5 7.875h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Zm4.5-7.875a3.376 3.376 0 0 1-3.375 3.375 1.125 1.125 0 0 1-1.125-1.125v-.375a3.375 3.375 0 0 1 3.375-3.375A1.125 1.125 0 0 1 18 10.5v.375Z" />
            </svg>
          </div>

          <div>
            <svg width={24} height={24} fill="white" viewBox="0 0 24 24">
              <path d="M20.7 16.49c-.553-.956-1.219-2.774-1.219-5.99v-.666c0-4.153-3.328-7.556-7.425-7.584H12a7.49 7.49 0 0 0-7.481 7.5v.75c0 3.216-.666 5.034-1.22 5.99a1.5 1.5 0 0 0 1.295 2.26H8.25a3.75 3.75 0 0 0 7.5 0h3.656a1.49 1.49 0 0 0 1.5-1.506 1.519 1.519 0 0 0-.206-.753ZM12 21a2.26 2.26 0 0 1-2.25-2.25h4.5A2.26 2.26 0 0 1 12 21Z" />
            </svg>
          </div>
        </div>
        <p>{time}</p>
      </div>
      {/* DO INNEGO PLIKU WYPIERDOLIĆ */}
    </>
  );
};

interface WebShortcutsProps {
  openPage: (pageURL: string) => void;
}

export default WebShortcuts;
