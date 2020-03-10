module.exports = (application) => {
    // application.get('/login', (req, res) => {
    //     application.app.controllers.product_group.login(application, req, res);
    // });

    application.get('/group-max-value/:id', (req, res) => {
        application.app.controllers.product_group.getGroupMaxValue(application, req, res);
    });

    application.get('/copy-group/:times/:newGroupValue/:quoteID/:groupCopy', (req, res) => {
        application.app.controllers.product_group.copyProductGroup(application, req, res);
    });

    application.delete('/delete-group/:id/:groupNumber', (req, res) => {
        application.app.controllers.product_group.deleteProductGroup(application, req, res);
    });
    application.patch('/delete-group/:id/:groupNumber', (req, res) => {
        application.app.controllers.product_group.removeProductGroup(application, req, res);
    });
}