import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './materialUIStyles';

export const Menu: React.FC = () => {
  const classMaterial = useStyles();
  return (
    <div className={classMaterial.menu}>
      Menu
      <NavLink className={classMaterial.link} to="/start">
        Start Game
      </NavLink>
      <NavLink className={classMaterial.link} to="/allscore">
        Score
      </NavLink>
      <NavLink className={classMaterial.link} to="/settings">
        Settings
      </NavLink>
    </div>
  );
};
