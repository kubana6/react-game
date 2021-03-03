import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { registration } from '../../redux/action/actionAuth';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeErrorRegistration } from '../../redux/reducers/auth';
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: '4px',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

export const SignUp: React.FC = () => {
  const classes: Record<
    'paper' | 'btn' | 'avatar' | 'form' | 'submit' | 'btnHover',
    string
  > = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isErrorRegistration } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography component="p" color="error">
          {isErrorRegistration}
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                label="Email Address"
                name="email"
                autoComplete="email"
                onClick={() => dispatch(changeErrorRegistration(false))}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setEmail(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onClick={() => dispatch(changeErrorRegistration(''))}
                autoComplete="current-password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setPassword(e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Box className={classes.btn}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(): void => {
                registration(dispatch, email, password);
              }}
            >
              Sign Up
            </Button>
            <NavLink to="/login" className={classes.submit}>
              <Button
                className={classes.btnHover}
                type="button"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign in
              </Button>
            </NavLink>
          </Box>
        </form>
      </div>
    </Container>
  );
};
