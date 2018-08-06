import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3']
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

describe('The CommentList component', () => {
  it('creates one li per comment', () => {
    console.log(wrapper.find('li').length);
  });
});
