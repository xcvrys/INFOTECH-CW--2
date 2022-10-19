import create from 'zustand';
import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import PageWindow, { PageWindowProps } from '../renderer/components/PageWindow';

const useDesktopAppStore = create<DesktopAppStoreProps>((set) => ({
  pages: {},
  pagesTaskbarDisplay: {},
  focusedPage: '',
  setFocusedPage: (pageID) => {
    set(() => ({
      focusedPage: pageID,
    }));
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
      const instanceID = nanoid(10);
      const pageContent = (
        <PageWindow
          key={instanceID}
          onDelete={() => useDesktopAppStore.getState().deletePage(instanceID)}
          url={pageURL}
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
}));

interface DesktopAppStoreProps {
  pages: BrowserPages;
  focusedPage: string;
  setFocusedPage: (pageID: string) => void;
  deletePage: (pageID: string) => void;
  openPage: (pageURL: string) => void;
  pagesTaskbarDisplay: Record<string, string>;
}

interface BrowserPages {
  [key: string]: BrowserPage;
}

export interface BrowserPage {
  id: string;
  content: FC<PageWindowProps>;
}

export default useDesktopAppStore;
