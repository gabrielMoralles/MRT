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
    SELECT * FROM tabela_ordem
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
login_GroupDAO.prototype.cadastroOrdens = function (id, callback) {
    this._connection.query(`
    INSERT INTO tabela_ordem set ?
	`, id, callback)
}
login_GroupDAO.prototype.deleteOrdens = function (id, callback) {
    this._connection.query(`
    DELETE FROM tabela_ordem where id = ?
	`, id, callback)
}







module.exports = () => {
    return login_GroupDAO;
}