// var express = require('express');
// var router = express.Router();
// var connection = require('./../config');
// var expenseLogin = require('./authenticate-controller')
// var expenseReg = require('./register-controller')

// router.get('/transactionHistory', function(req, res) {
//     var emailid = expenseLogin.email;
//     if(emailid == null)
//       var emailid = expenseReg.email;
//     console.log(emailid);
//     connection.query('SELECT * FROM transaction WHERE email = ?',[emailid], function(error, results, fields) {
//         if(error) {
//             console.log("There is some ERROR with the Query!");
//         }
//         else {
//             console.log("Successful");
//             res.send(results);
//         }
//     });
// });
// module.exports = router;

var express = require('express');
var router = express.Router();
var db=require('./../config');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM transactions';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});
module.exports = router;