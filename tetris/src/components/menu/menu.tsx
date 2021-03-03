import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './materialUIStyles';

export const Menu: React.FC = () => {
  const classMaterial = useStyles();
  return (
    <div className={classMaterial.menu}>
      Menu
      <NavLink to="/start">Start Game</NavLink>
      <NavLink to="/score">Score</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
};
