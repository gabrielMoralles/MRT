module.exports.getProductNames = (application, req, res) => {

    var connection = application.config.dbConnection;
    var retrieve_namesDAO = new application.app.models.Retrieve_NamesDAO(connection);

    retrieve_namesDAO.getProductNames((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getElementNames = (application, req, res) => {

    let id = req.params.id;

    var connection = application.config.dbConnection;
    var retrieve_namesDAO = new application.app.models.Retrieve_NamesDAO(connection);

    retrieve_namesDAO.getElementNames(id, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getAttrNames = (application, req, res) => {

    let id = req.params.id;
    let id2 = req.params.id2;

    var connection = application.config.dbConnection;
    var retrieve_namesDAO = new application.app.models.Retrieve_NamesDAO(connection);

    retrieve_namesDAO.getAttrNames(id, id2, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getAttrValueNames = (application, req, res) => {

    let id = req.params.id;
    let id2 = req.params.id2;
    let id3 = req.params.id3;

    var connection = application.config.dbConnection;
    var retrieve_namesDAO = new application.app.models.Retrieve_NamesDAO(connection);

    retrieve_namesDAO.getAttrValueNames(id, id2, id3, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getManagerNames = (application, req, res) => {

    var connection = application.config.dbConnection;
    var retrieve_namesDAO = new application.app.models.Retrieve_NamesDAO(connection);

    retrieve_namesDAO.getManagerNames((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}