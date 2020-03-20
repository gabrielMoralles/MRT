module.exports = (application) => {
	application.get('/ordens', (req, res) => {
		application.app.controllers.ordens.ordens(application, req, res);
	});
	application.get('/cargos', (req, res) => {
		application.app.controllers.ordens.getCargos(application, req, res);
	});
	application.post('/cadastro-ordens', (req, res) => {
		application.app.controllers.ordens.cadastroOrdens(application, req, res);
	});
	application.delete('/cadastro-ordens/:id', (req, res) => {
		application.app.controllers.ordens.deleteOrdens(application, req, res);
	});
};
