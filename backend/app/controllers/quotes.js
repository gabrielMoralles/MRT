module.exports.quotes = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.getQuotes((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.quote = (application, req, res) => {

    let quote_id = req.params.id;

    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.getQuoteByID(quote_id, (error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}

module.exports.quoteADD = (application, req, res) => {

    let body = req.body;
    let quote = body.quote;
    let username = body.username;
    let id = quote.id;
    let accountName = quote.AccountName

    if (!quote) {
        return res.status(400).send({ error: true, message: 'Please provide a quote' });
    }

    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.quoteADD(quote, username, id, accountName, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.quoteUpdate = (application, req, res) => {

    let quote = req.body;
    let id = quote.id;
    let username = quote.username;
    let quote_info = quote.quoteInfo;
    let accountName = quote.accountName

  

    // if (!quote_id || !quote) {
    //     return res.status(400).send({ error: quote, message: 'Please provide quote and quote_id' });
    // }

    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.UpdateQuote(id, quote_info, username,accountName,(error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Quote has been updated successfully.' })
    });
}

module.exports.quoteDelete = (application, req, res) => {
    let body = req.body
    let quote_id = body.id
    let username = body.username
    let accountName = body.accountName

    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.DeleteQuote(quote_id, username, accountName, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Product has been delete successfully.' })
    });
}

module.exports.quotesQSS = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.getQuotesQSS((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.quotesClosed = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.getQuotesClosed((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.quoteStatus = (application, req, res) => {

    let quoteID = req.params.quoteID

    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.getQuoteStatus(quoteID, (error, results) => {
        if (error) throw error
        return res.send(results)
    });


}

module.exports.quoteLog = (application, req, res) => {
    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.quoteLog((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.quotePatch = (application, req, res) => {

    let body = req.body;
    let quote = body.quote
    let id = body.id;
    

  

    // if (!quote_id || !quote) {
    //     return res.status(400).send({ error: quote, message: 'Please provide quote and quote_id' });
    // }

    var connection = application.config.dbConnection;
    var quotesDAO = new application.app.models.QuotesDAO(connection);

    quotesDAO.PatchQuote(id,quote, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Quote has been updated successfully.' })
    });
}

