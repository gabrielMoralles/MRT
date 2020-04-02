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
