var globalConfig = require('../common/config.global');

module.exports = {
  restApiRoot: globalConfig.restApi,
  sessionSecret: process.env.SESSION_SECRET,

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  },

  isSignUpDisabled: process.env.DISABLE_SIGNUP === 'true',
  isBridgesCodeCamp: (process.env.BUSINESS_NAME === "Bridges"),
  businessName: process.env.BUSINESS_NAME,
  appName: process.env.APP_NAME,
  businessAppName: process.env.BUSINESS_NAME + " " + process.env.APP_NAME,
  isTrialMode: process.env.IS_TRIAL_MODE === 'true',
  hasLocation: process.env.HAS_LOCATION === 'true'
};
