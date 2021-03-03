import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  changeLevel,
  playMusic,
  playSound,
  setVolumeMusic,
  setVolumeSound,
} from '../../redux/reducers/audioReducers';
import { Volume } from '../header/components/volume/volume';
import { useStyles } from './materialUIStyles';

export const Settings = () => {
  const classMaterial = useStyles();
  const dispatch = useDispatch();
  const handleChangeMusic = (newValue: number | number[]) => {
    dispatch(setVolumeMusic(newValue));
  };
  const handleChangeSound = (newValue: number | number[]) => {
    dispatch(setVolumeSound(newValue));
  };

  const {
    isPlayMusic,
    volumeMusic,
    isPlaySound,
    volumeSound,
    level,
  } = useSelector((state: any) => state.audioReducers);
  const toggleMusic = () => {
    dispatch(playMusic());
  };
  const toggleSound = () => {
    dispatch(playSound());
  };
  const changeLevelGame = (value: string) => {
    dispatch(changeLevel(value));
  };
  return (
    <div className={classMaterial.setting}>
      Settings
      <Box className={classMaterial.box}>
        <FormControlLabel
          className={classMaterial.label}
          control={
            <Checkbox
              // onClick={() => setPlay(prev=> !prev)}
              checked={isPlayMusic}
              color="primary"
              onChange={() => toggleMusic()}
            />
          }
          label={'Music'}
          labelPlacement="start"
        />
        <Volume value={volumeMusic} handleChange={handleChangeMusic} />
      </Box>
      <Box className={classMaterial.box}>
        <FormControlLabel
          className={classMaterial.label}
          control={
            <Checkbox
              checked={isPlaySound}
              color="primary"
              onChange={() => toggleSound()}
            />
          }
          label={'Sound'}
          labelPlacement="start"
        />
        <Volume value={volumeSound} handleChange={handleChangeSound} />
      </Box>
      <FormControl className={classMaterial.form}>
        <InputLabel>{`level is ${level} `}</InputLabel>
        <Select
          value={level}
          onChange={(event: any) => changeLevelGame(event.target.value)}
        >
          <MenuItem value="Easy">Easy</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <Box className={classMaterial.links}>
        {' '}
        <NavLink to="/" className={classMaterial.link}>
          <ArrowBack /> Go to Menu{' '}
        </NavLink>
        <NavLink to="/start" className={classMaterial.link}>
          Start Game <ArrowForward />
        </NavLink>
      </Box>
    </div>
  );
};
