import create from 'zustand';
import React, { FC } from 'react';
import { nanoid } from 'nanoid';
// eslint-disable-next-line import/no-cycle
import PageWindow, { PageWindowProps } from '../renderer/components/PageWindow';

const useDesktopAppStore = create<DesktopAppStoreProps>((set) => ({
  pages: {},
  pagesTaskbarDisplay: {},
  focusedPage: '',
  runBoxShown: false,
  showDesktop: false,
  setFocusedPage: (pageID) => {
    set((store) => {
      const filteredPages = { ...store.pages };
      const focusedPage = filteredPages[pageID];
      delete filteredPages[pageID];
      filteredPages[pageID] = focusedPage;
      return { pages: filteredPages, focusedPage: pageID };
    });
  },
  deletePage: (pageID) => {
    set((store) => {
      const newPageState = { ...store.pages };
      const newPagesTaskbarDisplay = { ...store.pagesTaskbarDisplay };
      delete newPageState[pageID];
      delete newPagesTaskbarDisplay[pageID];
      return {
        pages: newPageState,
        pagesTaskbarDisplay: newPagesTaskbarDisplay,
      };
    });
  },
  openPage: (pageURL) => {
    set((store) => {
      const url = pageURL.includes('https://')
        ? pageURL
        : `https://google.com/search?q=${pageURL}`;
      const instanceID = nanoid(10);
      const pageContent = (
        <PageWindow
          key={instanceID}
          onDelete={() => useDesktopAppStore.getState().deletePage(instanceID)}
          url={url}
          pageID={instanceID}
        />
      );
      const newPageState = {
        ...store.pages,
        [instanceID]: {
          id: instanceID,
          content: pageContent,
        },
      } as BrowserPages;
      const newPageTaskbarDisplayState = {
        ...store.pagesTaskbarDisplay,
        [instanceID]: pageURL,
      };

      return {
        pages: newPageState,
        pagesTaskbarDisplay: newPageTaskbarDisplayState,
      };
    });
  },
  showRunBox: () => {
    set(() => ({ runBoxShown: true }));
  },
  hideRunBox: () => {
    set(() => ({ runBoxShown: false }));
  },
  toggleStartMenu: () => {
    set((s) => ({ showDesktop: !s.showDesktop }));
  },
  hideStartMenu: () => {
    set(() => ({ showDesktop: false }));
  },
}));

interface DesktopAppStoreProps {
  pages: BrowserPages;
  focusedPage: string;
  runBoxShown: boolean;
  showDesktop: boolean;
  setFocusedPage: (pageID: string) => void;
  deletePage: (pageID: string) => void;
  openPage: (pageURL: string) => void;
  pagesTaskbarDisplay: Record<string, string>;
  showRunBox: () => void;
  hideRunBox: () => void;
  toggleStartMenu: () => void;
  hideStartMenu: () => void;
}

interface BrowserPages {
  [key: string]: BrowserPage;
}

export interface BrowserPage {
  id: string;
  content: FC<PageWindowProps>;
}

export default useDesktopAppStore;
