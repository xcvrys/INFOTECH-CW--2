import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import useDesktopAppStore from '../../state/DesktopAppStore';

const Taskbar: FC = () => {
  const pagesTaskbarDisplay = useDesktopAppStore((s) => s.pagesTaskbarDisplay);
  return (
    <div>
      <>
        <h6>task manager</h6>
        {Object.entries(pagesTaskbarDisplay).map(([key, value]) => (
          <button
            type="button"
            key={nanoid(10)}
            onClick={() => useDesktopAppStore.getState().setFocusedPage(key)}
          >
            {value}
          </button>
        ))}
      </>
    </div>
  );
};

export default Taskbar;
