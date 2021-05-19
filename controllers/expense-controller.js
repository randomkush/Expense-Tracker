var express=require("express");
var connection = require('./../config');
var expenseLogin = require('./authenticate-controller')
var expenseReg = require('./register-controller')

//DB ENTRY
module.exports.register = function(req,res){
    var emailid = expenseLogin.email;
    if(emailid == null)
      var emailid = expenseReg.email;
    console.log(emailid);
    var transaction={
        "email":emailid,
        "date":req.body.date,
        "time":req.body.time,
        "amount":req.body.expense,
        "mode_of_transaction":req.body.MoT,
        "category":req.body.cat,
        "comments":req.body.comment
    }
   
    // Redirect
    connection.query('INSERT INTO transaction SET ?',transaction, function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.redirect('/transactionHistory');
      }else{
        console.log("Data Entry Successful")
        // return res.redirect('/transactionHistory');
      }
    });
}



