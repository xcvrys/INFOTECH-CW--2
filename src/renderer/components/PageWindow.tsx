import React, { FC, useState } from 'react';
import Draggable from 'react-draggable';

const PageWindow: FC<PageWindowProps> = ({ onDelete, url }) => {
  const [isBeingDragged, setIsBeingDragged] = useState<boolean>(false);
  return (
    <>
      <Draggable
        handle="strong"
        onStart={() => setIsBeingDragged(true)}
        onStop={() => setIsBeingDragged(false)}
      >
        <div>
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
