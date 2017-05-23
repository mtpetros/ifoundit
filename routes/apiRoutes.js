module.exports = function apiRoutes (app, passport, Marker) {
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
    
    app.post("/markers", function(req, res) {
        Marker.create({
            key: req.body.key,
            defaultAnimation: req.body.defaultAnimation,
            position: {
                lat: req.body.position.lat,
                lng: req.body.position.lng
            },
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

    app.get("/markers", function(req, res) {

        Marker.find({}).exec(function(err, doc) {
            if (err) {
            console.log(err);
            }
            else {
            res.send(doc);
            }
        });
    });
}