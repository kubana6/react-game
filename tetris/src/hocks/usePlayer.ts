import { useCallback, useState } from 'react';
import { checkCollision, STAGE_WIDTH } from '../gameHelpers';
import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  const rotate = (matrix: [[], [], []], dir: number) => {
    const rotateTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    if (dir > 0) return rotateTetro.map((row) => row.reverse());
    return rotateTetro.reverse();
  };

  const playerRotate = (stage: (number | string)[][], dir: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided = false }: playerProps) => {
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

  return [player, updatePlayerPos, resetPlayer, playerRotate] as const;
};

type playerProps = {
  x: number;
  y: number;
  collided?: boolean;
};
