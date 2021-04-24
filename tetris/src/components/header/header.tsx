import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Audio } from './components/audio/audio';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '64px',
    backgroundColor: '#000',
    fontFamily: 'Pixel, Arial, Helvetica, sans-serif',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    height: '64px',
    backgroundColor: '#000',
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Pixel, Arial, Helvetica, sans-serif',
    color: 'white',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.link} to="/">
              Go to Menu
            </NavLink>
          </Typography>
          <Audio />
        </Toolbar>
      </AppBar>
    </div>
  );
};
