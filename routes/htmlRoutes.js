module.exports = function htmlRoutes (app, Marker, Message, ensureAuthenticated) {
    app.get('/signup', function(req, res){
        res.render('register', { info: {message: req.flash('message')} });
    });
    
    app.get('/', function(req, res) {
        res.render('login', { info: {message: req.flash('message')} });
    });
    
    app.get("/main", ensureAuthenticated, function(req, res) {
        console.log(req.user);
        console.log(req.isAuthenticated());
        res.render('index', {user: req.user});
    });

    app.get("/profile", ensureAuthenticated, function(req, res) {
        res.render('profile', {user: req.user});
    });

    app.get("/markers/details", ensureAuthenticated, function(req, res) {
        Marker.find({_id: req.query.id}).exec(function(err, info) {
            if (err) {
                console.log(err);
            } else {
                 Message.find({Marker_id: req.query.id}).exec(function(err, message) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.render('markerdetails', {markerDetails: {marker: info, messages: message}});
                    }
                });
            }
        });        
    });

    // app.get("/markers/details/message", ensureAuthenticated, function(req, res) {
    //     Message.find({Marker_id: req.query.id}).exec(function(err, doc) {
    //         if (err) {
    //             console.log(err);
    //         } 
    //     });
    // });

    /* Handle Logout */
    app.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

}