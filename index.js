var express=require("express")
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = module.exports = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var transactionController=require('./controllers/expense-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTML REDIRECTS
app.get('/', function (req, res) {     
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/home', function (req, res) {
   res.sendFile( __dirname + '/home.html');
})
app.get('/transactionHistory', function (req, res) {  
   res.sendFile( __dirname + "/" + "transaction history.html" );  
})
app.get('/statistics', function (req, res) {     
   res.sendFile( __dirname + "/" + "statistics.html" );  
})
app.get('/savings', function (req, res) {     
   res.sendFile( __dirname + "/" + "savings.html" );  
}) 
app.get('/investments', function (req, res) {     
   res.sendFile( __dirname + "/" + "investment.html" );  
}) 
app.get('/expenseTracker', function(req, res){
   res.sendFile(__dirname + '/controllers' + '/tracking-controller.js')
});

// CSS STYLING
app.get('/bg1', function (req, res) {  
   res.sendFile( __dirname + "/images" + "/pranjul.jpg");  
})
app.get('/bg5', function (req, res) {  
   res.sendFile( __dirname + "/images" + "/statistics-graph-illustration.jpg");  
})
app.get('/bg4', function (req, res) {  
   res.sendFile( __dirname + "/images" + "/thbg.jpg");  
})
app.get('/alert', function(req, res){
   res.sendFile(__dirname + '/images' + '/alert 2.jpeg')
})
app.get('/bg2', function(req, res){
   res.sendFile(__dirname + '/images' + '/savings.jpeg')
})
app.get('/bg3', function(req, res){
   res.sendFile(__dirname + '/images' + '/investment.jpg')
})
app.get('/13-14', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/img/logo.png" );  
})  
app.get('/20', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/aos/aos.css" );  
})  
app.get('/21', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/bootstrap/css/bootstrap.min.css" );  
})  
app.get('/22', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/bootstrap-icons/bootstrap-icons.css" );  
})  
app.get('/23', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/boxicons/css/boxicons.min.css" );  
})  
app.get('/24', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/glightbox/css/glightbox.min.css" );  
})  
app.get('/25', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/swiper/swiper-bundle.min.css" );  
})  
app.get('/28', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/css/style.css" );  
}) 
app.get('/90', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/img/about.jpg" );  
}) 
app.get('/403', function (req, res) {     
   res.sendFile( __dirname + "/assets" + "/img/uper-bg.jpg" );  
})  
app.get('/711', function (req, res) {     
   res.sendFile( __dirname + "/assets" + "/img/cta-bg.jpg" );  
})  
app.get('/47', function (req, res) {     
   res.sendFile( __dirname + "/assets" + "/img/favicon.png" );  
})  
app.get('/48', function (req, res) {     
   res.sendFile( __dirname + "/assets" + "/img/apple-touch-icon.png" );  
})  

// Team Photos
app.get('/kush', function(req, res){
   res.sendFile(__dirname + '/images' + '/image0.png')
})
app.get('/pranjul', function(req, res){
   res.sendFile(__dirname + '/images' + '/CHOMU.png')
})
app.get('/saloni', function(req, res){
   res.sendFile(__dirname + '/images' + '/SALONI.png')
})
app.get('/mehul', function(req, res){
   res.sendFile(__dirname + '/images' + '/ME.png')
})
app.get('/google', function(req, res){
   res.sendFile(__dirname + '/images' + '/google.png')
})
app.get('/stack', function(req, res){
   res.sendFile(__dirname + '/images' + '/stack.png')
})

// BOOTSTRAP JS
app.get('/388', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/aos/aos.js" );  
})  
app.get('/389', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/bootstrap/js/bootstrap.bundle.min.js" );  
})  
app.get('/390', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/glightbox/js/glightbox.min.js" );  
})  
app.get('/391', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/isotope-layout/isotope.pkgd.min.js" );  
})  
app.get('/392', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/php-email-form/validate.js" );  
})  
app.get('/393', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/vendor/swiper/swiper-bundle.min.js" );  
})  
app.get('/396', function (req, res) {     
   res.sendFile( __dirname + "/" + "assets/js/main.js" );  
})  

// function isLoggedIn(req, res, next) {
//    if(req.isAuthenticated())
//       return next();
//    else
//       res.redirect('/');
// }

console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/controllers/expense-controller', transactionController.register);
app.listen(8080);
