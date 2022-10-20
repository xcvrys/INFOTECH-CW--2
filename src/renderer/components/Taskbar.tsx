import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import useDesktopAppStore from '../../state/DesktopAppStore';
import style from '../../style/css/Taskbar.Module.css';

const Taskbar: FC = () => {
  const pagesTaskbarDisplay = useDesktopAppStore((s) => s.pagesTaskbarDisplay);

  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    <div>
      <>
        <div className={style.taskbar}>
          <img src="//i.imgur.com/PzXcMsP.png" alt="Windows" />
          <div className={style.taskbarContent}>
            {Object.entries(pagesTaskbarDisplay).map(([key, value]) => (
              <button
                type="button"
                key={nanoid(10)}
                onClick={() =>
                  useDesktopAppStore.getState().setFocusedPage(key)
                }
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
      </>
    </div>
  );
};

export default Taskbar;
