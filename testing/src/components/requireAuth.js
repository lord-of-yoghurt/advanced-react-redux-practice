import React, { Component } from 'react';
import { connect } from 'react-redux';

// exporting a function, not a component!
export default (ChildComponent) => {
  // inside the function, a component wrapper is created.
  // this is a HOC with code that can be reused in any
  // number of components it wraps. all of those components
  // will have lifecycle methods defined below and, in this
  // case, will stay aware of the auth status and navigate
  // the user away (or not) based on auth.
  class ComposedComponent extends Component {
    // component just rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // component got new props
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      // it wraps the component generically passed into it
      return <ChildComponent />;
    }
  }

  // mapStateToProps declared outside of the class definition,
  // as always.
  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  // the resulting component is returned, connected to redux
  // (connecting to redux is only done if necessary)
  return connect(mapStateToProps)(ComposedComponent);
};

// usage in a different file
// wrapper is imported into the file
// import requireAuth from './requireAuth';
//
// define the component that will be wrapped
// class MyComponent extends React.Component {
//   blablabla
// }
//
// export default requireAuth(MyComponent);
