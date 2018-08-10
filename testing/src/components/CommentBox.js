import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  // component just rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  // component got new props
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      console.log('i don\'t belong here...');
    }
  }

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

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(CommentBox);
