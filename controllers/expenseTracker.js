var express = require('express');
var router = express.Router();
var connection = require('./../config');
var expenseLogin = require('./authenticate-controller')
var expenseReg = require('./register-controller')

router.get('/transactionHistory', function(req, res) {
    var emailid = expenseLogin.email;
    if(emailid == null)
      var emailid = expenseReg.email;
    console.log(emailid);
    connection.query('SELECT * FROM transaction WHERE email = ?',[emailid], function(error, results, fields) {
        if(error) {
            console.log("There is some ERROR with the Query!");
        }
        else {
            console.log("Successful");
            res.render('transactionHistory', {title: 'Expense Tracker', userData: data});
        }
    });
});
module.exports = router;