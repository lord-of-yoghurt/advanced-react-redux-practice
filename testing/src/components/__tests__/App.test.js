import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('the App component', () => {
  it('renders the comment box properly', () => {
    // expect to show just one instance of CommentBox
    // inside the App Component
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  it('renders the comment list properly', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});
