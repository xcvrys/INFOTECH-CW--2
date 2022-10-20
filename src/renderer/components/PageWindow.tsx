/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
// eslint-disable-next-line import/no-cycle
import useDesktopAppStore from '../../state/DesktopAppStore';
// import style from '../../style/css/PageWindow.Module.css';
import Web from './web';
import start from '../../../audio/start.mp3';

const PageWindow: FC<PageWindowProps> = ({ onDelete, url, pageID }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);
  const currentlyFocusedPage = useDesktopAppStore((s) => s.focusedPage);
  useEffect(() => {
    const a = new Audio(start);
    a.play();
  }, []);
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
          <Web link={url} onDelete={onDelete} />
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
