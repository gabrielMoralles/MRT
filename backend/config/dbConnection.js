const mysql = require("mysql");

const connMySQL = mysql.createConnection({
  host: "localhost",
  user: "gabriel",
  password: "mrt@1",
  database: "mrt",
  port: 3306,
  multipleStatements: true
});

module.exports = () => {
  return connMySQL;
};
