import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    if (this.props.signedIn) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature!</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Auth App</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
