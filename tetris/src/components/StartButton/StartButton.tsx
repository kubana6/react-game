import React from 'react';
import { StyledStartButton } from './style/StyledStartButton';

export const StartButton: React.FC<propsButton> = ({ callback }: any) => {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
};
interface propsButton {
  callback: () => void;
}
