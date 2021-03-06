var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var flash = require("connect-flash");
var bcrypt = require("bcrypt-nodejs");
var methodOverride = require("method-override");


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('keyboardBob'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

// Passport config

var User = require("./models/Users.js");

var expressSession = require('express-session');
app.use(expressSession({secret: 'keyboardBob'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/')
  }
};

require("./passport/login.js")(passport, bcrypt, LocalStrategy, User);
require("./passport/signup.js")(passport, bcrypt, LocalStrategy, User);

// MongoDB config -------------------------------------
mongoose.connect("mongodb://localhost/ifoundit");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//require the MongoDB models from Mongoose
var Marker = require("./models/Marker.js");
var Message = require("./models/Message.js");

// ----------------------------------------------------
require("./routes/htmlRoutes.js")(app, Marker, Message, ensureAuthenticated);
require("./routes/apiRoutes.js")(app, passport, Marker, ensureAuthenticated);
// require("./routes/passport.js")(app, passport);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
