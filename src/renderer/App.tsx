import React, { FC, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';

export default function App() {
  const [pages, setPages] = useState<any[]>([
    <PageWindow
      onDelete={() => {
        deletePage(0);
      }}
    />,
  ]);
  const deletePage = (id: number) =>
    setPages((pages) => pages.filter((_, index) => index !== id));
  return <div>{...pages}</div>;
}

const PageWindow: FC<PageWindowProps> = ({ onDelete }) => {
  return (
    <>
      <Draggable handle="strong">
        <div>
          <div id="pageWindow">
            <strong className="cursor">
              <div>Drag here</div>
            </strong>
            <div id="statusBar">
              <p id="closeWindowBtn" onClick={onDelete}>
                X
              </p>
            </div>
            <webview id="webview" src="https://www.google.com/"></webview>
          </div>
        </div>
      </Draggable>
    </>
  );
};
interface PageWindowProps {
  onDelete: () => void;
}
