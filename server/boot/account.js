
module.exports = function (app) {

	const router = app.loopback.Router();
	const api = app.loopback.Router();


	router.get('/account/update-password',
		(req, res) => {
				
			if (!req.user) {      
				return res.redirect('/signin');
			}

			res.render('account/update-password', {
				title: 'Change account password'
			})
		}
	);

	app.use('/:lang', router);
	app.use(api);
};