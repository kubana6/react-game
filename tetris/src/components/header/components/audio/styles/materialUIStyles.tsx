import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  dialog: {
    position: 'fixed',
    top: '30px',
    right: '30px',
    width: '200px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#fff',
    borderRadius: '4px',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settings: {
    color: 'white',
  },
  label: {
    width: '100px',
    marginLeft: '0px',
    marginRight: '12px',
  },
  iconHover: {
    padding: '6px',
    margin: '0 3px',
    '&:hover': {
      background: '#dddddd40',
      borderRadius: '50%',
    },
  },
  buttonHover: {
    color: '#3c4043eb',
    '&:hover': {
      backgroundColor: '#dddddd60',
    },
  },
  select: {
    width: '105px',
    '&:hover': {
      backgroundColor: '#dddddd60',
    },
    '& input': {
      padding: '9.5px 14px',
    },
  },
  arrowLeft: {
    width: '17px',
    height: '17px',
    paddingLeft: '5px',
  },
  arrowRight: {
    width: '17px',
    height: '17px',
  },
  iconCalendar: {
    cursor: 'default',
  },
  iconLogout: {
    padding: '6px',
    '&:hover': {
      background: '#dddddd40',
      borderRadius: '50%',
    },
  },
}));
