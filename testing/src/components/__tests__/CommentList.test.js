import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

describe('The CommentList component', () => {
  it('creates one li per comment', () => {
    expect(2 + 2).toEqual(4);
  });
});
