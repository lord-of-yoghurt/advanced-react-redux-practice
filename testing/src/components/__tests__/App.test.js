import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';

describe('the App component', () => {
  it('renders the comment box properly', () => {
    const wrapper = shallow(<App />);

    // expect to show just one instance of CommentBox
    // inside the App Component
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });
});
