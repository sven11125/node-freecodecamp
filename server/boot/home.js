import { defaultProfileImage } from '../../common/utils/constantStrings.json';
import supportedLanguages from '../../common/utils/supported-languages';
import dedent from 'dedent';

const message =
  'Learn to Code and Help Nonprofits';
  
const isTrialMode = process.env.IS_TRIAL_MODE === 'true';

module.exports = function(app) {
  var router = app.loopback.Router();
  //router.get('/', addDefaultImage, index);
  router.get('/', index);
  app.use(
      '/:lang',
      (req, res, next) => {
        // add url language to request for all routers
        req._urlLang = req.params.lang;
        next();
      },
      router
    );
  app.use(router);

  // function addDefaultImage(req, res, next) {
  //   if (!req.user || req.user.picture) {
  //     return next();
  //   }
  //   return req.user.update$({ picture: defaultProfileImage })
  //     .subscribe(
  //       () => next(),
  //       next
  //     );
  // }

  function index(req, res, next) {
    if (!supportedLanguages[req._urlLang]) {
      return next();
    }

    if (!isTrialMode && !req.user) {
      return res.redirect('/signin');
    }

    return res.redirect('/challenges/current-challenge');
  }
};
