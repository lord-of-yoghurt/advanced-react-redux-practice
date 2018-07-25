import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

describe('the App component', () => {
  it('renders the comment box properly', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // inspect the div and see if CommentBox
    // is rendered
    expect(div.innerHTML).toContain('And this is the comment box!!');

    ReactDOM.unmountComponentAtNode(div);
  });
});
