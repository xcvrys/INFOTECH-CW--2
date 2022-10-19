import React, { FC, useState } from 'react';
import Draggable from 'react-draggable';
import style from '../../style/css/PageWindow.Module.css';

const PageWindow: FC<PageWindowProps> = ({ onDelete, url }) => {
  const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);
  return (
    <>
      <Draggable
        handle="strong"
        onStart={() => setIsBeingDragged(true)}
        onStop={() => setIsBeingDragged(false)}
      >
        <div className={style.draggable}>
          <div id="pageWindow">
            <strong>
              <div className={style.titleBar}>
                <div className={style.titleBarTitle}>Hello World</div>
                <div className={style.titleBarClose} />
                <div className={style.titleBarMax} />
                <div className={style.titleBarMin} />
              </div>
            </strong>
            {!isBeingDragged ? <webview id="webview" src={url} /> : null}
          </div>
        </div>
      </Draggable>
    </>
  );
};

interface PageWindowProps {
  onDelete: () => void;
  url: string;
}

export default PageWindow;
