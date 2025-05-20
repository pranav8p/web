const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nikita#2203#Pawar",
  database: "electricity",
});
module.exports = pool.promise();
