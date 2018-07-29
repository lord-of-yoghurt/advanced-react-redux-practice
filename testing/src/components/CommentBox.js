import React, { Component } from 'react';

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

    // TODO: call action creator
    // TODO: save comment

    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h4>Say something clever!</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
