var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
// var express=require("express");
// var app = express();
// var authenticate = false;
  
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          console.log("There is some ERROR with Query!");
          //return res.redirect('/');
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              console.log("Login Successful!");
              //authenticate = true;
              return res.redirect('/home');
            }else{
              console.log("Email and Password DO NOT match!");
              //return res.redirect('/');
            }          
        }
        else{
          console.log("Email does NOT exists!");
          //return res.redirect('/');
        }
      }
    });

    // app.get('/home', function (req, res) {
    //   if(authenticate === true) {
    //     console.log("Login Successful!");
    //     res.sendFile( __dirname + "/" + "home.html" );
    //     return res.redirect('/home');  
    //   } else {
    //     res.redirect('/');
    //   }
        // if(authenticate === true) {
      //   res.redirect('/home');
      // }
      // else
      //   res.redirect('/');
    // }) 
}
