import React from 'react';
import { Cell } from '../cell/cell';
import { StyledStage } from './style/StyledStage';

export const Stage: React.FC<any> = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row: []) =>
        row.map((cell: [number, string], x: number) => (
          <Cell key={x} type={cell[0]} />
        ))
      )}
    </StyledStage>
  );
};
