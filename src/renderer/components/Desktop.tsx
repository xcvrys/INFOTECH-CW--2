/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC, useEffect, useState } from 'react';
import WebShortcuts from './WebShortcuts';
import useDesktopAppStore, { BrowserPage } from '../../state/DesktopAppStore';
import Taskbar from './Taskbar';
import RunBox from './RunBox';
// @ts-ignore
import startup from '../../../audio/startup.mp3';

const Desktop: FC = () => {
  const pages = useDesktopAppStore((s) => s.pages);
  const [explorerFinishedLoading, setExplorerFinishedLoading] =
    useState<boolean>(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setExplorerFinishedLoading(true);
    }, 2500);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!explorerFinishedLoading) {
      return;
    }
    const a = new Audio(startup);
    a.play();
  }, [explorerFinishedLoading]);
  return (
    <>
      {explorerFinishedLoading && (
        <>
          <WebShortcuts openPage={useDesktopAppStore.getState().openPage} />
          <Taskbar />
          {Object.values(pages).map((p: BrowserPage) => p.content)}
          <RunBox />
        </>
      )}
    </>
  );
};

export default Desktop;
