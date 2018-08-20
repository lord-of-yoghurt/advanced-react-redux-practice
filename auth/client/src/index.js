import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
