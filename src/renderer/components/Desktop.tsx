import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import WebShortcuts from './WebShortcuts';
import PageWindow from './PageWindow';

const Desktop: FC = () => {
  const [pages, setPages] = useState<BrowserItem>({});
  const deletePage = (id: string) => {
    setPages((p) => {
      const newState = { ...p };
      delete newState[id];
      return newState;
    });
  };
  const openPage = (pageURL: string) => {
    const instanceID = nanoid(10);
    setPages((p) => {
      return {
        ...p,
        ...{
          [instanceID]: (
            <PageWindow
              key={instanceID}
              onDelete={() => {
                deletePage(instanceID);
              }}
              url={pageURL}
            />
          ),
        },
      } as BrowserItem;
    });
  };
  return (
    <>
      <WebShortcuts openPage={openPage} />
      {Object.values(pages).map((p) => p)}
    </>
  );
};

interface BrowserItem {
  [key: string]: { id: string; content: FC };
}
export default Desktop;
