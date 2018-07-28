import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <form>
        <h4>Say something clever!</h4>
        <textarea />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
