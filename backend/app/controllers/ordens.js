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
module.exports.cadastroProdOrdens = (application, req, res) => {
	let idProd = req.body.idProd;
	let nomeProd = req.body.nomeProd;
	let idOrder = req.body.idOrder;

	let prod = {
		id_estoque: idProd,
		nome_prod: nomeProd,
		id_ordem: idOrder
	};

	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.ordens(connection);

	login_groupDAO.cadastroProdOrdens(idProd, prod, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
module.exports.getProdByOrdens = (application, req, res) => {
	let idOrder = req.params.id;

	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.ordens(connection);

	login_groupDAO.getProdByOrdens(idOrder, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};

module.exports.deleteProd = (application, req, res) => {
	let idOrder = req.params.id;
	let idProd = req.params.idProd;

	console.log(idOrder, idProd);
	var connection = application.config.dbConnection;
	var login_groupDAO = new application.app.models.ordens(connection);

	login_groupDAO.deleteProd(idOrder, idProd, (error, results) => {
		if (error) throw error;
		return res.send(results);
	});
};
