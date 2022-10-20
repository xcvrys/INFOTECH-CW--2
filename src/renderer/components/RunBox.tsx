/* eslint-disable react/button-has-type */
import { FC, useState } from 'react';
import style from '../../style/css/RunBox.Module.css';
import useDesktopAppStore from '../../state/DesktopAppStore';

const RunBox: FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  return (
    <>
      <div className={style.main}>
        <div id="titleBar">
          <div className={style.titleBarTitle}>
            <p>Run</p>
          </div>
          <div
            className={style.titleBarClose}
            onClick={() => useDesktopAppStore.getState().hideRunBox()}
          />
        </div>

        <div className={style.content}>
          <div className={style.header}>
            <img
              src="https://i.imgur.com/B0okcoX_d.webp?maxwidth=760&fidelity=grand"
              alt=""
            />
            <p>Type the URL and Windows will open it for you.</p>
          </div>

          <div className={style.inp}>
            <p>
              <span>O</span>pen:
            </p>
            <input
              placeholder="URL"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>

          <div className={style.btn}>
            <button
              onClick={() => useDesktopAppStore.getState().openPage(userInput)}
            >
              OK
            </button>
            <button onClick={() => useDesktopAppStore.getState().hideRunBox()}>
              Cancel
            </button>
            <button disabled>Browse...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunBox;
