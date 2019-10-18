function login_GroupDAO(connection) {
    this._connection = connection;
}


login_GroupDAO.prototype.login = function (callback) {
    this._connection.query(`
        SELECT * from funcionario;
	`, callback)
}
login_GroupDAO.prototype.ordens = function (callback) {
    this._connection.query(`
    SELECT * FROM ordem_servico AS o 
	INNER JOIN cliente AS c ON o.id_ClienteOS =c.id_Cliente
	`, callback)
}
login_GroupDAO.prototype.postProduto = function (produto, callback) {
    this._connection.query(` 
    INSERT INTO estoque set ?
	`, produto, callback)
}
login_GroupDAO.prototype.getProduto = function (callback) {
    this._connection.query(`
    SELECT * FROM estoque ORDER BY id_Produto DESC
	`, callback)
}
login_GroupDAO.prototype.deleteProdutos = function (id, callback) {
    console.log(id)
    this._connection.query(`
    
    SELECT @num := (SELECT e.qtd_Produto FROM estoque AS e WHERE e.id_Produto = ?);

    UPDATE estoque AS e SET e.qtd_Produto = @num-1 
	WHERE e.id_Produto = ?
	`,[id,id], callback)
}
login_GroupDAO.prototype.postLogin = function (id, callback) {
    console.log(id)
    this._connection.query(`
    insert into funcionario set ?
	`, id, callback)
}
login_GroupDAO.prototype.getCargos = function (id, callback) {
    this._connection.query(`
    SELECT cargo_Funcionario from funcionario
	`, id, callback)
}






module.exports = () => {
    return login_GroupDAO;
}