import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentBox from '../CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('CommentBox component', () => {
  it('has a text area and a button', () => {expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });
});

describe('CommentBox text area', () => {
  beforeEach(() => {
    // find the textarea element and simulate an event
    // of the 'change' sort (even names come from HTML.)
    // the second argument is a fake event object, which
    // has a `target` property carrying a value (since
    // in the real thing the value is at event.target.value)
    wrapper.find('textarea').simulate('change', {
      target: { value: 'i love peaches' }
    });

    // force the component to update immediately (setState
    // is asynchronous, and we don't wanna wait for it)
    wrapper.update();
  });

  it('allows users to type in the text area', () => {
    // for the expectation, find the textarea once again
    // and look at its 'value' property - it should be
    // updated with what we gave it above
    expect(wrapper.find('textarea').prop('value')).toEqual('i love peaches');
  });

  it('submits the form and clears the text area upon afterwards', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
