import React, { useState } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import BootScreen from './components/BootScreen';

export default function App() {
  const [osFinishedBooting, setOsFinishedBooting] = useState<boolean>(false);
  return (
    <div>
      {!osFinishedBooting ? (
        <BootScreen onFinishedBooting={() => setOsFinishedBooting(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}
