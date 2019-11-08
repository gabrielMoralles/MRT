module.exports.getQuotesByName = (application, req, res) => {

    let username = req.params.username

    var connection = application.config.dbConnection;
    var quotes_by_nameDAO = new application.app.models.Quotes_By_NameDAO(connection);

    quotes_by_nameDAO.getQuotesByName(username, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getClosedQuotesByName = (application, req, res) => {

    let username = req.params.username

    var connection = application.config.dbConnection;
    var quotes_by_nameDAO = new application.app.models.Quotes_By_NameDAO(connection);

    quotes_by_nameDAO.getClosedQuotesByName(username, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getQSSQuotesByName = (application, req, res) => {

    let username = req.params.username

    var connection = application.config.dbConnection;
    var quotes_by_nameDAO = new application.app.models.Quotes_By_NameDAO(connection);

    quotes_by_nameDAO.getQSSQuotesByName(username, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}