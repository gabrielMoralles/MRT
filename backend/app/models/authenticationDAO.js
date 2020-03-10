function authenticationDAO(connection) {
    this._connection = connection;
}

authenticationDAO.prototype.authentication = function (ad, config, user, pass, res) {

    let authorization_level = [
        { ldap_group: 'Brazil Solution Development Team', permission: 'FULL' },
        { ldap_group: 'Brazil Equinix Profissinal Services Team', permission: 'FULL' },
        { ldap_group: 'Brazil Sales Engineering', permission: 'FULL' },
        { ldap_group: 'comercialsp', permission: 'MIDDLE' },
        { ldap_group: 'comercialrj', permission: 'MIDDLE' },
        { ldap_group: 'br-qss-om', permission: 'BASIC' },
        { ldap_group: 'br-eti', permission: 'BASIC' },
        { ldap_group: 'equipe.csm', permission: 'BASIC' }
    ];

    let promise1 = new Promise((resolve, reject) => {
        ad.authenticate(user, pass, function (err, auth) {
            if (err) {
                reject('err');
            }

            if (auth) {
                resolve(auth)
            } else {
                resolve(auth)
            }
        })
    })

    let promise2 = new Promise((resolve, reject) => {
        ad.getGroupMembershipForUser(user, function (err, groups) {
            if (err) {
                reject('err');
            }

            if (!groups) {
                reject('User: ' + user + ' not found.');
            } else {
                resolve(groups);
            }
        });
    })

    let promise3 = new Promise((resolve, reject) => {
        ad.findUser(user, function (err, user) {
            if (err) {
                reject('err');
            }

            if (!user) {
                reject('err')
            } else {
                resolve(user);
            }
        });
    })

    let username = '';
    let authenticated = false;
    let authorized = false;
    let hasGroup = false
    let groupName = '';
    let permission = '';

    Promise.all([promise1, promise2, promise3], username, authenticated, authorized, hasGroup, groupName, permission)
        .then(([auth, groups, userInfo]) => {
            if (auth) {
                let found = false
                authorization_level.forEach(auth => {
                    if (found == false) {
                        groups.forEach(group => {
                            if (group.cn === auth.ldap_group) {
                                // console.log(group.cn)
                                // console.log(auth.ldap_group)
                                hasGroup = true;
                                username = userInfo.cn;
                                authenticated = auth;
                                authorized = auth;
                                groupName = auth.ldap_group;
                                permission = auth.permission;
                                found = true
                                res.send({ username, authenticated, authorized, groupName, permission })
                            }
                        });
                    }
                });
            }
            if (!hasGroup) {
                let msgErrorAccess = 'To gain access to the Solution Request Portal please contact:';
                let msgEmailOwner = 'Brazil Solution Development Team';
                let msgEmail = 'br-soldev@equinix.com';
                let msgErrorGroup = "You are not authorized to use the Solution Request Portal";
                username = userInfo.cn;
                authenticated = true;
                res.send({ authenticated, authorized, username, msgErrorGroup, msgErrorAccess, msgEmailOwner, msgEmail });
            }
        })
        .catch(error => {
            let situation = error;
            let acessDenied = 'User and / or password incorrect';
            let equinixNetwork = 'Make sure you are connected to the Equinix network via cable or VPN.';
            res.send({ situation, acessDenied, equinixNetwork });
        })
}

module.exports = function () {
    return authenticationDAO;
}