function login_GroupDAO(connection) {
	this._connection = connection;
}

login_GroupDAO.prototype.ordens = function(callback) {
	this._connection.query(
		`
      SELECT * FROM tabela_ordem
      `,
		callback
	);
};
login_GroupDAO.prototype.getCargos = function(id, callback) {
	this._connection.query(
		`
      SELECT cargo_Funcionario from funcionario
      `,
		id,
		callback
	);
};
login_GroupDAO.prototype.cadastroOrdens = function(id, callback) {
	this._connection.query(
		`
      INSERT INTO tabela_ordem set ?
      `,
		id,
		callback
	);
};
login_GroupDAO.prototype.deleteOrdens = function(id, callback) {
	this._connection.query(
		`
      DELETE FROM tabela_ordem where id = ?
      `,
		id,
		callback
	);
};

module.exports = () => {
	return login_GroupDAO;
};
