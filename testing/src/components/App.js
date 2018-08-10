import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends Component {
  renderButton() {

  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact={true} component={CommentList} />
      </div>
    );
  }
}

export default App;
