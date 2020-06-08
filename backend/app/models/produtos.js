function login_GroupDAO(connection) {
	this._connection = connection;
}
login_GroupDAO.prototype.postProduto = function(produto, callback) {
	this._connection.query(
		` 
      INSERT INTO estoque set ?
      `,
		produto,
		callback
	);
};
login_GroupDAO.prototype.getProduto = function(callback) {
	this._connection.query(
		`
      SELECT * FROM estoque ORDER BY id_estoque DESC
      `,
		callback
	);
};
login_GroupDAO.prototype.removerProdutos = function(id_estoque, callback) {
	console.log(id_estoque);
	this._connection.query(
		`
			UPDATE estoque set fl_ativo = 0  where id_estoque = ?;
      `,
		[ id_estoque ],
		callback
	);
};
login_GroupDAO.prototype.deleteProdutos = function(id_estoque, callback) {
	console.log(id_estoque);
	this._connection.query(
		`
      
      SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id_estoque = ?);
  
      UPDATE estoque AS e SET e.qtd_Produto = @num-1 
      WHERE e.id = ?;
      `,
		[ id_estoque, id_estoque ],
		callback
	);
};
login_GroupDAO.prototype.addProdutos = function(id, callback) {
	console.log('add');
	this._connection.query(
		`
      
      SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id = ?);
  
      UPDATE estoque AS e SET e.qtd_Produto = @num+1 
      WHERE e.id_estoque = ?;
      `,
		[ id, id ],
		callback
	);
};
module.exports = () => {
	return login_GroupDAO;
};
