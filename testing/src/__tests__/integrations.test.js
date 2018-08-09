import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(API_URL, {
    status: 200,
    response: [
      { name: 'post' },
      { name: 'also post' },
      { name: 'another post' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('App integration', () => {
  it('can fetch and display a list of comments', (done) => {
    // render the app
    const wrapper = mount(
      <Root>
        <App />
      </Root>
    );

    // find and click fetchComments
    wrapper.find('.fetch-comments').simulate('click');

    // expect to find a list of comments
    setTimeout(() => {
      wrapper.update();

      expect(wrapper.find('li').length).toEqual(3);
      done();
      wrapper.unmount();
    }, 50);
  });
});
