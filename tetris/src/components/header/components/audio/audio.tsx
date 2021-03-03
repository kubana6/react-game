import {
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles/materialUIStyles';
import {
  playMusic,
  playSound,
  setVolumeMusic,
  setVolumeSound,
} from '../../../../redux/reducers/audioReducers';
import { Settings } from '@material-ui/icons';
import { Volume } from '../volume/volume';
export const Audio = () => {
  const [isSettingsOpen, changeSettings] = useState(false);

  const dispatch = useDispatch();
  const {
    music,
    isPlayMusic,
    volumeMusic,
    isPlaySound,
    volumeSound,
  } = useSelector((state: any) => state.audioReducers);
  const handleChangeMusic = (newValue: number | number[]) => {
    dispatch(setVolumeMusic(newValue));
  };
  const handleChangeSound = (newValue: number | number[]) => {
    dispatch(setVolumeSound(newValue));
  };

  useEffect(() => {
    const volume = volumeMusic / 100;
    music.volume = volume;
  }, [volumeMusic, music]);
  console.log(music);
  if (isPlayMusic) {
    music.play();
  } else {
    music.pause();
  }
  const toggleSound = () => {
    dispatch(playSound());
  };
  const toggleMusic = () => {
    dispatch(playMusic());
  };
  const openSettings = () => {
    changeSettings((prev) => !prev);
  };
  const classMaterial = useStyles();
  return (
    <div>
      <Tooltip title={'Settings'}>
        <IconButton
          className={classMaterial.iconHover}
          onClick={() => {
            openSettings();
          }}
        >
          <Settings />
        </IconButton>
      </Tooltip>
      <Dialog
        aria-labelledby="settings"
        open={isSettingsOpen}
        onClose={() => {
          changeSettings((prev) => !prev);
        }}
      >
        <DialogContent className={classMaterial.dialog}>
          <FormControl className="form-control">
            <InputLabel>{'Language'}</InputLabel>
            <Select
            // onClick={() => playSound(isSoundOn)}
            // value={language}
            // onChange={(event: any) => changeLanguages(event.target.value)}
            >
              <MenuItem>English</MenuItem>
              <MenuItem>Русский</MenuItem>
              <MenuItem>Deutsche</MenuItem>
              <MenuItem>Italiano</MenuItem>
              <MenuItem>Português</MenuItem>
            </Select>
          </FormControl>
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
                  // onClick={() => setPlay(prev=> !prev)}
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
        </DialogContent>
      </Dialog>
    </div>
  );
};
