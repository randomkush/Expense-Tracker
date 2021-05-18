var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var transactionController=require('./controllers/expense-controller');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/trans', function (req, res) {  
   res.sendFile( __dirname + "/" + "transaction history.html" );  
})
app.get('/home', function (req, res) {  
   res.sendFile( __dirname + "/" + "home.html" );  
})
app.get('/bg', function (req, res) {  
   res.sendFile( __dirname + "/" + "images" + "/" + "pranjul.jpg");  
})
   
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/controllers/expense-controller', transactionController.register);
app.listen(8080);
