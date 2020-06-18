function login_GroupDAO(connection) {
	this._connection = connection;
}

login_GroupDAO.prototype.ordens = function(callback) {
	this._connection.query(
		`
      SELECT * FROM ordem
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
      INSERT INTO ordem set ?
      `,
		id,
		callback
	);
};
login_GroupDAO.prototype.deleteOrdens = function(id, callback) {
	this._connection.query(
		`
      	UPDATE ordem SET  fl_ativo = 0 where id_ordem = ?;
      `,
		id,
		callback
	);
};
login_GroupDAO.prototype.cadastroProdOrdens = function(idProd, prod, callback) {
	this._connection.query(
		`    
		SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id_estoque = ?);
  
		UPDATE estoque AS e SET e.qtd_Produto = @num-1 
		WHERE e.id_estoque = ?;
		
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
		SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id_estoque = ?);
  
		UPDATE estoque AS e SET e.qtd_Produto = @num+1 
		WHERE e.id_estoque = ?;

	  	UPDATE prod_relation SET fl_ativo = 0 where id_estoque = ?;
	  
      `,
		[ idProd, idProd, idProd ],
		callback
	);
};
login_GroupDAO.prototype.updateProd = function(id, order, callback) {
	this._connection.query(
		`
		UPDATE ordem SET ? where id_ordem = ?
      `,
		[ order, id ],
		callback
	);
};

module.exports = () => {
	return login_GroupDAO;
};
