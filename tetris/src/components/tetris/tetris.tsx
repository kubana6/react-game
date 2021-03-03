import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SOUND_GAME_OVER } from '../../constants';
import { checkCollision, createStage } from '../../gameHelpers';
import { useGameStatus } from '../../hocks/useGameStatus';
import { useInterval } from '../../hocks/useInterval';
import { usePlayer } from '../../hocks/usePlayer';
import { useStage } from '../../hocks/useStage';
import { Display } from '../display/Display';
import { createAudio } from '../header/components/audio/createAudio';
import { Stage } from '../stage/Stage';
import { StartButton } from '../StartButton/StartButton';
import { StyledTetris, StyledTetrisWrapper } from './styleTetris';

export const Tetris: React.FC = ({ type }: any) => {
  const [dropTime, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );
  const movePlayer = (dir: number): void => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };
  const { isPlaySound, volumeSound, sound, interval } = useSelector(
    (state: any) => state.audioReducers
  );
  const startGame = () => {
    setStage(createStage());
    setDropTime(interval);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };
  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);

      setDropTime(interval / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
      playAudio();
    } else {
      if (player.pos.y < 1) {
        console.log('gameOver');
        setGameOver(true);
        if (isPlaySound) {
          createAudio(SOUND_GAME_OVER, volumeSound);
        }
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }: typeKeyCode) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(interval / (level + 1) + 200);
      }
    }
  };
  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }: typeKeyCode) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };
  interface typeKeyCode {
    keyCode: number;
  }

  const playAudio = () => {
    if (isPlaySound) {
      sound.currentTime = 0;
      sound.volume = volumeSound / 100;
      sound.play();
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);
  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <div>
          <ArrowBack />
        </div>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score ${score}`} />
              <Display text={`Rows ${rows}`} />
              <Display text={`Level ${level}`} />
            </div>
          )}

          <StartButton callback={startGame} />
          <div className="keyBoard">
            <div
              className="arrow"
              onClick={() => {
                move({ keyCode: 38 });
              }}
            >
              <ArrowUpward color="primary" />
            </div>

            <div className="arrowsLeftAndRigth">
              <div
                className="arrow"
                onClick={() => {
                  move({ keyCode: 37 });
                }}
              >
                <ArrowBack color="primary" />
              </div>
              <div
                className="arrow"
                onClick={() => {
                  move({ keyCode: 39 });
                }}
              >
                <ArrowForward color="primary" />
              </div>
            </div>

            <div
              className="arrow"
              onClick={() => {
                move({ keyCode: 40 });
                keyUp({ keyCode: 40 });
              }}
            >
              <ArrowDownward color="primary" />
            </div>
          </div>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
