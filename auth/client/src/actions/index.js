import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

const BASE_URL = 'http://localhost:4000';

// redux-thunk allows us to return a function from
// the action creator - this function will be called
// with a dispatch argument, which is itself a function
// that acts as something of a funnel to feed our
// actions down to middlewares and reducers. dispatch
// can be called as many times as we need. additionally,
// if there's an async request returning a promise, we can
// wait for the promise to resolve and put the dispatch
// call on the `then` callback. in short, redux-thunk
// lets us take full control over the dispatch function.

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/signup`, formProps);

    dispatch({ type: AUTH_USER, payload: res.data.token });

    localStorage.setItem('token', res.data.token);

    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR, payload: 'This email address is already in use!'
    });
  }
};
