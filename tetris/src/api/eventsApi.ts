import axios from 'axios';
import { dataProps } from './dataTypes';
const route = 'scores';
const baseURL = `https://servertetris.herokuapp.com/${route}`;

export const getAllScores = () => {
  return axios.get(`${baseURL}/`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
export const getUserScores = (idUser: string) => {
  return axios.get(`${baseURL}/:${idUser}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
export const postEvent = (data: dataProps, idUser: string): Promise<any> => {
  return axios({
    baseURL: `${baseURL}?idUser=${idUser}`,
    method: 'post',
    data,
    url: '',
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
