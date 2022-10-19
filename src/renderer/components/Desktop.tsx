import React, { FC } from 'react';
import WebShortcuts from './WebShortcuts';
import useDesktopAppStore, { BrowserPage } from '../../state/DesktopAppStore';
import Taskbar from './Taskbar';

const Desktop: FC = () => {
  const pages = useDesktopAppStore((s) => s.pages);
  return (
    <>
      <WebShortcuts openPage={useDesktopAppStore.getState().openPage} />
      <Taskbar />
      {Object.values(pages).map((p: BrowserPage) => p.content)}
    </>
  );
};

export default Desktop;
