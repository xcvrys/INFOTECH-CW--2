import React, { FC, useState } from 'react';
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
    <Draggable>
      <div id="pageWindow">
        <div id="statusBar">
          <p id="closeWindowBtn" onClick={onDelete}>
            X
          </p>
        </div>

        <webview id="webview" src="https://www.google.com/"></webview>
      </div>
    </Draggable>
  );
};
interface PageWindowProps {
  onDelete: () => void;
}
