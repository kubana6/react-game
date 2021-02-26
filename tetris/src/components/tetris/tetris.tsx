import React, { useState } from 'react';
import { createStage } from '../../gameHelpers';
import { usePlayer } from '../../hocks/usePlayer';
import { useStage } from '../../hocks/useStage';
import { Display } from '../display/Display';
import { Stage } from '../stage/Stage';
import { StartButton } from '../StartButton/StartButton';
import { StyledTetris, StyledTetrisWrapper } from './styleTetris';

export const Tetris: React.FC = ({ type }: any) => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);
  const movePlayer = (dir: number): void => {
    updatePlayerPos({ x: dir, y: 0, collided: false });
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  const dropPlayer = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const move = ({ keyCode }: typeKeyCode) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };
  interface typeKeyCode {
    keyCode: number;
  }
  return (
    <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
