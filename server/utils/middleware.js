
import { validationResult } from 'express-validator/check';
import { createValidatorErrorFormatter } from './create-handled-error.js';

const isAdminUnrestricted = process.env.IS_ADMIN_UNRESTRICTED === 'true';

export function ifNoUserRedirectTo(url, message, type = 'errors') {
  return function(req, res, next) {
    const { path } = req;
    if (req.user) {
      return next();
    }

    req.flash(type, {
      msg: message || `You must be signed in to access ${path}`
    });

    return res.redirect(url);
  };
}

export function ifNoUserSend(sendThis) {
  return function(req, res, next) {
    if (req.user) {
      return next();
    }
    return res.status(200).send(sendThis);
  };
}

export function ifNoUser401(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).end();
}

export function ifNoAdminUser401(req, res, next) {
  if (isAdminUnrestricted || req.user) {
    return next();
  }
  return res.status(401).end();
}

export function ifNotVerifiedRedirectToSettings(req, res, next) {
  const { user } = req;
  if (!user) {
    return next();
  }
  if (!user.emailVerified) {
    req.flash('error', {
      msg: 'We do not have your verified email address on record, '
      + 'please add it in the settings to continue with your request.'
    });
    return res.redirect('/settings');
  }
  return next();
}

export function ifUserRedirectTo(path = '/', status) {
  status = status === 302 ? 302 : 301;
  return (req, res, next) => {
    if (req.user) {
      return res.status(status).redirect(path);
    }
    return next();
  };
}

// for use with express-validator error formatter
export const createValidatorErrorHandler = (...args) => (req, res, next) => {
  const validation = validationResult(req)
    .formatWith(createValidatorErrorFormatter(...args));

  if (!validation.isEmpty()) {
    const errors = validation.array();
    return next(errors.pop());
  }

  return next();
};