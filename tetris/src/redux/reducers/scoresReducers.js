import { getAllScores, postEvent } from '../../api/eventsApi';

const initialState = {
  allScores: [
    {
      login: 'kub',
      scores: 267,
    },
  ],
  userScores: [],
  postScor: [],
};
const UPDATE_ALL_SCORES = 'UPDATE_ALL_SCORES';
const POST_USER_SCORES = 'POST_USER_SCORES';
export const scoresReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALL_SCORES: {
      return { ...state, allScores: [...action.data] };
    }
    case POST_USER_SCORES: {
      return { ...state, postScor: [...state.postScor, action.data] };
    }
    default:
      return state;
  }
};

export const updateAllScores = () => {
  return (dispatch, getState) => {
    getAllScores().then(({ data }) => {
      dispatch(setAllScores(data));
    });
  };
};
export const postUserScores = (data) => {
  return (dispatch, getState) => {
    const { id } = getState().auth.currentUser;
    postEvent(data, id).then(({ data }) => {
      dispatch(postScores(data));
    });
  };
};
const postScores = (data) => ({ type: POST_USER_SCORES, data });
const setAllScores = (data) => ({ type: UPDATE_ALL_SCORES, data });
