
module.exports = (application) => {
    application.get('/login', (req, res) => {
        application.app.controllers.login.login(application, req, res);
    });

    application.get('/ordens', (req, res) => {
        application.app.controllers.login.ordens(application, req, res);
    });
    application.post('/produtos', (req, res) => {
        application.app.controllers.login.postProdutos(application, req, res);
    });
    application.delete('/produtos/:id', (req, res) => {
        application.app.controllers.login.deleteProdutos(application, req, res);
    });
    application.get('/produtos', (req, res) => {
        application.app.controllers.login.getProdutos(application, req, res);
    });
    application.post('/login', (req, res) => {
        application.app.controllers.login.postLogin(application, req, res);
    });
    application.get('/cargos', (req, res) => {
        application.app.controllers.login.getCargos(application, req, res);
    });
    application.post('/cadastro-ordens', (req, res) => {
        application.app.controllers.login.cadastroOrdens(application, req, res);
    });
    application.delete('/cadastro-ordens/:id', (req, res) => {
        application.app.controllers.login.deleteOrdens(application, req, res);
    });
    
}