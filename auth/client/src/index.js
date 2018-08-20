import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';

const jsx = (
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
    </App>
  </BrowserRouter>
);

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
