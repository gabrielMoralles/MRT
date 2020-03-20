module.exports = (application) => {
	application.get('/login', (req, res) => {
		application.app.controllers.login.login(application, req, res);
	});
	application.post('/login', (req, res) => {
		application.app.controllers.login.postLogin(application, req, res);
	});
};
