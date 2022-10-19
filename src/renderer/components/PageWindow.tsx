import React, { FC, useState } from 'react';
import Draggable from 'react-draggable';
import useDesktopAppStore from '../../state/DesktopAppStore';

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
          className={currentlyFocusedPage === pageID ? 'focused' : 'unfocused'}
        >
          <div id="pageWindow">
            <strong className="cursor">
              <div>Drag here</div>
            </strong>
            <div id="statusBar">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <p id="closeWindowBtn" onClick={onDelete}>
                X
              </p>
            </div>
            {!isBeingDragged ? (
              <webview id="webview" src={url} />
            ) : (
              <h1>placeholder</h1>
            )}
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
