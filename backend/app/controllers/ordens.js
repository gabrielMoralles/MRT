module.exports.ordens = (application, req, res) => {
	let quote_id = req.params.id;
	let groupNumber = req.params.groupNumber;

	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.ordens(connection);

	login_groupDAO.ordens((error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};

module.exports.cadastroOrdens = (application, req, res) => {
	let ordem = req.body;
	console.log(ordem);
	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.ordens(connection);

	login_groupDAO.cadastroOrdens(ordem, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};

module.exports.deleteOrdens = (application, req, res) => {
	let ordem = req.params.id;
	var connection = application.config.dbConnection;
	console.log(ordem);

	var login_groupDAO = new application.app.models.ordens(connection);
	login_groupDAO.deleteOrdens(ordem, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
