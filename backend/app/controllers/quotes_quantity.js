module.exports.quantity = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotes_quantityDAO = new application.app.models.Quotes_QuantityDAO(connection);

    quotes_quantityDAO.getQuantityQuotes((error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}

module.exports.quantityQSS = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotes_quantityDAO = new application.app.models.Quotes_QuantityDAO(connection);

    quotes_quantityDAO.getQuantityQuotesQSS((error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}

module.exports.quantityClosed = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotes_quantityDAO = new application.app.models.Quotes_QuantityDAO(connection);

    quotes_quantityDAO.getQuantityQuotesClosed((error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}