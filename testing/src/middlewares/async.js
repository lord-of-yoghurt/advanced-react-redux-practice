export default ({ dispatch }) => (next) => (action) => {
  // does the action have a promise on its payload property?
  // if so, wait for it to resolve

  // otherwise, send to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
};
