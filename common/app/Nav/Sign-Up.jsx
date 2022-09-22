import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import FA from 'react-fontawesome';

import { Link } from '../Router';
import { onRouteSettings } from '../routes/Settings/redux';

const propTypes = {
  showLoading: PropTypes.bool,
  showSignUp: PropTypes.bool
};

export default function SignUpButton({ showLoading, showSignUp }) {

  if (process.env.isTrialMode) {
    return null;
  }

  if (showLoading) {
    return null;
  }
  if (showSignUp) {
    return (
      <NavItem
        href='/signin'
        key='signup'
        >
        Sign In
      </NavItem>
    );
  }
  return (
    <li
      className='nav-avatar'
      key='user'
      >
      <Link to={ onRouteSettings() }>
      <FA name='user-o' /> My Profile
      </Link>
    </li>
  );
}

SignUpButton.displayName = 'SignUpButton';
SignUpButton.propTypes = propTypes;
