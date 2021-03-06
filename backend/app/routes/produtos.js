module.exports = (application) => {
	application.post('/produtos', (req, res) => {
		application.app.controllers.produtos.postProdutos(application, req, res);
	});
	application.delete('/remover-produtos/:id', (req, res) => {
		application.app.controllers.produtos.removerProdutos(application, req, res);
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
	application.post('/update-produtos-total', (req, res) => {
		application.app.controllers.produtos.updateProduto(application, req, res);
	});
};
