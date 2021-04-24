import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createAudio } from '../components/header/components/audio/createAudio';
import { CLEAR_LINE } from '../constants';

export const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const { volumeSound, isPlaySound } = useSelector(
    (state: any) => state.audioReducers
  );
  const calcScore = useCallback(() => {
    const linePoints = [40, 100, 300, 1200];
    if (rowsCleared > 0) {
      if (isPlaySound) createAudio(CLEAR_LINE, volumeSound);
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, rowsCleared, isPlaySound, volumeSound]);
  useEffect(() => {
    calcScore();
    return;
  }, [calcScore, rowsCleared, score]);
  return [score, setScore, rows, setRows, level, setLevel] as const;
};
