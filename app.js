var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

//app.use('/users', users);

// Register Routes

app.get('',function(req,res){
  res.render('Home.html');
});

app.get('/',function(req,res){
  res.render('Home.html');
});

app.get('/home', function(req,res){
  res.render('Home.html');
});

app.get('/academicquad', function(req, res){
  res.render('AcademicQuad.html');
});

app.get('/anderson', function(req, res){
  res.render('AndersonStreet.html');
});

app.get('/roy', function(req, res){
  res.render('Roy.html');
});

app.get('/boulder', function(req, res){
  res.render('Boulder.html');
});

app.get('/bowman', function(req, res){
  res.render('Bowman.html');
});

app.get('/julian', function(req, res){
  res.render('Julian.html');
});

app.get('/lilly', function(req, res){
  res.render('Lilly.html');
});

app.get('/rector', function(req, res){
  res.render('Rector.html');
});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(8000, function(){
  console.log('App is listening on port 8000.')
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
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
  console.log(err.message);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
