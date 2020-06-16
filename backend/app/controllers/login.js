module.exports.login = (application, req, res) => {
	let quote_id = req.params.id;
	let groupNumber = req.params.groupNumber;

	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.login(connection);

	login_groupDAO.login((error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};

module.exports.postLogin = (application, req, res) => {
	let login = req.body;

	console.log(login);
	var connection = application.config.dbConnection;

	var login_groupDAO = new application.app.models.login(connection);
	login_groupDAO.postLogin(login, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};

module.exports.forgotPass = (application, req, res) => {
	let email = req.body.email;
	let user = req.body.user;

	var connection = application.config.dbConnection;

	var login_groupDAO = new application.app.models.login(connection);
	login_groupDAO.forgotPass(email, user, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};

module.exports.changePass = (application, req, res) => {
	let email = req.body.email;
	let user = req.body.user;
	let pass = req.body.pass;

	var connection = application.config.dbConnection;

	var login_groupDAO = new application.app.models.login(connection);
	login_groupDAO.changePass(pass, email, user, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
module.exports.updateUser = (application, req, res) => {
	let user = req.body;

	var connection = application.config.dbConnection;

	var login_groupDAO = new application.app.models.login(connection);
	login_groupDAO.updateUser(user, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
