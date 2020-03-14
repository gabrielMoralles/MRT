const app = require('./config/server')

// port must be set to 9095 because incoming http requests are routed from port 80 to port 9095
app.listen(9095, function () {
    console.log('Node app is running on port 9095');
});


