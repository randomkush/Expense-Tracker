var express=require("express");
var connection = require('./../config');
var expenseLogin = require('./authenticate-controller')
var expenseReg = require('./register-controller')
var app = require("./../index");

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
        return res.redirect('/transactionHistory');
      }
    });
    connection.query('SELECT * FROM transaction WHERE email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/data', function(req, res) {
              res.json(results);
            })
      }
    });
    // Pie Chart Shit
    connection.query('SELECT * FROM transaction WHERE category = "Food" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/food', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Health" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/health', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Essentials" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/essen', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Transportation" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/transport', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Education" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/edu', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Household" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/hhold', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Others" and email = ?',[emailid], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/others', function(req, res) {
              res.json(results);
            })
      }
    });

}



