module.exports.quantityByName = (application, req, res) => {

    let username = req.params.username

    var connection = application.config.dbConnection;
    var quotes_quantity_by_nameDAO = new application.app.models.Quotes_Quantity_By_NameDAO(connection);

    quotes_quantity_by_nameDAO.quantityByName(username, (error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}

module.exports.quantityQSSByName = (application, req, res) => {

    let username = req.params.username

    var connection = application.config.dbConnection;
    var quotes_quantity_by_nameDAO = new application.app.models.Quotes_Quantity_By_NameDAO(connection);

    quotes_quantity_by_nameDAO.quantityQSSByName(username, (error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}

module.exports.quantityClosedByName = (application, req, res) => {

    let username = req.params.username

    var connection = application.config.dbConnection;
    var quotes_quantity_by_nameDAO = new application.app.models.Quotes_Quantity_By_NameDAO(connection);

    quotes_quantity_by_nameDAO.quantityClosedByName(username, (error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}