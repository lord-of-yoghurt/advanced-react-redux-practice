import axios from 'axios';

import * as types from './types';

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

export const saveComment = (comment) => {
  return {
    type: types.SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  const response = axios.get(API_URL);

  return {
    type: types.FETCH_COMMENTS,
    payload: response
  };
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: types.CHANGE_AUTH,
    payload: isLoggedIn
  };
};
