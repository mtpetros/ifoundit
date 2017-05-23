module.exports = function htmlRoutes (app) {
    app.get('/signup', function(req, res){
        res.render('register', { info: {message: req.flash('message')} });
    });
    
    app.get('/', function(req, res) {
        res.render('login', { info: {message: req.flash('message')} });
    });
    
    app.get("/main", function(req, res) {
        console.log(req.user);
        console.log(req.isAuthenticated());
        res.render('index', {user: req.user});
    });

    /* Handle Logout */
    app.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // app.get('*', function(req, res){
    //     res.render('main', {user: {name: req.user}});
    // });
}