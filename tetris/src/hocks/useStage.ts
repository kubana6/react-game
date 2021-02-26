import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player: player, resetPlayer: () => void) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
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
      return newStage;
    };

    setStage(updateStage(stage));
  }, [player]);
  return [stage, setStage] as const;
};

interface typeUseStage {
  player: player;
  resetPlayer: () => void;
}
interface player {
  pos: posType;
  tetromino: any;
  collided: boolean;
}
interface posType {
  x: number;
  y: number;
}
