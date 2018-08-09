import React from 'react';
import { Route } from 'react-router-dom';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

const App = () => (
  <div>
    <Route path="/post" component={CommentBox} />
    <Route path="/" exact={true} component={CommentList} />
  </div>
);

export default App;
