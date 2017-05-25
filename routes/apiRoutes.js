module.exports = function apiRoutes (app, passport, Marker, ensureAuthenticated) {
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/main',
        failureRedirect: '/signup',
        failureFlash : true 
    }));
    
    app.post('/login', passport.authenticate('login', {
        successRedirect: '/main',
        failureRedirect: '/',
        failureFlash : true 
    }));
    
    app.post("/markers", ensureAuthenticated, function(req, res) {
        Marker.create({
            key: req.body.key,
            defaultAnimation: req.body.defaultAnimation,
            position: {
                lat: req.body.position.lat,
                lng: req.body.position.lng
            },
            user: req.user.username,
            lostOrFound: req.body.lostOrFound,
            desc: req.body.desc,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            name: req.body.name,
            contact: req.body.contact},
            
            function(err) {
            if (err) {
            console.log(err);
            }
            else {
            res.status(200).end();
            }
        });
    });

    app.get("/markers", ensureAuthenticated, function(req, res) {
        Marker.find({}).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    // app.get("/markers/single", ensureAuthenticated, function(req, res) {
    //     Marker.find({_id: req.query.id}).exec(function(err, doc) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.send(doc);
    //         }
    //     });
    // });

    app.get("/profile/lost", ensureAuthenticated, function(req, res) {
        console.log("finding loser markers");
        console.log(req.user.username);
        Marker.find({})
        .where('user').equals(req.user.username)
        .where('lostOrFound').equals('loser')
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    app.get("/profile/found", ensureAuthenticated, function(req, res) {
        console.log("finding finder markers");
        console.log(req.user.username);
        Marker.find({})
        .where('user').equals(req.user.username)
        .where('lostOrFound').equals('finder')
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
    });

    app.post("/delete", ensureAuthenticated, function(req, res) {
        Marker.find({})
        .where('user').equals(req.user.username)
        .where('_id').equals(req.query.id)
        .remove()
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/profile');
            }
        });
    });
}