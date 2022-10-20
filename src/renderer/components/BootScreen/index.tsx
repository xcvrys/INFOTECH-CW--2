import React, { FC, useEffect, useState } from 'react';
// @ts-ignore
import stage1 from './stage_1.gif';
// @ts-ignore
import stage2 from './stage_2.gif';
import './styles.css';

const BootScreen: FC<BootScreenProps> = ({ onFinishedBooting }) => {
  const [stage1Finished, setStage1Finished] = useState<boolean>(false);
  const [stage2Finished, setStage2Finished] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setStage1Finished(true);
    }, 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!stage1Finished) {
      return () => {};
    }
    const t = setTimeout(() => {
      setStage2Finished(true);
    }, 2500);
    return () => clearTimeout(t);
  }, [stage1Finished]);

  if (stage2Finished) {
    onFinishedBooting();
  }
  return (
    <>
      <div id={stage1Finished ? 'startBG_stage2' : 'startBG_stage1'}>
        {!stage1Finished && <img src={stage1} alt="" />}
        {stage1Finished && !stage2Finished && <img src={stage2} alt="" />}
      </div>
    </>
  );
};

interface BootScreenProps {
  onFinishedBooting: () => void;
}
export default BootScreen;
