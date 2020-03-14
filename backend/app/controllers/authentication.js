// module.exports.authentication = function(application, req, res){

// 	let credentials = req.body

// 	let user = credentials.login + '@equinix.com'
//     let pass = credentials.senha

//     // var cookie = require('cookie-signature');
//     var ActiveDirectory = require('activedirectory2');
//     var config = {
//         url: 'ldap://global.equinix.com',
//         baseDN: 'dc=global,dc=equinix,dc=com',
//         username: user,
//         password: pass
//     }
//     var ad = new ActiveDirectory(config);

// 	var connection = application.config.dbConnection;
// 	var authenticationDAO = new application.app.models.authenticationDAO(connection);

// 	authenticationDAO.authentication(ad, config, res);	
// }

module.exports.authentication = function(application, req, res){

	let credentials = req.body

	let user = credentials.login + '@equinix.com'
    let pass = credentials.senha

    // var cookie = require('cookie-signature');
    var ActiveDirectory = require('activedirectory2');
    var config = {
        url: 'ldap://global.equinix.com',
        baseDN: 'dc=global,dc=equinix,dc=com',
        username: 'svc-srpuser@equinix.com',
        password: 'srp@eqx2019'
    }
    var ad = new ActiveDirectory(config);

	var connection = application.config.dbConnection;
	var authenticationDAO = new application.app.models.authenticationDAO(connection);

	authenticationDAO.authentication(ad, config, user, pass, res);	
}