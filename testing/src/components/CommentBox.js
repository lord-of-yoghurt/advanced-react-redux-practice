import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from './requireAuth';
import * as actions from '../actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h4>Say something clever!</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }
}

// action creators are passed as props to CommentBox
export default connect(null, actions)(requireAuth(CommentBox));
