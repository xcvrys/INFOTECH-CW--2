/* eslint-disable react/button-has-type */
import { FC } from 'react';
import style from '../../style/css/RunBox.Module.css';

const RunBox: FC = () => {
  return (
    <>
      <div className={style.main}>
        <div>
          <div className={style.titleBarTitle}>
            <p>Run</p>
          </div>
          <div className={style.titleBarClose} />
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
            <input placeholder="URL" />
          </div>

          <div className={style.btn}>
            <button>OK</button>
            <button disabled>Cancel</button>
            <button disabled>Browse...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunBox;
