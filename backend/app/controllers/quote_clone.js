module.exports.getCloneQuote = (application, req, res) => {

    let id = req.params.id
    let username = req.body.username
    console.log(username)

    var connection = application.config.dbConnection;
    var quote_cloneDAO = new application.app.models.Quote_CloneDAO(connection);

    quote_cloneDAO.getCloneQuote(id, username, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.insertCloneQuoteProducts = (application, req, res) => {

    let id = req.params.id

    var connection = application.config.dbConnection;
    var quote_cloneDAO = new application.app.models.Quote_CloneDAO(connection);

    quote_cloneDAO.insertCloneQuoteProducts(id, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.updateCloneQuoteProducts = (application, req, res) => {

    let quoteId = req.params.id
    let insertId = req.params.insertId
    let affectedRows = req.params.affectedRows

    var connection = application.config.dbConnection;
    var quote_cloneDAO = new application.app.models.Quote_CloneDAO(connection);

    quote_cloneDAO.updateCloneQuoteProducts(quoteId, insertId, affectedRows, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}