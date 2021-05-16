const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '1234qwer',
    database: 'teams'
  },
  console.log("connected to the teams database!!")
);

module.exports = db;
