module.exports.updateVersionClonedQuote = (application, req, res) => {

    let quoteID = req.params.quoteID
    let username = req.params.username

    var connection = application.config.dbConnection;
    var quote_versionDAO = new application.app.models.Quote_VersionDAO(connection);

    quote_versionDAO.updateVersionClonedQuote(quoteID, username, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.updateVersionNewQuote = (application, req, res) => {

    let quoteID = req.params.quoteID
    console.log(quoteID)

    var connection = application.config.dbConnection;
    var quote_versionDAO = new application.app.models.Quote_VersionDAO(connection);
    
    quote_versionDAO.updateVersionNewQuote(quoteID, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.updateNewVersion = (application, req, res) => {

    let quote_id = req.params.quoteID;
    let versionBefore = req.body

    let version = JSON.stringify(versionBefore);

    let old_version_ids = []

    if (!quote_id || !version) {
        return res.status(400).send({ error: quote, message: 'Please provide quote and version' });
    }

    for (let i = 0; i < versionBefore.length; i++) {
        old_version_ids.push(versionBefore[i].ID)
    }

    var connection = application.config.dbConnection;
    var quote_versionDAO = new application.app.models.Quote_VersionDAO(connection);

    quote_versionDAO.updateNewVersion(old_version_ids, version, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Version has been updated successfully.' })
    });
}

module.exports.updateThisVersion = (application, req, res) => {

    let quoteID = req.params.quoteID
    let currentVersion = req.params.currentVersion

    var connection = application.config.dbConnection;
    var quote_versionDAO = new application.app.models.Quote_VersionDAO(connection);

    quote_versionDAO.updateThisVersion(quoteID, currentVersion, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}
module.exports.createVersion = (application, req, res) => {

    let quoteID = req.body.quoteID
    let username = req.body.username

    var connection = application.config.dbConnection;
    var quote_versionDAO = new application.app.models.Quote_VersionDAO(connection);

    quote_versionDAO.createVersion(quoteID, username, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}