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
      SELECT * FROM estoque ORDER BY id DESC
      `,
		callback
	);
};
login_GroupDAO.prototype.deleteProdutos = function(id, callback) {
	console.log(id);
	this._connection.query(
		`
      
      SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id = ?);
  
      UPDATE estoque AS e SET e.qtd_Produto = @num-1 
      WHERE e.id = ?;
      `,
		[ id, id ],
		callback
	);
};
login_GroupDAO.prototype.addProdutos = function(id, callback) {
	console.log('add');
	this._connection.query(
		`
      
      SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id = ?);
  
      UPDATE estoque AS e SET e.qtd_Produto = @num+1 
      WHERE e.id = ?;
      `,
		[ id, id ],
		callback
	);
};
module.exports = () => {
	return login_GroupDAO;
};
