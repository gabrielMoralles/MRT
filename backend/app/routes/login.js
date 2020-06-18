module.exports = (application) => {
	application.get('/login', (req, res) => {
		application.app.controllers.login.login(application, req, res);
	});
	application.post('/login', (req, res) => {
		application.app.controllers.login.postLogin(application, req, res);
	});
	application.post('/forgot', (req, res) => {
		application.app.controllers.login.forgotPass(application, req, res);
	});
	application.post('/changePass', (req, res) => {
		application.app.controllers.login.changePass(application, req, res);
	});
	application.post('/update-usuario', (req, res) => {
		application.app.controllers.login.updateUser(application, req, res);
	});
	application.post('/update-usuario', (req, res) => {
		application.app.controllers.login.updateUser(application, req, res);
	});
};
