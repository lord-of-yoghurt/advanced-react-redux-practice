import axios from 'axios';

import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  const response = axios.get(API_URL);

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};
