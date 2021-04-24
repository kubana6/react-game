import axios from 'axios';
import {
  changeErrorLogin,
  changeErrorRegistration,
  setUser,
} from '../reducers/auth';
const baseUrl = 'https://servertetris.herokuapp.com';
export const registration = async (dispatch, email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/api/auth/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    debugger;
    dispatch(changeErrorRegistration(e.response.data.message));
  }
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseUrl}/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      localStorage.setItem('token', response.data.token);
      dispatch(setUser(response.data.user));
    } catch (e) {
      localStorage.removeItem('token');
    }
  };
};
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      dispatch(setUser(response.data.user));
    } catch (e) {
      dispatch(changeErrorLogin(true));
    }
  };
};
