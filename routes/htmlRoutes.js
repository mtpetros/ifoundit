module.exports = function htmlRoutes (app) {
    app.get("/", function(req, res) {
        res.render('index');
    });
}