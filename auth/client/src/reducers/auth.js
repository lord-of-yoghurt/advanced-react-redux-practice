import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  // this will receive a token from the back end
  authenticated: '',
  // this will contain an error message, should anything go wrong
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
