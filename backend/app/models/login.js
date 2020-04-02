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

module.exports = () => {
	return login_GroupDAO;
};
