import React from 'react';
import { mount } from 'enzyme';

import Root from '../Root';
import App from '../components/App';

describe('App integration', () => {
  it('can fetch and display a list of comments', () => {
    // render the app
    const wrapper = mount(
      <Root>
        <App />
      </Root>
    );

    // find and click fetchComments

    // expect to find a list of comments
  });
});
