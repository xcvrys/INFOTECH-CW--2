import React, { FC } from 'react';

const WebShortcuts: FC<WebShortcutsProps> = ({ openPage }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          openPage('https://wp.pl');
        }}
      >
        wp.pl
      </button>
      <button
        type="button"
        onClick={() => {
          openPage('https://google.com');
        }}
      >
        google.com
      </button>
      <button
        type="button"
        onClick={() => {
          openPage('https://youtube.com');
        }}
      >
        youtube.com
      </button>
    </div>
  );
};

interface WebShortcutsProps {
  openPage: (pageURL: string) => void;
}

export default WebShortcuts;
