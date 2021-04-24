import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  allScores: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#edeeef',
    fontFamily: 'Pixel, Arial, Helvetica, sans-serif',
    fontSize: '20px',
    color: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  place: {
    fontSize: '16px',
    color: 'black',
    width: '15px',
    marginBottom: '10px',
  },
  player: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  login: {
    width: '100px',
  },
  score: {
    width: '50px',
    textAlign: 'center',
  },
}));
