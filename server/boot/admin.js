
import { adminRoot } from '../utils/constantStrings.json';
import debug from 'debug';
import { ifNoAdminUser401 } from '../utils/middleware';

const log = debug('fcc:boot:admin');
const businessAppName = process.env.BUSINESS_NAME + " " + process.env.APP_NAME;
const isAdminUnrestricted = process.env.IS_ADMIN_UNRESTRICTED === 'true';

module.exports = function (app) {

	const router = app.loopback.Router();
	const api = app.loopback.Router();
	const User = app.models.User;


	router.get('/' + adminRoot,
			(req, res) => {
						
				if (!isAdminUnrestricted && !req.user) {      
					return res.redirect('/signin');
				}

				res.render('admin/admin-home', {
					title: `Admin Home`
				})
			}
	);

	router.get('/' + adminRoot + '/create-account',
			(req, res) => {
						
				if (!isAdminUnrestricted && !req.user) {      
					return res.redirect('/signin');
				}

				res.render('admin/create-account', {
					title: `Create a new ${businessAppName} account`
				})
			}
	);

	api.post('/' + adminRoot + '/create-account',
		ifNoAdminUser401,
		(req, res) => {

			const { body: {email, username, name, location, password, confirmPassword } } = req;
		
			if (password && password !== confirmPassword) {
			  return res.status(403).json({
				message: `Passwords do not match.`
			  });
			}


			return User.createAccount(email, username, name, location, password)
				.then((result) => {
					return res.json({
						message: result.message
					})
				})
				.catch(err => {
					debug(err);
					return res.status(403).json({
					  message: err.message
					});
				});
		}
	);


	router.get('/' + adminRoot + '/update-account',
		(req, res) => {
					
			if (!isAdminUnrestricted && !req.user) {
				return res.redirect('/signin');
			}

			res.render('admin/update-account', {
				title: 'Update account information'
			})
		}
	);

	api.post('/' + adminRoot + '/update-account',
		ifNoAdminUser401,
		(req, res) => {

			const { body: {email, newEmail, username, name, location, password, confirmPassword} } = req;
		
			if (password && password !== confirmPassword) {
			  return res.status(403).json({
				message: `Passwords do not match.`
			  });
			}

			return User.changeAccount(email, newEmail, username, name, location, password)
				.then(() => {
					return res.json({						
						message: `Account updated for: '${email}'`
					})
				})
				.catch(err => {
					debug(err);
					return res.status(403).json({
					  message: err.message
					});
				});

		}
	);


	app.use(router);
	app.use(api);
};