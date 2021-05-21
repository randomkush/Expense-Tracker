var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '8012',
  user     : 'root',
  password : 'password',
  database : 'dummy'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = connection; 
