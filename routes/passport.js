module.exports = function passportRoutes(app, passport){
 
  /* GET login page. */
  app.get('/', function(req, res) {
    // Display the Login page with any flash message, if any
    res.render('login', { message: req.flash('message') });
  });
 
  /* Handle Login POST */
  app.post('/login', passport.authenticate('login', {
    successRedirect: '/main',
    failureRedirect: '/',
    failureFlash : true 
  }));
 
  /* GET Registration Page */
  app.get('/signup', function(req, res){
    res.render('register',{message: req.flash('message')});
  });
 
  /* Handle Registration POST */
  app.post('/signup', passport.authenticate('signup', {
    successRedirect: '/main',
    failureRedirect: '/signup',
    failureFlash : true 
  }));
 
}