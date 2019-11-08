module.exports.getProductsQuantity = (application, req, res) => {

    let id = req.params.id;

    var connection = application.config.dbConnection;
    var products_quantityDAO = new application.app.models.Products_QuantityDAO(connection);

    products_quantityDAO.getProductsQuantity(id, (error, results) => {
        if (error) throw error
        return res.send(results[0])
    });
}