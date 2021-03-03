import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllScores } from '../../../redux/reducers/scoresReducers';
import { useStyles } from './materialUIStyles';
export const AllScore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAllScores());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classMaterial = useStyles();
  const { allScores } = useSelector((state: any) => state.scoresReducers);
  const rangscore = allScores.map((userScore: any, id: number) => (
    <div className={classMaterial.player}>
      <div className={classMaterial.place}>{id + 1}</div>
      <div className={classMaterial.login}>{userScore.login.split('@')[0]}</div>
      <div className={classMaterial.score}> {userScore.scores}</div>
    </div>
  ));
  return <div className={classMaterial.allScores}>SCORE {rangscore}</div>;
};
