import React from 'react';
import { TETROMINOS } from '../../tetrominos';
import { StyledCell } from './style/StyleCell';
const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
};
export default React.memo(Cell);
