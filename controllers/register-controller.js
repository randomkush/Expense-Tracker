var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');

//DB ENTRY
module.exports.register = function(req,res){
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password1);
    var users={
        "name":req.body.firstName + ' ' + req.body.lastName,
        "email":req.body.email1,
        "password":encryptedString,
        "Date_created":today,
        "address":req.body.add1 + ' ' + req.body.add2,
        "city":req.body.city,
        "Occupation":req.body.job,
        "income":req.body.income,
        "Savings":req.body.savings
    }

    
    // Redirect
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        console.log("Registration Unsuccessful!");
        return res.redirect('/');
      }else{
        console.log("User Registered Succesfully!")
        return res.redirect('/home');
      }
    });
}
