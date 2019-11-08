module.exports.getProducts = (application, req, res) => {

    let id = req.params.id;

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.getProducts(id, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.productsADD = (application, req, res) => {

    let addInfos = req.body;
    let product = addInfos.product;
    let username = addInfos.username
    let id = product[0][6]
    let AccountName = addInfos.AccountName

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.productsADD(product, id, username, AccountName, (error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.productUpdate = (application, req, res) => {
    let updateInfos = req.body;
    let quote_id = req.params.quoteID;
    let product_id = req.params.productID;
    let updateProduct = updateInfos.product;
    let username = req.body.username;
    let AccountName = updateInfos.AccountName

    if (!quote_id || !updateProduct) {
        return res.status(400).send({ error: true, message: 'Please provide Product and quote_id' });
    }

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.productUpdate(quote_id, product_id, updateProduct, username,AccountName, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Quote has been updated successfully.' })
    });
}

module.exports.productDelete = (application, req, res) => {

    let product = req.body;
    let id = product.id
    let username = product.username
    let quote_id = product.quote_id
    let AccountName = product.AccountName

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.productDelete(id, username, quote_id, AccountName, (error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Product has been delete successfully.' })
    });
}

module.exports.quoteProductsDelete = (application, req, res) => {
    let body = req.body
    let quote_id = req.params.id
    let AccountName = body.AccountName
    let username = body.username

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.quoteProductsDelete(quote_id, AccountName,username,(error, results) => {
        if (error) throw error
        return res.send({ error: false, data: results, message: 'Product has been delete successfully.' })
    });

}

module.exports.getExamples = (application, req, res) => {

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.getExamples((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}


module.exports.getPrintProducts = (application, req, res) => {

    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);

    productsDAO.getPrintProducts((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.removeProduct = (application, req, res) => {
    var id = req.params.id
    var username = req.body.username
    var AccountName = req.body.AccountName
    var connection = application.config.dbConnection;
    var productsDAO = new application.app.models.ProductsDAO(connection);
    
    productsDAO.removeProduct(id,username,AccountName,(error, results) => {
        if (error) throw error
        return res.send(results)
    });

}
