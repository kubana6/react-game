import { useCallback, useState } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';
import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });
  const updatePlayerPos = ({ x, y, collided }: playerProps) => {
    setPlayer({
      ...player,
      pos: { x: (player.pos.x += x), y: (player.pos.y += y) },
      collided,
    });
  };
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer] as const;
};

type playerProps = {
  x: number;
  y: number;
  collided: boolean;
};
