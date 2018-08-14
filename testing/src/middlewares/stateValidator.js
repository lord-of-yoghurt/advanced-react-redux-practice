import tv4 from 'tv4';

import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  // right off the bat, feed the action to the reducers
  // and back to the middlewares, so that we have some state
  next(action);

  // if the validation fails
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Detecting an invalid data type in your state! Please debug.');
  }
};
