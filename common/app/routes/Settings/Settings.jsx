import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Button, Row, Col } from 'react-bootstrap';
import FA from 'react-fontawesome';

import LockedSettings from './Locked-Settings.jsx';
import JobSettings from './Job-Settings.jsx';
import SocialSettings from './Social-Settings.jsx';
import EmailSettings from './Email-Setting.jsx';
import LanguageSettings from './Language-Settings.jsx';
import SettingsSkeleton from './Settings-Skeleton.jsx';
import UpdateEmail from './routes/update-email';

import { toggleUserFlag, showUpdateEmailViewSelector } from './redux';
import {
  toggleNightMode,
  updateTitle,

  signInLoadingSelector,
  userSelector,
  themeSelector,
  hardGoTo
} from '../../redux';
import ChildContainer from '../../Child-Container.jsx';

const mapStateToProps = createSelector(
  userSelector,
  themeSelector,
  signInLoadingSelector,
  showUpdateEmailViewSelector,
  (
    {
      username,
      email,
      isAvailableForHire,
      isLocked,
      isGithubCool,
      isTwitter,
      isLinkedIn,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail
    },
    theme,
    showLoading,
    showUpdateEmailView
  ) => ({
    currentTheme: theme,
    email,
    isAvailableForHire,
    isGithubCool,
    isLinkedIn,
    isLocked,
    isTwitter,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    showLoading,
    showUpdateEmailView,
    username
  })
);

const mapDispatchToProps = {
  hardGoTo,
  toggleIsAvailableForHire: () => toggleUserFlag('isAvailableForHire'),
  toggleIsLocked: () => toggleUserFlag('isLocked'),
  toggleMonthlyEmail: () => toggleUserFlag('sendMonthlyEmail'),
  toggleNightMode,
  toggleNotificationEmail: () => toggleUserFlag('sendNotificationEmail'),
  toggleQuincyEmail: () => toggleUserFlag('sendQuincyEmail'),
  updateTitle
};

const propTypes = {
  children: PropTypes.element,
  currentTheme: PropTypes.string,
  email: PropTypes.string,
  hardGoTo: PropTypes.func.isRequired,
  initialLang: PropTypes.string,
  isAvailableForHire: PropTypes.bool,
  isGithubCool: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isLocked: PropTypes.bool,
  isTwitter: PropTypes.bool,
  lang: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  showLoading: PropTypes.bool,
  showUpdateEmailView: PropTypes.bool,
  toggleIsAvailableForHire: PropTypes.func.isRequired,
  toggleIsLocked: PropTypes.func.isRequired,
  toggleMonthlyEmail: PropTypes.func.isRequired,
  toggleNightMode: PropTypes.func.isRequired,
  toggleNotificationEmail: PropTypes.func.isRequired,
  toggleQuincyEmail: PropTypes.func.isRequired,
  updateMyLang: PropTypes.func,
  updateTitle: PropTypes.func.isRequired,
  username: PropTypes.string
};

export class Settings extends React.Component {
  constructor(...props) {
    super(...props);
    this.updateMyLang = this.updateMyLang.bind(this);
  }

  updateMyLang(e) {
    e.preventDefault();
    const lang = e.target.value;
    this.props.updateMyLang(lang);
  }

  componentWillMount() {
    this.props.updateTitle('Settings');
  }
  componentWillReceiveProps({ username, showLoading, hardGoTo }) {
    if (!username && !showLoading) {
      hardGoTo('/signup');
    }
  }

  render() {
    const {
      currentTheme,
      email,
      isAvailableForHire,
      isGithubCool,
      isLinkedIn,
      isLocked,
      isTwitter,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      showLoading,
      showUpdateEmailView,
      toggleIsAvailableForHire,
      toggleIsLocked,
      toggleMonthlyEmail,
      toggleNightMode,
      toggleNotificationEmail,
      toggleQuincyEmail,
      username
    } = this.props;
    if (!username && showLoading) {
      return <SettingsSkeleton />;
    }
    if (showUpdateEmailView) {
      return <UpdateEmail />;
    }
    return (
      <ChildContainer>
        <div className='container'>
          <Row>
            <Col xs={ 12 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                href={ `/${username}` }
                >
                <FA name='user-o' />
                Show me my public profile
              </Button>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                href={ '/signout' }
                >
                Sign me out of { process.env.businessAppName }
              </Button>
            </Col>
          </Row>
          <h1 className='text-center'>Settings for your Account</h1>
          <Row>
            <Col xs={ 12 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                onClick={ () => toggleNightMode(username, currentTheme) }
                >
                Toggle Night Mode
              </Button>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                className='btn-link-social'
                href={ `account/update-password` }
                >
                <FA name='lock' />
                Change my password
              </Button>
            </Col>
          </Row>
      </div>
      </ChildContainer>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
