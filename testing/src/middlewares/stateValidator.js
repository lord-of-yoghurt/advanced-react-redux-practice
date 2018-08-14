import tv4 from 'tv4';

import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  // right off the bat, feed the action to the reducers
  // and back to the middlewares
  next(action);

  console.log(tv4.validate(getState(), stateSchema));
};
