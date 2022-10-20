/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC } from 'react';
import WebShortcuts from './WebShortcuts';
import useDesktopAppStore, { BrowserPage } from '../../state/DesktopAppStore';
import Taskbar from './Taskbar';
import RunBox from './RunBox';

const Desktop: FC = () => {
  const pages = useDesktopAppStore((s) => s.pages);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const p = useDesktopAppStore((s) => s.focusedPage);
  return (
    <>
      <WebShortcuts openPage={useDesktopAppStore.getState().openPage} />
      <Taskbar />
      {Object.values(pages).map((p: BrowserPage) => p.content)}
      <RunBox />
    </>
  );
};

export default Desktop;
