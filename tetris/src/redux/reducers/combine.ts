import { combineReducers } from 'redux';
import { audioReducers } from './audioReducers';
import { scoresReducers } from './scoresReducers';
import { auth } from './auth.js';
// import { stateControl } from './StateContolReducers';
// import { auth } from './auth.js';
const createRootReducer = () =>
  combineReducers({
    audioReducers,
    auth,
    scoresReducers,
  });
export default createRootReducer;
