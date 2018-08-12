import React, { Component } from 'react';

// exporting a function, not a component!
export default (ChildComponent) => {
  // inside the function, a component wrapper is created
  class ComposedComponent extends Component {
    render() {
      // it wraps the component generically passed into it
      return <ChildComponent />;
    }
  }

  // the resulting component is returned
  return ComposedComponent;
};

// usage in a different file
// wrapper is imported into the file
// import requireAuth from './requireAuth';
//
// define the component that will be wrapped
// class MyComponent {
//   blablabla
// }
//
// export default requireAuth(MyComponent);
