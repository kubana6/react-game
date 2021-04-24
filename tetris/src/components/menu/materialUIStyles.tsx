import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  menu: {
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#edeeef',
    fontFamily: 'Pixel, Arial, Helvetica, sans-serif',
    fontSize: '20px',
    color: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    color: 'black',
  },
}));
