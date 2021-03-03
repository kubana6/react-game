import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { changeErrorLogin } from '../../redux/reducers/auth';
import { login } from '../../redux/action/actionAuth';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  btn: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  submit: {
    width: '45%',
    margin: theme.spacing(3, 0, 2),
    textDecoration: 'none',
    '&:hover': {
      background: '#3f51b5eb',
    },
  },
  btnHover: {
    '&:hover': {
      background: '#3f51b5eb',
      outline: 'none',
    },
  },
}));

export const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isErrorLogin } = useSelector((state) => state.auth);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {isErrorLogin && (
          <Typography component="h4" color="error" variant="h5">
            {'Incorrect login or password'}
          </Typography>
        )}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={() => {
              dispatch(changeErrorLogin(false));
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onClick={() => {
              dispatch(changeErrorLogin(false));
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Box className={classes.btn}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                dispatch(login(email, password));
              }}
            >
              Sign In
            </Button>
            <NavLink to="/registration" className={classes.submit}>
              <Button
                className={classes.btnHover}
                type="button"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </NavLink>
          </Box>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};
