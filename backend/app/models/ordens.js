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
login_GroupDAO.prototype.cadastroProdOrdens = function(idProd, prod, callback) {
	this._connection.query(
		`    
		SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id = ?);
  
		UPDATE estoque AS e SET e.qtd_Produto = @num-1 
		WHERE e.id = ?;
		
		Insert INTO prod_relation SET  ?;
	  
      `,
		[ idProd, idProd, prod ],
		callback
	);
};
login_GroupDAO.prototype.getProdByOrdens = function(idOrder, callback) {
	this._connection.query(
		`
	  SELECT * FROM  prod_relation where id_ordem = ?
	  
      `,
		idOrder,
		callback
	);
};
login_GroupDAO.prototype.deleteProd = function(id, idProd, callback) {
	this._connection.query(
		`
		SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id = ?);
  
		UPDATE estoque AS e SET e.qtd_Produto = @num+1 
		WHERE e.id = ?;

	  DELETE FROM  prod_relation where id = ?;
	  
      `,
		[ idProd, idProd, id ],
		callback
	);
};

module.exports = () => {
	return login_GroupDAO;
};
