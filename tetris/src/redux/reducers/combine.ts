import { combineReducers } from 'redux';
import { audioReducers } from './audioReducers';
// import { stateControl } from './StateContolReducers';
// import { auth } from './auth.js';
const createRootReducer = () =>
  combineReducers({
    audioReducers,
  });
export default createRootReducer;
