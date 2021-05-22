var express=require("express");
var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
var app = require("./../index");
  
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    exports.email = email;
    var password=req.body.password;
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          console.log("There is some ERROR with Query!");
          return res.redirect('/');
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              console.log("Login Successful!");
              return res.redirect('/home');
              
            }else{
              console.log("Email and Password DO NOT match!");
              return res.redirect('/');
            }          
        }
        else{
          console.log("Email does NOT exists!");
          return res.redirect('/');
        }
      }
    });
    connection.query('SELECT * FROM transaction WHERE email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/data1', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM users WHERE email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/data2', function(req, res) {
              res.json(results);
            })
      }
    });
    // Pie Chart Shit
    connection.query('SELECT * FROM transaction WHERE category = "Food" and email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/food', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Health" and email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/health', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Essentials" and email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/essen', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Transportation" and email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/transport', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Education" and email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/edu', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Household" and email = ?',[email], function(error, results, fields){
      if(error) {
         console.log(error);
      }
      else {
          app.get('/hhold', function(req, res) {
              res.json(results);
            })
      }
    });
    connection.query('SELECT * FROM transaction WHERE category = "Others" and email = ?',[email], function(error, results, fields){
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
