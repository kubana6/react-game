import React from 'react';
import { TETROMINOS } from '../../tetrominos';
import { StyledCell } from './style/StyleCell';
export const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
};
