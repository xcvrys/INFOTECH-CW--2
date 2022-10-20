/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useState } from 'react';
import Draggable from 'react-draggable';
// eslint-disable-next-line import/no-cycle
import useDesktopAppStore from '../../state/DesktopAppStore';
import style from '../../style/css/PageWindow.Module.css';

const getRandomPagePosition = () => ({
  top: Math.floor(Math.random() * (500 - 50) + 50),
  left: Math.floor(Math.random() * (500 - 50) + 50),
});

const PageWindow: FC<PageWindowProps> = ({ onDelete, url, pageID }) => {
  const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);
  const currentlyFocusedPage = useDesktopAppStore((s) => s.focusedPage);
  return (
    <>
      <Draggable
        handle="strong"
        onStart={() => setIsBeingDragged(true)}
        onStop={() => setIsBeingDragged(false)}
        onMouseDown={() => useDesktopAppStore.getState().setFocusedPage(pageID)}
      >
        <div
          className={`draggable ${
            currentlyFocusedPage === pageID ? 'focused' : 'unfocused'
          }`}
        >
          <div id="pageWindow" style={getRandomPagePosition()}>
            <strong>
              <div className={style.titleBar}>
                <div className={style.titleBarTitle}>{url}</div>
                <div className={style.titleBarClose} onClick={onDelete} />
                <div className={style.titleBarMax} />
                <div className={style.titleBarMin} />
              </div>
            </strong>
            <webview id="webview" src={url} />
          </div>
        </div>
      </Draggable>
    </>
  );
};

export interface PageWindowProps {
  onDelete: () => void;
  url: string;
  pageID: string;
}

export default PageWindow;
