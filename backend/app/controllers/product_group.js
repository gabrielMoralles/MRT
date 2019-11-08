module.exports.getGroupNumbers = (application, req, res) => {

    let id = req.params.id;

    var connection = application.config.dbConnection;
    var product_groupDAO = new application.app.models.Product_GroupDAO(connection);

    product_groupDAO.getGroupNumbers(id, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.getGroupMaxValue = (application, req, res) => {

    let id = req.params.id;

    var connection = application.config.dbConnection;
    var product_groupDAO = new application.app.models.Product_GroupDAO(connection);

    product_groupDAO.getGroupMaxValue(id, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.copyProductGroup = (application, req, res) => {

    let times = req.params.times;
    let newGroupValue = req.params.newGroupValue;
    let quote_id = req.params.quoteID;
    let groupCopy = req.params.groupCopy;

    var connection = application.config.dbConnection;
    var product_groupDAO = new application.app.models.Product_GroupDAO(connection);

    product_groupDAO.copyProductGroup(times, newGroupValue, quote_id, groupCopy, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.deleteProductGroup = (application, req, res) => {

    let quote_id = req.params.id;
    let groupNumber = req.params.groupNumber;

    var connection = application.config.dbConnection;
    var product_groupDAO = new application.app.models.Product_GroupDAO(connection);

    product_groupDAO.deleteProductGroup(quote_id, groupNumber, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Product has been delete successfully.' })
    });
}
module.exports.removeProductGroup = (application, req, res) => {

    let quote_id = req.params.id;
    let groupNumber = req.params.groupNumber;

    var connection = application.config.dbConnection;
    var product_groupDAO = new application.app.models.Product_GroupDAO(connection);

    product_groupDAO.removeProductGroup(quote_id, groupNumber, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Product has been delete successfully.' })
    });
}