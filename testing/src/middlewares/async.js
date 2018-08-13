export default ({ dispatch }) => (next) => (action) => {
  // does the action have a promise on its payload property?
  // if not, send it to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // get the data off the promise (have it resolve),
  // create a new action with that data and dispatch it.
  // the dispatch is what starts the entire process of
  // taking an action and calling middlewares with it.
  // effectively, it feeds the action to the top of the
  // middleware chain and all the reducers.

  // here, we overwrite the payload by calling `then`
  // of the current payload and creating a new action
  // in the callback. afterwards, we call dispatch with
  // the new action. 
  action.payload.then((res) => {
    const newAction = { ...action, payload: res };
    dispatch(newAction);
  });
};
