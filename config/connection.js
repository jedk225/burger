// Set up MySQL connection.
var mysql = require("mysql");

//code to read and set any environment variables with the dotenv package
require('dotenv').config();

// Grabs password from .env file so it does not get posted to Github
var mypassword = process.env.MYSQL_PW;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: mypassword,
//   database: "burgers_db"
// });

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mypassword,
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
