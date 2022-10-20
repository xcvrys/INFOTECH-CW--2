import react, { FC } from 'react';
import style from '../../style/css/RunBox.Module.css';

const RunBox = () => {
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
              src="https://coddec.github.io/Classic-Shell/www.classicshell.net/forum/download/file0345.png?id=4760"
              alt=""
            />
            <p>Type the URL and Windows will open it for you.</p>
          </div>

          <div className={style.inp}>
            <p>
              <span>O</span>pen:
            </p>
            <input placeholder="%apppData%" />
          </div>

          <div className={style.btn}>
            <button>OK</button>
            <button>Cancel</button>
            <button>Browse...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunBox;
