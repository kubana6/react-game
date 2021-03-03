import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  setting: {
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#edeeef',
    color: 'black',
  },
  box: {
    display: 'flex',
    alignItems: 'space-around',
    justifyContent: 'center',
  },
  label: {
    width: '100px',
    marginLeft: '0px',
    marginRight: '12px',
    fontSize: '1rem',
    fontFamily: 'Arial',
  },
  form: {
    cursor: 'text',
    fontSize: '16px',
    fontFamily: 'Arial',
    backgroundColor: 'white',
    width: '150px',
  },
  links: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'black',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));
