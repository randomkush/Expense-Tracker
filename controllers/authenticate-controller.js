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
          app.get('/data', function(req, res) {
              res.json(results);
            })
      }
    });
}
