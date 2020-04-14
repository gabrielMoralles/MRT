function login_GroupDAO(connection) {
	this._connection = connection;
}

login_GroupDAO.prototype.login = function(callback) {
	this._connection.query(
		`
          SELECT * from funcionario;
      `,
		callback
	);
};
login_GroupDAO.prototype.postLogin = function(id, callback) {
	console.log(id);
	this._connection.query(
		`
      insert into funcionario set ?;
      `,
		id,
		callback
	);
};
login_GroupDAO.prototype.forgotPass = function(email, user, callback) {
	console.log(email, user);
	this._connection.query(
		`
		SELECT email,usuario FROM funcionario WHERE email = ? AND usuario = ?; 
		`,
		[ email, user ],
		callback
	);
};
login_GroupDAO.prototype.changePass = function(pass, email, user, callback) {
	console.log(email, user);
	this._connection.query(
		`
		UPDATE funcionario SET senha = ? WHERE email = ? AND usuario = ?
		`,
		[ pass, email, user ],
		callback
	);
};

module.exports = () => {
	return login_GroupDAO;
};
