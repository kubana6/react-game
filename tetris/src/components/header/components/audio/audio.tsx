import {
  Box,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  IconButton,
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
          <Settings className={classMaterial.settings} />
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
