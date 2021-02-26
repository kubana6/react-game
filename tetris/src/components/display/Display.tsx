import React from 'react';
import { StyledDisplay } from './style/StyledDisplay';

export const Display: React.FC<typesDisplay> = ({ gameOver = false, text }) => {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
};

type typesDisplay = {
  gameOver?: boolean;
  text: string;
};
