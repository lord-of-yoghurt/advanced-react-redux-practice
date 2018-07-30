import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

describe('CommentBox component', () => {
  it('has a text area and a button', () => {expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
