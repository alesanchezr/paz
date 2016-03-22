var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var nodemailer = require("nodemailer");
var sendgrid = require('sendgrid');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');




// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//mail
app.get('/send',function(req,res){
  var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
  sendgrid.send({
    to : req.query.to,
    from: req.query.mail,
    subject: "Mensaje web",
    text: req.query.mail + req.query.text,
    html: "<h2>" + req.query.name + "</h2></br><h4>" + req.query.company+"</h4><p>"+req.query.text+"</p>"

  }, function(err, json) {
    if (err) { 
      return console.error(err);
      res.end("error");
    }else{
      res.end("sent");
    }
    console.log(json);
  });

});


// app.get('/send',function(req,res){
//     var mailOptions={
//         from: req.query.mail,
//         to : req.query.to,
//         subject:"Mensaje web",
//         text : req.query.text, 
//         html: "<h2>" + req.query.name + "</h2></br><h4>" + req.query.company+"</h4><p>"+req.query.company+"</p>"
//     }
//     console.log(mailOptions);
//     smtpTransport.sendMail(mailOptions, function(error, response){
//      if(error){
//             console.log(error);
//         res.end("error");
//      }else{
//             console.log("Message sent: " + response.message);
//         res.end("sent");
//          }
// });
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
