import { combineReducers } from 'redux';

import commentsReducer from './comments';
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
  comments: commentsReducer
});
