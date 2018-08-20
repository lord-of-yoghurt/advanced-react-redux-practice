import React, { Component } from 'react';

import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        Welcome to the super awesome secret feature! If you are reading this message,
        you have been successfully authenticated. Enjoy yourself!
      </div>
    );
  }
};

export default requireAuth(Feature);
