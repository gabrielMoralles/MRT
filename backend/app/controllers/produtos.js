module.exports.postProdutos = (application, req, res) => {
	let produto = req.body;

	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.produtos(connection);

	login_groupDAO.postProduto(produto, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
module.exports.getProdutos = (application, req, res) => {
	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.produtos(connection);

	login_groupDAO.getProduto((error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
module.exports.deleteProdutos = (application, req, res) => {
	let id = req.params.id;
	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.produtos(connection);

	login_groupDAO.deleteProdutos(id, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
module.exports.addProdutos = (application, req, res) => {
	let id = req.params.id;
	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.produtos(connection);

	login_groupDAO.addProdutos(id, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
