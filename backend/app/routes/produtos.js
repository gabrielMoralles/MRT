module.exports = (application) => {
	application.post('/produtos', (req, res) => {
		application.app.controllers.produtos.postProdutos(application, req, res);
	});
	application.delete('/produtos/:id', (req, res) => {
		application.app.controllers.produtos.deleteProdutos(application, req, res);
	});
	application.delete('/produtos/add/:id', (req, res) => {
		application.app.controllers.produtos.addProdutos(application, req, res);
	});
	application.get('/produtos', (req, res) => {
		application.app.controllers.produtos.getProdutos(application, req, res);
	});
};
