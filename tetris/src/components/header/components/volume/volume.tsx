import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 120,
  },
});
interface typeVolume {
  value: number;
  handleChange: (newValue: number | number[]) => void;
}
export const Volume = ({ value, handleChange }: typeVolume) => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const { volumeMusic } = useSelector((state: any) => state.audioReducers);
  // const handleChange = (newValue: number | number[]) => {
  //   dispatch(setVolumeMusic(newValue));
  // };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        {}
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={(e, newValue) => {
              handleChange(newValue);
            }}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
};
