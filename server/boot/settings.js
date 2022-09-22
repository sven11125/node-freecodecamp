import { isMongoId } from 'validator';
import { check } from 'express-validator/check';
import bcrypt from 'bcryptjs';

import { ifNoUser401, createValidatorErrorHandler } from '../utils/middleware';
import supportedLanguages from '../../common/utils/supported-languages.js';
import debug from 'debug';

const log = debug('fcc:boot:settings');

export default function settingsController(app) {
  const api = app.loopback.Router();
	const User = app.models.User;

  const toggleUserFlag = flag => (req, res, next) => {
    const { user } = req;
    const currentValue = user[flag];
    return user
      .update$({ [flag]: !currentValue })
      .subscribe(
        () => res.status(200).json({
          flag,
          value: !currentValue
        }),
        next
      );
  };

  function updateMyEmail(req, res, next) {
    const { user, body: { email } } = req;
    return user.requestUpdateEmail(email)
      .subscribe(
        (message) => res.json({ message }),
        next
      );
  }

  function updateMyPassword(req, res, next) {

    const { user, body: { oldPassword, password, confirmPassword } } = req;

    var hashedOldPassword = bcrypt.hashSync(oldPassword, user.passwordSalt);

    if (user.password !== hashedOldPassword) {
      return res.status(403).json({
        message: `Old password is incorrect.`
      });
    }

    if (password !== confirmPassword) {
      return res.status(403).json({
        message: `Passwords do not match.`
      });
    }

    return User.changePassword(user.email, password)
    .then(() => {
      return res.json({
        message: `Password has been updated.`
      })
    })
    .catch(err => {
      log(err);
      return res.status(403).json({
        message: err.message
      });
    });
  }

  function updateMyLang(req, res, next) {
    const { user, body: { lang } = {} } = req;
    const langName = supportedLanguages[lang];
    const update = { languageTag: lang };
    if (!supportedLanguages[lang]) {
      return res.json({
        message: `${lang} is currently unsupported`
      });
    }
    if (user.languageTag === lang) {
      return res.json({
        message: `Your language is already set to ${langName}`
      });
    }
    return user.update$(update)
      .subscribe(
        () => res.json({
          message: `Your language has been updated to '${langName}'`
        }),
        next
      );
  }

  function updateMyCurrentChallenge(req, res, next) {
    const { user, body: { currentChallengeId } } = req;
    if (!isMongoId('' + currentChallengeId)) {
      return next(new Error(`${currentChallengeId} is not a valid ObjectId`));
    }
    return user.update$({ currentChallengeId }).subscribe(
      () => res.json({
        message:
          `your current challenge has been updated to ${currentChallengeId}`
      }),
      next
    );
  }

  function updateMyTheme(req, res, next) {
    req.checkBody('theme', 'Theme is invalid.').isLength({ min: 4 });
    const { body: { theme } } = req;
    const errors = req.validationErrors(true);
    if (errors) {
      return res.status(403).json({ errors });
    }
    if (req.user.theme === theme) {
      return res.json({ msg: 'Theme already set' });
    }
    return req.user.updateTheme('' + theme)
      .then(
        data => res.json(data),
        next
      );
  }

  const updateMyEmailValidators = [
    check('email')
      .isEmail()
      .withMessage('Email format is invalid.')
  ];

  api.post(
    '/toggle-available-for-hire',
    ifNoUser401,
    toggleUserFlag('isAvailableForHire')
  );
  api.post(
    '/toggle-lockdown',
    ifNoUser401,
    toggleUserFlag('isLocked')
  );
  api.post(
    '/toggle-announcement-email',
    ifNoUser401,
    toggleUserFlag('sendMonthlyEmail')
  );
  api.post(
    '/toggle-notification-email',
    ifNoUser401,
    toggleUserFlag('sendNotificationEmail')
  );
  api.post(
    '/toggle-quincy-email',
    ifNoUser401,
    toggleUserFlag('sendQuincyEmail')
  );
  api.post(
    '/update-my-email',
    ifNoUser401,
    updateMyEmail
  );
  api.post(
    '/update-my-password',
    ifNoUser401,
    updateMyPassword
  );
  api.post(
    '/update-my-lang',
    ifNoUser401,
    updateMyLang
  );

  api.post(
    '/update-my-current-challenge',
    ifNoUser401,
    updateMyCurrentChallenge
  );

  api.post(
    '/update-my-theme',
    ifNoUser401,
    updateMyTheme
  );

  app.use(api);
}
