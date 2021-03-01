import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player: player, resetPlayer: () => void) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = (newStage: any) => {
      return newStage.reduce((acc: any, row: []) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return acc;
        }
        acc.push(row);
        return acc;
      }, []);
    };
    const updateStage = (prevStage: any) => {
      const newStage = prevStage.map((row: any) => {
        return row.map((cell: [number, string]) =>
          cell[1] === 'clear' ? [0, 'clear'] : cell
        );
      });
      player.tetromino.forEach((row: any, y: number) => {
        row.forEach((value: number, x: number) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);
  return [stage, setStage, rowsCleared] as const;
};

interface player {
  pos: posType;
  tetromino: any;
  collided: boolean;
}
interface posType {
  x: number;
  y: number;
}
