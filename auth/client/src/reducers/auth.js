import { AUTH_USER } from '../actions/types';

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
    default:
      return state;
  }
};
